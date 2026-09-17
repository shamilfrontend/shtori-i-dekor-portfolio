<script lang="ts" setup>
import { ref, watch, onUnmounted } from "vue";
import { useRoute } from "vue-router";

defineOptions({ name: "MobileHeader" });

const route = useRoute();
const menuOpen = ref(false);

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

function setMenuOpen(open: boolean) {
  menuOpen.value = open;
  document.body.style.overflow = open ? "hidden" : "";
}

watch(
  () => route.fullPath,
  () => {
    setMenuOpen(false);
  },
);

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <header class="mobile-header">
    <router-link to="/" class="mobile-header__logo-link">
      <img src="/images/logo.png" alt="Шторы и декор" class="mobile-header__logo" />
    </router-link>

    <button
      type="button"
      class="mobile-header__burger"
      :class="{ 'is-open': menuOpen }"
      aria-label="Меню"
      :aria-expanded="menuOpen"
      @click="setMenuOpen(!menuOpen)"
    >
      <span />
      <span />
      <span />
    </button>
  </header>

  <div
    v-if="menuOpen"
    class="mobile-drawer"
  >
    <nav>
      <ul class="mobile-drawer__list">
        <li v-for="item in menuList" :key="item.id">
          <router-link
            :to="item.link"
            class="mobile-drawer__link"
            :class="{ 'is-active': isMenuActive(item.link) }"
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
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.mobile-header {
  display: none;

  @media (max-width: $bp-desktop) {
    position: sticky;
    top: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--mobile-header-height);
    padding: 0 16px;
    background: var(--color-bg);
    border-bottom: 1px solid rgba(9, 54, 78, 0.08);
  }

  &__logo {
    display: block;
    width: 72px;
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

  @media (max-width: $bp-desktop) {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: var(--mobile-header-height);
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
