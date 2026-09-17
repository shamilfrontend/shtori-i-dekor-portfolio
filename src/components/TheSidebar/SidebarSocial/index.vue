<script lang="ts" setup>
defineOptions({ name: "SidebarSocial" });
</script>

<template>
  <ul class="sidebar-social">
    <li class="sidebar-social__item">
      <a
        href="https://t.me/shtori_i_dekor_ru"
        class="sidebar-social__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../../assets/images/telegram.svg"
          alt="telegram"
          class="sidebar-social__icon"
        />
      </a>
    </li>
    <li class="sidebar-social__item">
      <a
        href="https://api.whatsapp.com/send/?phone=79165811715"
        class="sidebar-social__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../../assets/images/whatsapp.svg"
          alt="whatsapp"
          class="sidebar-social__icon"
        />
      </a>
    </li>
    <li class="sidebar-social__item">
      <a
        href="https://www.instagram.com/shtoriidekor"
        class="sidebar-social__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../../assets/images/instagram.svg"
          alt="instagram"
          class="sidebar-social__icon"
        />
      </a>
    </li>
    <li class="sidebar-social__item">
      <a
        href="https://vk.me/shtoriidekor"
        class="sidebar-social__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../../assets/images/vk.svg"
          alt="VK"
          class="sidebar-social__icon"
        />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sidebar-social {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 0 16px;
  padding: 0;

  &__item:not(:last-child) {
    margin-right: 10px;
  }

  &__icon {
    width: 20px;
    height: 20px;
    opacity: 0.85;
    transition: opacity 0.2s;
  }

  &__link:hover &__icon {
    opacity: 1;
  }
}
</style>
