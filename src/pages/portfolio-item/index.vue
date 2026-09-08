<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPortfolioBySlug } from "../../data/portfolio";

defineOptions({ name: "PortfolioItemPage" });

const route = useRoute();
const router = useRouter();

const item = computed(() => {
  const slug = String(route.params.slug || "");
  return getPortfolioBySlug(slug);
});

watchEffect(() => {
  if (!item.value) {
    router.replace("/");
  }
});
</script>

<template>
  <div v-if="item" class="project-page">
    <router-link to="/" class="project-page__back-mobile">← Back</router-link>

    <h1 class="project-page__title">{{ item.title }}</h1>
    <p class="project-page__branches">{{ item.roles.join(" / ") }}</p>

    <div class="project-page__meta">
      <div v-if="item.area" class="project-page__meta-item">
        <span class="project-page__meta-icon" aria-hidden="true">▣</span>
        {{ item.area }}
      </div>
      <div v-if="item.location" class="project-page__meta-item">
        <span class="project-page__meta-icon" aria-hidden="true">⌖</span>
        {{ item.location }}
      </div>
      <div v-if="item.tasks?.length" class="project-page__meta-action">
        Решенные задачи
      </div>
    </div>

    <ul v-if="item.tasks?.length" class="project-page__tasks">
      <li v-for="task in item.tasks" :key="task">{{ task }}</li>
    </ul>

    <div class="project-page__text">
      <p>{{ item.description }}</p>
    </div>

    <div class="project-page__gallery">
      <img
        v-for="(src, index) in item.gallery?.length ? item.gallery : [item.image]"
        :key="`${item.id}-${index}`"
        :src="src"
        :alt="`${item.title} — фото ${index + 1}`"
        class="project-page__photo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-page {
  padding: 115px 70px 160px 90px;

  @media (max-width: 1200px) {
    padding: 28px 20px 80px;
  }

  &__back-mobile {
    display: none;
    margin-bottom: 24px;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    color: var(--color-sand);

    @media (max-width: 1200px) {
      display: inline-block;
    }
  }

  &__title {
    margin: 0 0 12px;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.25;
    color: var(--color-navy);

    @media (max-width: 1200px) {
      font-size: 28px;
    }
  }

  &__branches {
    margin: 0 0 36px;
    padding: 0 0 0 25px;
    font-size: 13px;
    line-height: 19px;
    color: var(--color-muted);
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Ccircle cx='7' cy='4' r='2.2' fill='%2389919a'/%3E%3Cpath d='M2 12c0-2.5 2.2-4 5-4s5 1.5 5 4' stroke='%2389919a' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")
      0 5px no-repeat;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin: 0 0 36px;
    border: 1px solid var(--color-sand);
    border-radius: 2px;
    overflow: hidden;
  }

  &__meta-item {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 180px;
    padding: 18px 22px;
    font-size: 15px;
    color: var(--color-navy);
    border-right: 1px solid var(--color-sand);

    @media (max-width: 700px) {
      border-right: 0;
      border-bottom: 1px solid var(--color-sand);
    }
  }

  &__meta-icon {
    color: var(--color-sand);
    font-size: 16px;
  }

  &__meta-action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    padding: 18px 28px;
    background: var(--color-sand);
    font-weight: 500;
    font-size: 15px;
    color: var(--color-navy);
    white-space: nowrap;
  }

  &__tasks {
    margin: 0 0 28px;
    padding: 0 0 0 1.2em;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);
  }

  &__text {
    margin: 0 0 48px;
    max-width: 720px;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);

    p {
      margin: 0 0 1em;
    }
  }

  &__gallery {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__photo {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
