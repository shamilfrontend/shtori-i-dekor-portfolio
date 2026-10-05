<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

defineOptions({ name: "ContactsPage" });

const { t, locale } = useI18n();

const mapSrc = computed(() => {
  const lang = locale.value === "en" ? "en_US" : "ru_RU";
  return `https://yandex.ru/map-widget/v1/?ll=37.936636%2C55.799765&z=11&pt=37.936636,55.799765,pm2rdm&lang=${lang}`;
});
</script>

<template>
  <div class="contacts-page">
    <h1>{{ t("pages.contacts.title") }}</h1>

    <div class="contacts-page__info">
      <p>
        {{ t("pages.contacts.addressLine1") }}<br />
        {{ t("pages.contacts.addressLine2") }}
      </p>
      <ul class="contacts-page__list">
        <li>
          <span>{{ t("pages.contacts.phoneLabel") }}:</span>
          <a href="tel:+79165811715">+7 916 581-17-15</a>
        </li>
        <li>
          <span>{{ t("pages.contacts.emailLabel") }}:</span>
          <a href="mailto:shtori-i-dekor@mail.ru">shtori-i-dekor@mail.ru</a>
        </li>
        <li>
          <span>{{ t("pages.contacts.whatsapp") }}:</span>
          <a
            href="https://api.whatsapp.com/send?phone=79165811715"
            target="_blank"
            rel="noopener noreferrer"
            >+7 916 581-17-15</a
          >
        </li>
        <li>
          <span>{{ t("pages.contacts.instagram") }}:</span>
          <a
            href="https://instagram.com/shtoriidekor"
            target="_blank"
            rel="noopener noreferrer"
            >instagram.com/shtoriidekor</a
          >
        </li>
        <li>
          <span>{{ t("pages.contacts.vk") }}:</span>
          <a
            href="https://vk.com/shtoriidekor"
            target="_blank"
            rel="noopener noreferrer"
            >vk.com/shtoriidekor</a
          >
        </li>
        <li>
          <span>{{ t("pages.contacts.telegram") }}:</span>
          <a
            href="https://t.me/shtori_i_dekor_ru"
            target="_blank"
            rel="noopener noreferrer"
            >t.me/shtori_i_dekor_ru</a
          >
        </li>
        <li>
          <span>{{ t("pages.contacts.max") }}:</span>
          <a
            href="https://max.ru/join/hllGueLGcq2vW2BGf3WafDBdVD0mulUTKEsi-0aNnFI"
            target="_blank"
            rel="noopener noreferrer"
            >max.ru</a
          >
        </li>
      </ul>
    </div>

    <div class="contacts-page__map">
      <iframe
        :src="mapSrc"
        :title="t('pages.contacts.mapTitle')"
        loading="lazy"
        allowfullscreen
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.contacts-page {
  @include page-padding;

  h1 {
    @include page-title;
  }

  &__info {
    margin: 0 0 40px;

    p {
      margin: 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-navy);

      &:not(:last-child) {
        margin-bottom: 16px;
      }
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

  &__list {
    margin: 0;
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
    }
  }

  &__map {
    width: 100%;
    height: 420px;
    overflow: hidden;

    @media (max-width: $bp-desktop) {
      height: 360px;
    }

    @media (max-width: $bp-phone) {
      height: 280px;
    }

    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>
