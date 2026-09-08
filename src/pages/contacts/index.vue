<script setup lang="ts">
defineOptions({ name: "ContactsPage" });
</script>

<template>
  <div class="stub-page">
    <h1>Контакты</h1>
    <p>
      <a href="mailto:shtori-i-dekor@mail.ru">shtori-i-dekor@mail.ru</a><br />
      <a href="tel:+79165811715">+7 916 581-17-15</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.stub-page {
  padding: 115px 70px 160px 90px;

  @media (max-width: 1200px) {
    padding: 32px 20px 80px;
  }

  h1 {
    margin: 0 0 24px;
    font-size: 40px;
    font-weight: 700;
    color: var(--color-navy);
  }

  p {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
  }

  a {
    color: var(--color-navy);
    text-decoration: none;

    &:hover {
      color: var(--color-muted);
    }
  }
}
</style>
