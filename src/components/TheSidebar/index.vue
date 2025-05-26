<script lang="ts" setup>
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

    <ul class="sidebar__social">
      <li class="social__item">
        <a href="https://t.me/shtori_i_dekor_ru" class="social__link" target="_blank">
          <img src="../../assets/images/telegram.svg" alt="telegram" class="social__icon" />
        </a>
      </li>
      <li class="social__item">
        <a href="https://api.whatsapp.com/send/?phone=79165811715" class="social__link" target="_blank">
          <img src="../../assets/images/whatsapp.svg" alt="whatsapp" class="social__icon" />
        </a>
      </li>
      <li class="social__item">
        <a href="https://www.instagram.com/shtoriidekor" class="social__link" target="_blank">
          <img src="../../assets/images/instagram.svg" alt="instagram" class="social__icon" />
        </a>
      </li>
      <li class="social__item">
        <a href="https://vk.me/shtoriidekor" class="social__link" target="_blank">
          <img src="../../assets/images/vk.svg" alt="VK" class="social__icon" />
        </a>
      </li>
    </ul>
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
    margin: 48px 0 0;
    padding: 0;

    .social__icon {
      width: 20px;
      height: 20px;
    }

    .social__item:not(:last-child) {
      margin-right: 10px;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
