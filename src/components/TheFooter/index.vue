<template>
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__item">
        <a href="mailto:shtori-i-dekor@mail.ru" class="footer__link" target="_blank">shtori-i-dekor@mail.ru</a>
      </li>
      <li class="footer__item">
        <a href="tel:+79165811715" class="footer__link">+7 916 581-17-15</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts" setup>
defineOptions({ name: "TheFooter" });
</script>

<style scoped lang="scss">
.footer {
  &__list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  &__item:not(:last-child) {
    margin-right: 50px;

    @media (max-width: 1200px) {
      margin-right: 0;
      margin-bottom: 15px;
    }

    @media (max-width: 800px) {
      margin-bottom: 30px;
    }
  }

  &__link {
    color: #000;
    font-size: 16px;
    font-weight: 300;
    text-decoration: none;
  }

  &__link {
    cursor: pointer;
  }
}
</style>
