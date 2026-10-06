<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { withBase } from "../../utils/withBase";

defineOptions({ name: "HowToOrderPage" });

const { t, tm } = useI18n();

const requirements = computed(
  () => tm("pages.howToOrder.requirements") as string[],
);
</script>

<template>
  <div class="how-to-order-page">
    <h1>{{ t("pages.howToOrder.title") }}</h1>

    <div class="how-to-order-page__content">
      <div class="how-to-order-page__main">
        <p>{{ t("pages.howToOrder.intro") }}</p>

        <p>
          <a
            href="https://t.me/Olga_Efremova_shtoriidekor"
            target="_blank"
            rel="noopener noreferrer"
            >@Olga_Efremova_shtoriidekor</a
          >
        </p>

        <p>
          <a
            href="https://t.me/Olga_Efremova_shtoriidekor"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("pages.howToOrder.writeLink") }}</a
          >
        </p>

        <p>
          {{ t("pages.howToOrder.emailLabel") }}<br />
          <a href="mailto:shtori-i-dekor@mail.ru">shtori-i-dekor@mail.ru</a>
        </p>

        <h2>{{ t("pages.howToOrder.requirementsTitle") }}</h2>
        <ul class="how-to-order-page__requirements">
          <li v-for="(item, index) in requirements" :key="index">
            🔵 {{ item }}
          </li>
        </ul>

        <p>{{ t("pages.howToOrder.closing") }}</p>
      </div>

      <figure class="how-to-order-page__media">
        <img
          :src="withBase('/works/khimki-house/2.jpg')"
          :alt="t('pages.howToOrder.imageAlt')"
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

    h2 {
      margin: 0 0 0.8em;
      font-weight: 500;
      font-size: 18px;
      line-height: 1.5;
      color: var(--color-navy);
    }

    a {
      color: var(--color-navy);
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        color: var(--color-muted);
      }
    }
  }

  &__requirements {
    margin: 0 0 1.2em;
    padding: 0;
    list-style: none;
    color: var(--color-navy);

    li {
      margin: 0 0 0.35em;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
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
