<script setup lang="ts">
import { services } from "../../data/services";

defineOptions({ name: "ServicesAndPricesPage" });
</script>

<template>
  <div class="services-page">
    <h1>Услуги и цены</h1>

    <div class="services-page__content">
      <div class="services-page__main">
        <p class="services-page__intro">
          Ориентировочные цены. Итоговая стоимость рассчитывается после замера и
          согласования тканей и объёма работ.
        </p>

        <ul class="services-page__list">
          <li v-for="service in services" :key="service.id">
            <div class="services-page__head">
              <h2>{{ service.title }}</h2>
              <span>{{ service.priceFrom }}</span>
            </div>
            <p>{{ service.description }}</p>
          </li>
        </ul>
      </div>

      <figure class="services-page__media">
        <img
          src="/works/areal/06.jpg"
          alt="Шторы в номере люкс — проект конгресс-отель Ареал"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.services-page {
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

  &__main {
    max-width: 640px;
  }

  &__intro {
    margin: 0 0 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }

    h2 {
      margin: 0;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.4;
      color: var(--color-navy);
    }

    p {
      margin: 8px 0 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-navy);
    }
  }

  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px 24px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 1.4;
      color: var(--color-muted);
      white-space: nowrap;
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
