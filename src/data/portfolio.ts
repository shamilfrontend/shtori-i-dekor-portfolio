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
