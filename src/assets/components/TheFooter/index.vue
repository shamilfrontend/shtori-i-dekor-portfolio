<template>
  <footer class="footer">
    <ul class="footer__list">
      <li class="footer__item">
        <img src="" alt="" class="footer__icon" />
        <a href="" class="footer__link">info@photography.com</a>
      </li>
      <li class="footer__item">
        <img src="" alt="" class="footer__icon" />
        <a href="" class="footer__link">Michelle +1 593 354 493</a>
      </li>
      <li class="footer__item">
        <img src="" alt="" class="footer__icon" />
        <a href="" class="footer__link">Lucas: +1 493 346 982</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TheFooter'
  })
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
}
</style>
