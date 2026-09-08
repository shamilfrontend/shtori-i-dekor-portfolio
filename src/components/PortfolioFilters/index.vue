<script lang="ts" setup>
import { ref } from "vue";
import { CATEGORIES, ROLES } from "../../data/portfolio";
import { usePortfolioFilters } from "../../composables/usePortfolioFilters";

defineOptions({ name: "PortfolioFilters" });

const props = withDefaults(
  defineProps<{
    compact?: boolean;
  }>(),
  { compact: false },
);

const {
  state,
  hasActiveFilters,
  toggleCategory,
  toggleRole,
  resetFilters,
} = usePortfolioFilters();

const rubricsOpen = ref(false);
const branchesOpen = ref(false);
</script>

<template>
  <div class="portfolio-filters" :class="{ 'portfolio-filters--compact': props.compact }">
    <p v-if="!props.compact" class="portfolio-filters__title">Фильтруйте</p>

    <div class="portfolio-filters__block">
      <button
        type="button"
        class="portfolio-filters__hdr"
        :class="{ 'is-open': rubricsOpen }"
        @click="rubricsOpen = !rubricsOpen"
      >
        Выбрать объект
      </button>
      <ul v-show="rubricsOpen" class="portfolio-filters__list">
        <li v-for="category in CATEGORIES" :key="category">
          <button
            type="button"
            class="portfolio-filters__option"
            :class="{ 'is-checked': state.categories.includes(category) }"
            @click="toggleCategory(category)"
          >
            {{ category }}
          </button>
        </li>
      </ul>
    </div>

    <div class="portfolio-filters__block">
      <button
        type="button"
        class="portfolio-filters__hdr"
        :class="{ 'is-open': branchesOpen }"
        @click="branchesOpen = !branchesOpen"
      >
        Наша роль в объекте
      </button>
      <ul v-show="branchesOpen" class="portfolio-filters__list">
        <li v-for="role in ROLES" :key="role">
          <button
            type="button"
            class="portfolio-filters__option"
            :class="{ 'is-checked': state.roles.includes(role) }"
            @click="toggleRole(role)"
          >
            {{ role }}
          </button>
        </li>
      </ul>
    </div>

    <button
      v-if="hasActiveFilters"
      type="button"
      class="portfolio-filters__reset"
      @click="resetFilters"
    >
      Сбросить фильтры
    </button>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-filters {
  &__title {
    margin: 0 0 28px;
    padding: 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.32;
    color: var(--color-sand);
  }

  &__block {
    margin-bottom: 20px;
  }

  &__hdr {
    display: block;
    width: 100%;
    padding: 0 28px 0 0;
    border: 0;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2309364e' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")
      right 0.8em no-repeat;
    text-align: left;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--color-sand);
    }

    &.is-open {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 7l5-5 5 5' stroke='%2309364e' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
    }
  }

  &__list {
    list-style: none;
    margin: 8px 0 0;
    padding: 0;
  }

  &__option {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 2px 10px 2px 36px;
    border: 0;
    background: transparent
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect x='1' y='1' width='14' height='14' rx='1' stroke='%2309364e' stroke-width='1' fill='none'/%3E%3C/svg%3E")
      10px 6px no-repeat;
    text-align: left;
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-navy);
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--color-sand);
    }

    &.is-checked {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect x='1' y='1' width='14' height='14' rx='1' stroke='%2309364e' stroke-width='1' fill='none'/%3E%3Cpath d='M4 8l3 3 5-5' stroke='%2309364e' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
    }
  }

  &__reset {
    margin-top: 8px;
    padding: 0;
    border: 0;
    background: transparent;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-muted);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: var(--color-navy);
    }
  }

  &--compact {
    .portfolio-filters__title {
      font-size: 22px;
      margin-bottom: 16px;
    }
  }
}
</style>
