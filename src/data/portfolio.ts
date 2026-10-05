import { withBase } from "../utils/withBase";

export type PortfolioItemBase = {
  id: string;
  slug: string;
  image: string;
  area?: string;
  gallery?: string[];
};

export type PortfolioItem = PortfolioItemBase & {
  title: string;
  categories: string[];
  roles: string[];
  location?: string;
  description?: string;
  tasks?: string[];
};

export const portfolioItemsBase: PortfolioItemBase[] = [
  {
    id: "pushkino-house",
    slug: "pushkino-house",
    image: withBase("/works/pushkino-house/7.jpg"),
    gallery: [
      withBase("/works/pushkino-house/1.jpg"),
      withBase("/works/pushkino-house/2.jpg"),
      withBase("/works/pushkino-house/3.jpg"),
      withBase("/works/pushkino-house/4.jpg"),
      withBase("/works/pushkino-house/5.jpg"),
      withBase("/works/pushkino-house/6.jpg"),
      withBase("/works/pushkino-house/7.jpg"),
      withBase("/works/pushkino-house/8.jpg"),
    ],
  },
  {
    id: "north-moscow-apartment",
    slug: "north-moscow-apartment",
    image: withBase("/works/north-moscow-apartment/2.jpg"),
    gallery: [
      withBase("/works/north-moscow-apartment/1.jpg"),
      withBase("/works/north-moscow-apartment/2.jpg"),
      withBase("/works/north-moscow-apartment/3.jpg"),
      withBase("/works/north-moscow-apartment/4.jpg"),
      withBase("/works/north-moscow-apartment/5.jpg"),
      withBase("/works/north-moscow-apartment/6.jpg"),
      withBase("/works/north-moscow-apartment/7.jpg"),
      withBase("/works/north-moscow-apartment/8.jpg"),
      withBase("/works/north-moscow-apartment/9.jpg"),
      withBase("/works/north-moscow-apartment/10.jpg"),
      withBase("/works/north-moscow-apartment/11.jpg"),
    ],
  },
  {
    id: "moscow-apartment",
    slug: "moscow-apartment",
    image: withBase("/works/moscow-apartment/1.jpg"),
    gallery: [
      withBase("/works/moscow-apartment/1.jpg"),
      withBase("/works/moscow-apartment/2.jpg"),
      withBase("/works/moscow-apartment/3.jpg"),
      withBase("/works/moscow-apartment/4.jpg"),
      withBase("/works/moscow-apartment/5.jpg"),
      withBase("/works/moscow-apartment/6.jpg"),
      withBase("/works/moscow-apartment/7.jpg"),
      withBase("/works/moscow-apartment/8.jpg"),
      withBase("/works/moscow-apartment/9.jpg"),
      withBase("/works/moscow-apartment/10.jpg"),
      withBase("/works/moscow-apartment/11.jpg"),
      withBase("/works/moscow-apartment/12.jpg"),
    ],
  },
  {
    id: "podmoskovye-apartment",
    slug: "podmoskovye-apartment",
    image: withBase("/works/podmoskovye-apartment/1.jpg"),
    gallery: [
      withBase("/works/podmoskovye-apartment/1.jpg"),
      withBase("/works/podmoskovye-apartment/2.jpg"),
      withBase("/works/podmoskovye-apartment/3.jpg"),
      withBase("/works/podmoskovye-apartment/4.jpg"),
      withBase("/works/podmoskovye-apartment/5.jpg"),
      withBase("/works/podmoskovye-apartment/6.jpg"),
      withBase("/works/podmoskovye-apartment/7.jpg"),
    ],
  },
  {
    id: "river-tower",
    slug: "river-tower",
    image: withBase("/works/river-tower/6.jpg"),
    gallery: [
      withBase("/works/river-tower/1.jpg"),
      withBase("/works/river-tower/2.jpg"),
      withBase("/works/river-tower/3.jpg"),
      withBase("/works/river-tower/4.jpg"),
      withBase("/works/river-tower/5.jpg"),
      withBase("/works/river-tower/6.jpg"),
      withBase("/works/river-tower/7.jpg"),
      withBase("/works/river-tower/8.jpg"),
    ],
  },
  {
    id: "areal",
    slug: "areal",
    image: withBase("/works/areal/06.jpg"),
    gallery: [
      withBase("/works/areal/06.jpg"),
      withBase("/works/areal/07.jpg"),
      withBase("/works/areal/14.jpg"),
      withBase("/works/areal/03.jpg"),
      withBase("/works/areal/01.jpg"),
      withBase("/works/areal/09.jpg"),
      withBase("/works/areal/12.jpg"),
      withBase("/works/areal/13.jpg"),
      withBase("/works/areal/02.jpg"),
      withBase("/works/areal/04.jpg"),
      withBase("/works/areal/11.jpg"),
      withBase("/works/areal/05.jpg"),
      withBase("/works/areal/10.jpg"),
      withBase("/works/areal/08.jpg"),
    ],
  },
  {
    id: "khimki-house",
    slug: "khimki-house",
    image: withBase("/works/khimki-house/2.jpg"),
    gallery: [
      withBase("/works/khimki-house/1.jpg"),
      withBase("/works/khimki-house/2.jpg"),
      withBase("/works/khimki-house/3.jpg"),
      withBase("/works/khimki-house/4.jpg"),
      withBase("/works/khimki-house/5.jpg"),
      withBase("/works/khimki-house/6.jpg"),
      withBase("/works/khimki-house/7.jpg"),
      withBase("/works/khimki-house/8.jpg"),
      withBase("/works/khimki-house/9.jpg"),
      withBase("/works/khimki-house/10.jpg"),
    ],
  },
];

export function getPortfolioBaseBySlug(
  slug: string,
): PortfolioItemBase | undefined {
  return portfolioItemsBase.find((item) => item.slug === slug);
}
