<script setup lang="ts">
defineOptions({ name: "ServicesAndPricesPage" });
</script>

<template>
  <div class="stub-page">
    <h1>Услуги и цены</h1>
    <p>
      Плейсхолдер страницы. Здесь появятся услуги: дизайн, пошив, монтаж и декор.
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
    max-width: 560px;
    margin: 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);
  }
}
</style>
