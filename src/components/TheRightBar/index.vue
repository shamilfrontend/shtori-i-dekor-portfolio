<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { setLocale, type AppLocale } from "../../i18n";

defineOptions({ name: "TheRightBar" });

const route = useRoute();
const { t, locale } = useI18n();

const locales: AppLocale[] = ["ru", "en"];

const title = computed(() => {
  if (route.path.startsWith("/portfolio/") || route.path === "/") {
    return t("rightBar.portfolio");
  }
  if (route.path === "/about") return t("rightBar.about");
  if (route.path === "/how-to-order") return t("rightBar.howToOrder");
  if (route.path === "/exhibitions") return t("rightBar.exhibitions");
  if (route.path === "/reviews") return t("rightBar.reviews");
  if (route.path === "/contacts") return t("rightBar.contacts");
  if (route.path === "/services-and-prices") return t("rightBar.services");
  return t("rightBar.portfolio");
});

function selectLocale(next: AppLocale) {
  setLocale(next);
}
</script>

<template>
  <aside class="the-right-bar">
    <ul class="the-right-bar__lang">
      <li
        v-for="code in locales"
        :key="code"
        class="the-right-bar__lang-item"
        :class="{ 'is-active': locale === code }"
      >
        <button
          type="button"
          class="the-right-bar__lang-btn"
          @click="selectLocale(code)"
        >
          {{ code === "ru" ? "Ru" : "En" }}
        </button>
      </li>
    </ul>
    <p class="the-right-bar__hdr">{{ title }}</p>
  </aside>
</template>

<style lang="scss" scoped>
@use "../../styles/breakpoints" as *;

.the-right-bar {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  width: var(--rightbar-width);
  height: 100%;
  background: var(--color-navy);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  &__lang {
    position: absolute;
    left: 27px;
    top: 34px;
    z-index: 2;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 18px;
    line-height: 29px;
  }

  &__lang-item {
    padding-left: 33px;
    color: var(--color-sand);

    &.is-active {
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='2' viewBox='0 0 18 2'%3E%3Crect width='18' height='2' fill='%23e2c1af'/%3E%3C/svg%3E")
        0 50% no-repeat;
    }
  }

  &__lang-btn {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    text-align: left;
  }

  &__hdr {
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
    margin: 300px 0 0 44px;
    width: 600px;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    transform-origin: 0 0;
    transform: rotate(-90deg);
    white-space: nowrap;
    pointer-events: none;
  }

  @media (max-width: $bp-desktop) {
    display: none;
  }
}
</style>
