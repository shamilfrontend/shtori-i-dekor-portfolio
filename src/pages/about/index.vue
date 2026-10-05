<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { withBase } from "../../utils/withBase";

defineOptions({ name: "AboutPage" });

const { t, tm } = useI18n();

const services = computed(() => tm("pages.about.services") as string[]);
</script>

<template>
  <div class="about-page">
    <h1>{{ t("pages.about.title") }}</h1>

    <div class="about-page__content">
      <div class="about-page__text">
        <p>{{ t("pages.about.intro1") }}</p>
        <p>{{ t("pages.about.intro2") }}</p>
        <p>{{ t("pages.about.textile1") }}</p>
        <p>{{ t("pages.about.textile2") }}</p>

        <h2>{{ t("pages.about.servicesTitle") }}</h2>
        <ul class="about-page__services">
          <li v-for="(item, index) in services" :key="index">{{ item }}</li>
        </ul>
        <p class="about-page__services-more">
          {{ t("pages.about.servicesMore") }}
        </p>

        <p>{{ t("pages.about.fullCycle") }}</p>

        <h2>{{ t("pages.about.whyTitle") }}</h2>
        <p>{{ t("pages.about.whyText") }}</p>

        <p>{{ t("pages.about.invite") }}</p>

        <section class="about-page__contacts" aria-labelledby="about-contacts">
          <h2 id="about-contacts">{{ t("pages.about.contactTitle") }}</h2>
          <ul class="about-page__contact-list">
            <li>
              <span>{{ t("pages.about.phoneLabel") }}:</span>
              <a href="tel:+79165811715">{{
                t("pages.about.phoneDisplay")
              }}</a>
            </li>
            <li>
              <span>{{ t("pages.about.whatsapp") }}:</span>
              <a
                href="https://api.whatsapp.com/send?phone=79165811715"
                target="_blank"
                rel="noopener noreferrer"
                >+7 916 581-17-15</a
              >
            </li>
            <li>
              <span>{{ t("pages.about.instagram") }}:</span>
              <a
                href="https://instagram.com/shtoriidekor"
                target="_blank"
                rel="noopener noreferrer"
                >instagram.com/shtoriidekor</a
              >
            </li>
            <li>
              <span>{{ t("pages.about.vk") }}:</span>
              <a
                href="https://vk.com/shtoriidekor"
                target="_blank"
                rel="noopener noreferrer"
                >vk.com/shtoriidekor</a
              >
            </li>
            <li>
              <span>{{ t("pages.about.telegram") }}:</span>
              <a
                href="https://t.me/shtori_i_dekor_ru"
                target="_blank"
                rel="noopener noreferrer"
                >t.me/shtori_i_dekor_ru</a
              >
            </li>
            <li>
              <span>{{ t("pages.about.max") }}:</span>
              <a
                href="https://max.ru/join/hllGueLGcq2vW2BGf3WafDBdVD0mulUTKEsi-0aNnFI"
                target="_blank"
                rel="noopener noreferrer"
                >max.ru</a
              >
            </li>
          </ul>
          <p>
            {{ t("pages.about.addressInvite") }}
            <br />
            {{ t("pages.about.address") }}
          </p>
        </section>
      </div>

      <figure class="about-page__media">
        <img
          :src="withBase('/works/river-tower/6.jpg')"
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

    h2 {
      margin: 0 0 0.8em;
      font-weight: 500;
      font-size: 18px;
      line-height: 1.5;
      color: var(--color-navy);
    }
  }

  &__services {
    margin: 0 0 0.6em;
    padding: 0 0 0 1.2em;
    list-style: disc;
    color: var(--color-navy);

    li {
      margin: 0 0 0.35em;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
    }
  }

  &__services-more {
    margin-bottom: 1.2em !important;
  }

  &__contacts {
    margin-top: 2em;

    h2 {
      margin-bottom: 0.8em;
    }
  }

  &__contact-list {
    margin: 0 0 1.2em;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35em 0.5em;
      margin: 0 0 0.5em;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-navy);

      span {
        font-weight: 400;
      }

      a {
        color: var(--color-navy);
        text-decoration: underline;
        text-underline-offset: 2px;

        &:hover {
          color: var(--color-muted);
        }
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
