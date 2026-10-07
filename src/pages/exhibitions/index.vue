<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLocaleContent } from "../../composables/useLocaleContent";
import { withBase } from "../../utils/withBase";

defineOptions({ name: "ExhibitionsPage" });

const { t } = useI18n();
const { exhibitions } = useLocaleContent();
</script>

<template>
  <div class="exhibitions-page">
    <h1>{{ t("pages.exhibitions.title") }}</h1>

    <ul class="exhibitions-page__list">
      <li v-for="item in exhibitions" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p class="exhibitions-page__meta">
          {{ item.year }} · {{ item.place }}
        </p>
        <figure class="exhibitions-page__media">
          <img
            :src="withBase(item.image)"
            :alt="item.title"
          />
        </figure>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.exhibitions-page {
  @include page-padding;

  h1 {
    @include page-title;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 48px;
      }
    }

    h2 {
      margin: 0 0 4px;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.4;
      color: var(--color-navy);
    }
  }

  &__meta {
    margin: 0 0 16px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-muted);
  }

  &__media {
    margin: 0;
    overflow: hidden;

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
