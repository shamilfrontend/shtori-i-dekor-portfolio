<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

defineOptions({ name: "TheRightBar" });

const route = useRoute();

const title = computed(() => {
  if (route.path.startsWith("/portfolio/")) return "Портфолио";
  if (route.path === "/about") return "О нас";
  if (route.path === "/services-and-prices") return "Услуги";
  if (route.path === "/contacts") return "Контакты";
  return "Портфолио";
});
</script>

<template>
  <aside class="the-right-bar">
    <ul class="the-right-bar__lang">
      <li class="the-right-bar__lang-item is-active">
        <span>Ru</span>
      </li>
    </ul>
    <p class="the-right-bar__hdr">{{ title }}</p>
  </aside>
</template>

<style lang="scss" scoped>
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

  &__hdr {
    position: absolute;
    left: 0;
    top: 50%;
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
  }

  @media (max-width: 1200px) {
    display: none;
  }
}
</style>
