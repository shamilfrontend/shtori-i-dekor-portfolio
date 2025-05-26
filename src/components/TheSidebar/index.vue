<script lang="ts" setup>
import TheSocial from "../TheSocial/index.vue";

defineOptions({ name: "TheSidebar" });
</script>

<template>
  <div class="sidebar">
    <img src="/images/logo.png" alt="Logo" class="sidebar__logo" />

    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <a href="" class="sidebar__link">Home</a>
        </li>
        <li class="sidebar__item">
          <a href="" class="sidebar__link">About Us</a>
        </li>
        <li class="sidebar__item">
          <a href="" class="sidebar__link">Services</a>
        </li>
        <li class="sidebar__item">
          <a href="" class="sidebar__link">Prices</a>
        </li>
        <li class="sidebar__item">
          <a href="" class="sidebar__link">Shop</a>
        </li>
        <li class="sidebar__item">
          <a href="" class="sidebar__link">Contact</a>
        </li>
      </ul>
    </nav>

    <the-social />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  text-align: center;
  padding-top: 50px;

  &__logo {
    width: 130px;
    margin-bottom: 48px;
  }

  &__list {
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  &__item {
    padding: 13px 20px;

    @media (max-width: 1200px) {
      padding: 0;
    }
  }

  &__link {
    text-decoration: none;
    color: #6e6e6e;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 300;
    transition: all 0.3s linear;

    @media (max-width: 1200px) {
      display: block;
      padding: 10px 20px;
      font-size: 16px;
      text-transform: capitalize;
      transition: none;
    }

    &:active {
      color: #000;

      @media (max-width: 1200px) {
        display: block;
        color: #fff;
        background-color: #000;
      }
    }

    &:hover {
      color: #000;
    }

    @media (max-width: 1200px) {
      &:active {
        color: #fff;
        background-color: #000;
      }
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;

    .social__item:not(:last-child) {
      margin-right: 10px;
    }

    @media (max-width: 1200px) {
      display: none;
    }

    .social__icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
