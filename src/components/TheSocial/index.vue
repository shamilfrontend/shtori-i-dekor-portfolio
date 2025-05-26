<template>
  <ul class="social">
    <li class="social__item">
      <a
        href="https://t.me/shtori_i_dekor_ru"
        class="social__link"
        target="_blank"
      >
        <img
          src="../../assets/images/telegram.svg"
          alt="telegram"
          class="social__icon"
        />
      </a>
    </li>
    <li class="social__item">
      <a
        href="https://api.whatsapp.com/send/?phone=79165811715"
        class="social__link"
        target="_blank"
      >
        <img
          src="../../assets/images/whatsapp.svg"
          alt="whatsapp"
          class="social__icon"
        />
      </a>
    </li>
    <li class="social__item">
      <a
        href="https://www.instagram.com/shtoriidekor"
        class="social__link"
        target="_blank"
      >
        <img
          src="../../assets/images/instagram.svg"
          alt="instagram"
          class="social__icon"
        />
      </a>
    </li>
    <li class="social__item">
      <a href="https://vk.me/shtoriidekor" class="social__link" target="_blank">
        <img src="../../assets/images/vk.svg" alt="VK" class="social__icon" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineOptions({ name: "TheSidebar" });
</script>

<style scoped lang="scss">
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;

  &__item:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
