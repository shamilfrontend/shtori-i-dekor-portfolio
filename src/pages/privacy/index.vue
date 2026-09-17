<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

defineOptions({ name: "PrivacyPage" });

const { t, tm } = useI18n();

const paragraphs = computed(
  () => tm("pages.privacy.paragraphs") as string[],
);
</script>

<template>
  <div class="privacy-page">
    <h1>{{ t("pages.privacy.title") }}</h1>

    <div class="privacy-page__content">
      <p v-for="(paragraph, index) in paragraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.privacy-page {
  @include page-padding;

  h1 {
    @include page-title;
  }

  &__content {
    max-width: 640px;

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
}
</style>
