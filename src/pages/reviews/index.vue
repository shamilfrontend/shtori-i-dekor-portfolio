<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLocaleContent } from "../../composables/useLocaleContent";

defineOptions({ name: "ReviewsPage" });

const { t } = useI18n();
const { reviews } = useLocaleContent();
</script>

<template>
  <div class="reviews-page">
    <h1>{{ t("pages.reviews.title") }}</h1>

    <div class="reviews-page__content">
      <ul class="reviews-page__list">
        <li v-for="review in reviews" :key="review.id">
          <p class="reviews-page__name">{{ review.name }}</p>
          <p class="reviews-page__meta">{{ review.meta }}</p>
          <p class="reviews-page__text">{{ review.text }}</p>
        </li>
      </ul>

      <figure class="reviews-page__media">
        <img
          src="/works/river-tower/1.jpg"
          :alt="t('pages.reviews.imageAlt')"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.reviews-page {
  @include page-padding;

  h1 {
    @include page-title;
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 48px;
    align-items: start;

    @media (max-width: $bp-desktop) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  &__list {
    max-width: 560px;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 40px;
      }
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
  }

  &__media {
    margin: 0;
    overflow: hidden;

    @media (min-width: #{$bp-desktop + 1px}) {
      position: sticky;
      top: 24px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }
  }
}
</style>
