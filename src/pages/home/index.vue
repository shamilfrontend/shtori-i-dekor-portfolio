<script setup lang="ts">
import PortfolioCard from "../../components/PortfolioCard/index.vue";
import { portfolioItems } from "../../data/portfolio";

defineOptions({ name: "HomePage" });
</script>

<template>
  <div class="home-page">
    <div class="works">
      <portfolio-card
        v-for="item in portfolioItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.home-page {
  @include page-padding(200px);
}

.works {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10%;
  row-gap: 84px;
  padding-bottom: 50px;

  @media (max-width: $bp-desktop) {
    column-gap: 6%;
    row-gap: 48px;
    padding-bottom: 24px;
  }

  @media (max-width: $bp-phone) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
    padding-bottom: 0;
  }
}
</style>
