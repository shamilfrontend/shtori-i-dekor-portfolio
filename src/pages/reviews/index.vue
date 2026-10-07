<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useLocaleContent } from "../../composables/useLocaleContent";
import { withBase } from "../../utils/withBase";
import ImageLightbox from "../../components/ImageLightbox/index.vue";

defineOptions({ name: "ReviewsPage" });

const { t } = useI18n();
const { reviews, reviewShots } = useLocaleContent();
const activeShot = ref<number | null>(null);

const lightboxImages = computed(() =>
  reviewShots.value.map((shot) => ({
    src: withBase(shot.src),
    alt: shot.alt,
  })),
);

const expanded = reactive<Record<string, boolean>>({});
const overflow = ref<Record<string, boolean>>({});
const listEl = ref<HTMLElement | null>(null);
const textEls = new Map<string, HTMLElement>();
let resizeObserver: ResizeObserver | null = null;

function setTextRef(id: string, el: Element | null) {
  if (el instanceof HTMLElement) textEls.set(id, el);
  else textEls.delete(id);
}

function measureOverflow() {
  const next: Record<string, boolean> = {};
  for (const [id, el] of textEls) {
    next[id] = el.scrollHeight > el.clientHeight + 1;
  }
  overflow.value = next;
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => measureOverflow());
  if (listEl.value) resizeObserver.observe(listEl.value);
  nextTick(measureOverflow);
  document.fonts?.ready.then(() => measureOverflow());
});

watch(reviews, () => nextTick(measureOverflow));

onUnmounted(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <div class="reviews-page">
    <h1>{{ t("pages.reviews.title") }}</h1>

    <section class="reviews-page__messengers">
      <h2>{{ t("pages.reviews.messengersTitle") }}</h2>
      <ul class="reviews-page__shots">
        <li v-for="(shot, index) in reviewShots" :key="shot.id">
          <button
            type="button"
            class="reviews-page__shot"
            @click="activeShot = index"
          >
            <img
              :src="withBase(shot.src)"
              :alt="shot.alt"
              :loading="index === 0 ? 'eager' : 'lazy'"
              decoding="async"
            />
          </button>
        </li>
      </ul>
    </section>

    <div class="reviews-page__list-wrap">
      <ul ref="listEl" class="reviews-page__list">
        <li v-for="review in reviews" :key="review.id">
          <p class="reviews-page__name">{{ review.name }}</p>
          <p class="reviews-page__meta">{{ review.meta }}</p>
          <p
            :ref="(el) => setTextRef(review.id, el as Element | null)"
            class="reviews-page__text"
            :class="{ 'reviews-page__text--clamped': !expanded[review.id] }"
          >
            {{ review.text }}
          </p>
          <button
            v-if="!expanded[review.id] && overflow[review.id]"
            type="button"
            class="reviews-page__more"
            @click="expanded[review.id] = true"
          >
            {{ t("pages.reviews.readMore") }}
          </button>
        </li>
      </ul>

      <a
        class="reviews-page__all-link"
        href="https://yandex.ru/maps/org/shtory_i_dekor/110361871224/reviews/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t("pages.reviews.viewAll") }}
      </a>
    </div>

    <ImageLightbox
      :images="lightboxImages"
      :index="activeShot"
      @close="activeShot = null"
      @navigate="activeShot = $event"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.reviews-page {
  @include page-padding;

  h1 {
    @include page-title;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px 32px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: $bp-desktop) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: $bp-phone) {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    li {
      margin: 0;
    }
  }

  &__all-link {
    display: inline-block;
    margin-top: 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-navy);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s;

    &:hover {
      color: var(--color-muted);
    }
  }

  &__name {
    margin: 0 0 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-navy);
  }

  &__meta {
    margin: 0 0 12px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-muted);
  }

  &__text {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);

    &--clamped {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }

  &__more {
    margin: 8px 0 0;
    padding: 0;
    border: 0;
    background: none;
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-navy);
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;

    &:hover {
      color: var(--color-muted);
    }
  }

  &__list-wrap {
    margin-top: 88px;
  }

  &__messengers {
    h2 {
      margin: 0 0 28px;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.25;
      color: var(--color-navy);

      @media (max-width: $bp-phone) {
        font-size: 22px;
      }
    }
  }

  &__shots {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px 20px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: $bp-desktop) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__shot {
    display: block;
    width: 100%;
    padding: 0;
    border: 1px solid var(--color-sand);
    background: var(--color-bg-soft);
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 420px;
      object-fit: cover;
      object-position: top;
    }
  }
}
</style>
