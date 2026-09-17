<script setup lang="ts">
import { exhibitions } from "../../data/exhibitions";

defineOptions({ name: "ExhibitionsPage" });
</script>

<template>
  <div class="exhibitions-page">
    <h1>Мы на выставках</h1>

    <div class="exhibitions-page__content">
      <ul class="exhibitions-page__list">
        <li v-for="item in exhibitions" :key="item.id">
          <h2>{{ item.title }}</h2>
          <p class="exhibitions-page__meta">
            {{ item.year }} · {{ item.place }}
          </p>
          <p class="exhibitions-page__text">{{ item.description }}</p>
        </li>
      </ul>

      <figure class="exhibitions-page__media">
        <img
          src="/works/areal/01.jpg"
          alt="Текстильное оформление интерьера — проект конгресс-отель Ареал"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.exhibitions-page {
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

    h2 {
      margin: 0 0 4px;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.4;
      color: var(--color-navy);
    }
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
