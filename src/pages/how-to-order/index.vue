<script setup lang="ts">
import { orderSteps } from "../../data/orderSteps";

defineOptions({ name: "HowToOrderPage" });
</script>

<template>
  <div class="how-to-order-page">
    <h1>Как сделать заказ?</h1>

    <div class="how-to-order-page__content">
      <div class="how-to-order-page__main">
        <ol class="how-to-order-page__steps">
          <li v-for="(step, index) in orderSteps" :key="step.title">
            <span class="how-to-order-page__step-num">{{ index + 1 }}.</span>
            <div>
              <strong>{{ step.title }}</strong>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>

        <p class="how-to-order-page__cta">
          Готовы начать?
          <router-link to="/contacts">Свяжитесь с нами</router-link>
        </p>
      </div>

      <figure class="how-to-order-page__media">
        <img
          src="/works/khimki-house/2.jpg"
          alt="Шторы и тюль в гостиной — проект дом в Химках"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.how-to-order-page {
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
    max-width: 560px;
  }

  &__steps {
    margin: 0 0 40px;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      gap: 12px;
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    strong {
      display: block;
      margin-bottom: 4px;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
      color: var(--color-navy);
    }

    p {
      margin: 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-navy);
    }
  }

  &__step-num {
    flex-shrink: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-navy);
  }

  &__cta {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);

    a {
      color: var(--color-navy);
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        color: var(--color-muted);
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
