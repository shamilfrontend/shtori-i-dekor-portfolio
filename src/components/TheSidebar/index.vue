<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SidebarSocial from "./SidebarSocial/index.vue";
import SidebarContacts from "./SidebarContacts/index.vue";
import PortfolioFilters from "../PortfolioFilters/index.vue";

defineOptions({ name: "TheSidebar" });

const route = useRoute();
const isProjectPage = computed(() => route.path.startsWith("/portfolio/"));
const isPortfolioHome = computed(
  () => route.path === "/" || route.path.startsWith("/portfolio/"),
);

const menuList = [
  { id: 1, link: "/", name: "Главная" },
  { id: 2, link: "/about", name: "О нас" },
  { id: 3, link: "/services-and-prices", name: "Услуги и цены" },
  { id: 4, link: "/contacts", name: "Контакты" },
];
</script>

<template>
  <aside class="the-sidebar">
    <router-link to="/" class="the-sidebar__logo-link">
      <img
        src="/images/logo.png"
        alt="Шторы и декор"
        class="the-sidebar__logo"
      />
    </router-link>

    <template v-if="isProjectPage">
      <router-link to="/" class="the-sidebar__back">Back</router-link>
    </template>
    <template v-else-if="isPortfolioHome">
      <div class="the-sidebar__filters">
        <portfolio-filters />
      </div>
    </template>

    <nav class="the-sidebar__nav">
      <ul class="the-sidebar__list">
        <li
          v-for="item in menuList"
          :key="item.id"
          class="the-sidebar__item"
        >
          <router-link
            :to="item.link"
            class="the-sidebar__link"
            :class="{
              'is-active':
                item.link === '/'
                  ? route.path === '/'
                  : route.path.startsWith(item.link),
            }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="the-sidebar__footer">
      <sidebar-social />
      <sidebar-contacts />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.the-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: var(--sidebar-width);
  height: 100%;
  padding: 45px 0 40px;
  background: var(--color-bg);
  box-sizing: border-box;

  &__logo-link {
    display: block;
    width: fit-content;
    margin: 0 0 0 80px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__logo {
    display: block;
    width: 150px;
  }

  &__back {
    display: block;
    margin: 48px 0 0;
    padding: 0 0 0 148px;
    text-decoration: none;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.32;
    color: var(--color-sand);
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='16' viewBox='0 0 28 16'%3E%3Cpath d='M8 1L1 8l7 7M2 8h25' stroke='%23e2c1af' stroke-width='2' fill='none'/%3E%3C/svg%3E")
      78px 8px no-repeat;
    transition: color 0.2s;

    &:hover {
      color: var(--color-muted);
    }
  }

  &__filters {
    margin-top: 48px;
    padding: 0 31px 0 80px;
    flex: 1;
    overflow-y: auto;
  }

  &__nav {
    margin-top: auto;
    padding: 24px 0 0 90px;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0 0 24px;
  }

  &__item {
    margin-bottom: 12px;
  }

  &__link {
    text-decoration: none;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);
    transition: color 0.2s;

    &:hover,
    &.is-active {
      color: var(--color-muted);
    }
  }

  &__footer {
    padding: 0 24px 0 90px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
}
</style>
