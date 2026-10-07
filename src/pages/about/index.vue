<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { withBase } from "../../utils/withBase";

defineOptions({ name: "AboutPage" });

const { t, tm } = useI18n();

const services = computed(() => tm("pages.about.services") as string[]);

const salonImages = [
  { src: "/images/olga.jpg", altKey: "portraitAlt" as const, portrait: true },
  { src: "/images/team.jpg", altKey: "imageAlt" as const },
  { src: "/images/salon/01.jpg", n: 1 },
  { src: "/images/salon/02.jpg", n: 2 },
  { src: "/images/salon/03.jpg", n: 3 },
  { src: "/images/salon/04.jpg", n: 4 },
  { src: "/images/salon/05.jpg", n: 5 },
];

function photoAlt(image: (typeof salonImages)[number]) {
  if ("altKey" in image) return t(`pages.about.${image.altKey}`);
  return t("pages.about.salonPhotoAlt", { n: image.n });
}
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
                href="https://wa.me/79165811715"
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
                href="https://t.me/Olga_Efremova_shtoriidekor"
                target="_blank"
                rel="noopener noreferrer"
                >t.me/Olga_Efremova_shtoriidekor</a
              >
            </li>
            <li>
              <span>{{ t("pages.about.max") }}:</span>
              <a
                href="https://max.ru/u/f9LHodD0cOIJxiQQg_DRb1p0udKpjqLkF29_qe5Qf0orTnjOJSakoy9Hitc"
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

      <div class="about-page__media">
        <img
          v-for="(image, index) in salonImages"
          :key="image.src"
          :src="withBase(image.src)"
          :alt="photoAlt(image)"
          :class="{ 'about-page__media-img--portrait': 'portrait' in image && image.portrait }"
          :loading="index === 0 ? 'eager' : 'lazy'"
        />
      </div>
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

    @media (max-width: $bp-phone) {
      .about-page__media {
        order: -1;
      }
    }
  }

  &__text {
    max-width: 560px;

    @media (max-width: $bp-desktop) {
      max-width: none;
      width: 100%;
    }

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
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0;
    min-width: 0;

    @media (max-width: $bp-phone) {
      gap: 16px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 3 / 2;
      object-fit: cover;

      &.about-page__media-img--portrait {
        aspect-ratio: 2 / 3;
        object-position: top center;
      }
    }
  }
}
</style>
