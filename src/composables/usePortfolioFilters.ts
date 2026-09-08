import { computed, reactive } from "vue";
import { portfolioItems, type PortfolioItem } from "../data/portfolio";

const state = reactive({
  categories: [] as string[],
  roles: [] as string[],
  mobileMenuOpen: false,
  mobileFiltersOpen: false,
});

function toggleInList(list: string[], value: string) {
  const index = list.indexOf(value);
  if (index === -1) {
    list.push(value);
  } else {
    list.splice(index, 1);
  }
}

export function usePortfolioFilters() {
  const hasActiveFilters = computed(
    () => state.categories.length > 0 || state.roles.length > 0,
  );

  const filteredItems = computed<PortfolioItem[]>(() => {
    return portfolioItems.filter((item) => {
      const categoryOk =
        state.categories.length === 0 ||
        state.categories.some((c) => item.categories.includes(c));
      const rolesOk =
        state.roles.length === 0 ||
        state.roles.some((r) => item.roles.includes(r));
      return categoryOk && rolesOk;
    });
  });

  function toggleCategory(value: string) {
    toggleInList(state.categories, value);
  }

  function toggleRole(value: string) {
    toggleInList(state.roles, value);
  }

  function resetFilters() {
    state.categories.splice(0, state.categories.length);
    state.roles.splice(0, state.roles.length);
  }

  function setMobileMenuOpen(open: boolean) {
    state.mobileMenuOpen = open;
    if (open) state.mobileFiltersOpen = false;
  }

  function setMobileFiltersOpen(open: boolean) {
    state.mobileFiltersOpen = open;
    if (open) state.mobileMenuOpen = false;
  }

  return {
    state,
    hasActiveFilters,
    filteredItems,
    toggleCategory,
    toggleRole,
    resetFilters,
    setMobileMenuOpen,
    setMobileFiltersOpen,
  };
}
