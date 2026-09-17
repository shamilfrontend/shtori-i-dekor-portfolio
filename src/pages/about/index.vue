<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineOptions({ name: "AboutPage" });

const { t } = useI18n();
</script>

<template>
  <div class="about-page">
    <h1>{{ t("pages.about.title") }}</h1>

    <div class="about-page__content">
      <div class="about-page__text">
        <p>{{ t("pages.about.p1") }}</p>
        <p>{{ t("pages.about.p2") }}</p>
        <p>{{ t("pages.about.p3") }}</p>
      </div>

      <figure class="about-page__media">
        <img
          src="/works/river-tower/6.jpg"
          :alt="t('pages.about.imageAlt')"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.about-page {
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

  &__text {
    max-width: 560px;

    p {
      margin: 0 0 1.2em;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-navy);

      &:last-child {
        margin-bottom: 0;
      }
    }
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
