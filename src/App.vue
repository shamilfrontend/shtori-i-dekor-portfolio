<script lang="ts" setup>
import TheSidebar from "./components/TheSidebar/index.vue";
import TheRightBar from "./components/TheRightBar/index.vue";
import MobileHeader from "./components/MobileHeader/index.vue";

defineOptions({ name: "App" });
</script>

<template>
  <div class="wrapper">
    <mobile-header />
    <the-sidebar />
    <the-right-bar />

    <div class="main">
      <div class="main__inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  background: var(--color-bg);
}

img {
  max-width: 100%;
  height: auto;
}

.wrapper {
  font-family: var(--font-main);
  color: var(--color-navy);
  min-height: 100vh;
}

.main {
  margin-left: var(--sidebar-width);
  margin-right: var(--rightbar-width);
  min-height: 100vh;
  background: url("/images/watermark.svg") calc(100% + 180px) -80px / auto 1400px
    no-repeat;

  &__inner {
    min-height: 100vh;
  }

  @media (max-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
    background-position: 120% -40px;
    background-size: auto 900px;
  }
}
</style>
