<script setup lang="ts">
import PortfolioCard from "../../components/PortfolioCard/index.vue";
import { usePortfolioFilters } from "../../composables/usePortfolioFilters";

defineOptions({ name: "HomePage" });

const { filteredItems, hasActiveFilters, resetFilters } = usePortfolioFilters();
</script>

<template>
  <div class="home-page">
    <div v-if="filteredItems.length" class="works">
      <portfolio-card
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
      />
    </div>

    <div v-else class="works-empty">
      <p>По выбранным фильтрам проектов пока нет.</p>
      <button
        v-if="hasActiveFilters"
        type="button"
        class="works-empty__reset"
        @click="resetFilters"
      >
        Сбросить фильтры
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 115px 70px 200px 90px;

  @media (max-width: 1200px) {
    padding: 32px 20px 80px;
  }
}

.works {
  position: relative;
  overflow: hidden;
  font-size: 0;
}

.works-empty {
  max-width: 480px;
  margin: 80px auto;
  padding: 48px 32px;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-navy);
  border: 1px solid var(--color-sand);
  border-radius: 2px;
  background: var(--color-bg);

  &__reset {
    margin-top: 16px;
    padding: 10px 24px;
    border: 1px solid var(--color-navy);
    border-radius: 2px;
    background: transparent;
    font-family: inherit;
    font-size: 14px;
    color: var(--color-navy);
    cursor: pointer;

    &:hover {
      background: var(--color-navy);
      color: #fff;
    }
  }
}
</style>
