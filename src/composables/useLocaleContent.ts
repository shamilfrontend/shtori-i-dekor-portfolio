import { computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  portfolioItemsBase,
  getPortfolioBaseBySlug,
  type PortfolioItem,
} from "../data/portfolio";
import { servicesBase, type Service } from "../data/services";
import { reviewsBase, type Review } from "../data/reviews";
import { exhibitionsBase, type Exhibition } from "../data/exhibitions";
import { orderStepsBase, type OrderStep } from "../data/orderSteps";

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }
  return [];
}

export function useLocaleContent() {
  const { tm, te, locale } = useI18n();

  const portfolioItems = computed<PortfolioItem[]>(() => {
    void locale.value;
    return portfolioItemsBase.map((base) => {
      const key = `portfolio.${base.id}`;
      const msg = tm(key) as Record<string, unknown>;
      return {
        ...base,
        title: String(msg.title ?? ""),
        categories: asStringArray(msg.categories),
        roles: asStringArray(msg.roles),
        location: msg.location != null ? String(msg.location) : undefined,
        description:
          msg.description != null ? String(msg.description) : undefined,
        tasks: asStringArray(msg.tasks),
      };
    });
  });

  function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
    const base = getPortfolioBaseBySlug(slug);
    if (!base || !te(`portfolio.${base.id}`)) return undefined;
    const msg = tm(`portfolio.${base.id}`) as Record<string, unknown>;
    return {
      ...base,
      title: String(msg.title ?? ""),
      categories: asStringArray(msg.categories),
      roles: asStringArray(msg.roles),
      location: msg.location != null ? String(msg.location) : undefined,
      description:
        msg.description != null ? String(msg.description) : undefined,
      tasks: asStringArray(msg.tasks),
    };
  }

  const services = computed<Service[]>(() => {
    void locale.value;
    return servicesBase.map((base) => {
      const msg = tm(`services.${base.id}`) as Record<string, unknown>;
      return {
        ...base,
        title: String(msg.title ?? ""),
        description: String(msg.description ?? ""),
        priceFrom: String(msg.priceFrom ?? ""),
      };
    });
  });

  const reviews = computed<Review[]>(() => {
    void locale.value;
    return reviewsBase.map((base) => {
      const msg = tm(`reviews.${base.id}`) as Record<string, unknown>;
      return {
        ...base,
        name: String(msg.name ?? ""),
        meta: String(msg.meta ?? ""),
        text: String(msg.text ?? ""),
      };
    });
  });

  const exhibitions = computed<Exhibition[]>(() => {
    void locale.value;
    return exhibitionsBase.map((base) => {
      const msg = tm(`exhibitions.${base.id}`) as Record<string, unknown>;
      return {
        ...base,
        title: String(msg.title ?? ""),
        place: String(msg.place ?? ""),
        description: String(msg.description ?? ""),
      };
    });
  });

  const orderSteps = computed<OrderStep[]>(() => {
    void locale.value;
    return orderStepsBase.map((base) => {
      const msg = tm(`orderSteps.${base.id}`) as Record<string, unknown>;
      return {
        ...base,
        title: String(msg.title ?? ""),
        text: String(msg.text ?? ""),
      };
    });
  });

  return {
    portfolioItems,
    getPortfolioBySlug,
    services,
    reviews,
    exhibitions,
    orderSteps,
  };
}
