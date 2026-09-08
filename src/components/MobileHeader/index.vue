<script lang="ts" setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import PortfolioFilters from "../PortfolioFilters/index.vue";
import { usePortfolioFilters } from "../../composables/usePortfolioFilters";

defineOptions({ name: "MobileHeader" });

const route = useRoute();
const {
  state,
  setMobileMenuOpen,
  setMobileFiltersOpen,
} = usePortfolioFilters();

const menuList = [
  { id: 1, link: "/", name: "Главная" },
  { id: 2, link: "/about", name: "О нас" },
  { id: 3, link: "/services-and-prices", name: "Услуги и цены" },
  { id: 4, link: "/contacts", name: "Контакты" },
];

watch(
  () => route.fullPath,
  () => {
    setMobileMenuOpen(false);
    setMobileFiltersOpen(false);
  },
);
</script>

<template>
  <header class="mobile-header">
    <router-link to="/" class="mobile-header__logo-link">
      <img src="/images/logo.png" alt="Шторы и декор" class="mobile-header__logo" />
    </router-link>

    <div class="mobile-header__actions">
      <button
        v-if="route.path === '/'"
        type="button"
        class="mobile-header__filters-btn"
        aria-label="Фильтры"
        @click="setMobileFiltersOpen(!state.mobileFiltersOpen)"
      >
        Фильтры
      </button>
      <button
        type="button"
        class="mobile-header__burger"
        :class="{ 'is-open': state.mobileMenuOpen }"
        aria-label="Меню"
        @click="setMobileMenuOpen(!state.mobileMenuOpen)"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>

  <div
    v-if="state.mobileMenuOpen"
    class="mobile-drawer"
  >
    <nav>
      <ul class="mobile-drawer__list">
        <li v-for="item in menuList" :key="item.id">
          <router-link
            :to="item.link"
            class="mobile-drawer__link"
            active-class="is-active"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="mobile-drawer__contacts">
      <a href="mailto:shtori-i-dekor@mail.ru">shtori-i-dekor@mail.ru</a>
      <a href="tel:+79165811715">+7 916 581-17-15</a>
    </div>
  </div>

  <div
    v-if="state.mobileFiltersOpen"
    class="mobile-drawer mobile-drawer--filters"
  >
    <portfolio-filters compact />
  </div>
</template>

<style lang="scss" scoped>
.mobile-header {
  display: none;

  @media (max-width: 1200px) {
    position: sticky;
    top: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    background: var(--color-bg);
    border-bottom: 1px solid rgba(9, 54, 78, 0.08);
  }

  &__logo {
    display: block;
    width: 72px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__filters-btn {
    padding: 8px 12px;
    border: 1px solid var(--color-navy);
    border-radius: 2px;
    background: transparent;
    font-family: inherit;
    font-size: 13px;
    color: var(--color-navy);
    cursor: pointer;
  }

  &__burger {
    position: relative;
    width: 28px;
    height: 22px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-navy);
      transition: 0.25s;

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 10px;
      }
      &:nth-child(3) {
        top: 20px;
      }
    }

    &.is-open span:nth-child(1) {
      top: 10px;
      transform: rotate(45deg);
    }
    &.is-open span:nth-child(2) {
      opacity: 0;
    }
    &.is-open span:nth-child(3) {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
}

.mobile-drawer {
  display: none;

  @media (max-width: 1200px) {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 72px;
    bottom: 0;
    z-index: 190;
    padding: 24px 20px;
    overflow-y: auto;
    background: var(--color-bg);
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__link {
    display: block;
    padding: 12px 0;
    text-decoration: none;
    font-size: 18px;
    color: var(--color-navy);

    &.is-active {
      color: var(--color-muted);
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 32px;

    a {
      color: var(--color-navy);
      text-decoration: none;
      font-weight: 300;
    }
  }
}
</style>
