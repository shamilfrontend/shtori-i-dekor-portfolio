<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SidebarSocial from "./SidebarSocial/index.vue";
import SidebarContacts from "./SidebarContacts/index.vue";

defineOptions({ name: "TheSidebar" });

const route = useRoute();
const isProjectPage = computed(() => route.path.startsWith("/portfolio/"));

const menuList = [
  { id: 1, link: "/about", name: "О нас" },
  { id: 2, link: "/", name: "Портфолио" },
  { id: 3, link: "/how-to-order", name: "Как сделать заказ?" },
  { id: 4, link: "/exhibitions", name: "Мы на выставках" },
  { id: 5, link: "/reviews", name: "Отзывы" },
  { id: 6, link: "/contacts", name: "Контакты" },
];

function isMenuActive(link: string) {
  if (link === "/") {
    return route.path === "/" || route.path.startsWith("/portfolio/");
  }
  return route.path.startsWith(link);
}
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

    <router-link
      v-if="isProjectPage"
      to="/"
      class="the-sidebar__back"
    >
      Назад
    </router-link>

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
            :class="{ 'is-active': isMenuActive(item.link) }"
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
@use "../../styles/breakpoints" as *;

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

  @media (max-width: $bp-desktop) {
    display: none;
  }
}
</style>
