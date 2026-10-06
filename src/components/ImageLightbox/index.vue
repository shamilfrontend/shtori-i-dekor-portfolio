<script setup lang="ts">
import { nextTick, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export type LightboxImage = {
  src: string;
  alt: string;
};

const props = defineProps<{
  images: LightboxImage[];
  index: number | null;
}>();

const emit = defineEmits<{
  close: [];
  navigate: [index: number];
}>();

const { t } = useI18n();
const closeButton = ref<HTMLButtonElement | null>(null);
const frame = ref<HTMLElement | null>(null);
let previousFocus: HTMLElement | null = null;

function step(delta: number) {
  if (props.index === null || props.images.length === 0) return;
  const next =
    (props.index + delta + props.images.length) % props.images.length;
  emit("navigate", next);
}

function onKeydown(event: KeyboardEvent) {
  if (props.index === null) return;
  if (event.key === "Escape") {
    event.preventDefault();
    emit("close");
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    step(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    step(1);
  }
}

watch(
  () => props.index,
  (index) => {
    if (index === null) {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeydown);
      previousFocus?.focus();
      previousFocus = null;
      return;
    }

    if (!previousFocus) {
      previousFocus =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeydown);
    }

    nextTick(() => {
      if (frame.value) frame.value.scrollTop = 0;
      closeButton.value?.focus();
    });
  },
);

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="index !== null"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="images[index]?.alt"
      @click.self="emit('close')"
    >
      <button
        ref="closeButton"
        class="lightbox__close"
        type="button"
        :aria-label="t('pages.reviews.lightboxClose')"
        @click="emit('close')"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </button>

      <button
        class="lightbox__nav lightbox__nav--prev"
        type="button"
        :aria-label="t('pages.reviews.lightboxPrev')"
        @click="step(-1)"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M14 6l-6 6 6 6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </button>

      <div ref="frame" class="lightbox__frame">
        <img :src="images[index]?.src" :alt="images[index]?.alt" />
      </div>

      <button
        class="lightbox__nav lightbox__nav--next"
        type="button"
        :aria-label="t('pages.reviews.lightboxNext')"
        @click="step(1)"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M10 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </button>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 72px;
  background: rgba(9, 54, 78, 0.72);

  &__close,
  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid var(--color-sand);
    background: #fff;
    color: var(--color-navy);
    cursor: pointer;

    &:hover {
      background: var(--color-bg-soft);
    }
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  &__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--prev {
      left: 16px;
    }

    &--next {
      right: 16px;
    }
  }

  &__frame {
    width: min(420px, 100%);
    max-height: calc(100vh - 48px);
    overflow: auto;
    background: #fff;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
