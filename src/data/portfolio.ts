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
    image: "/works/river-tower/6.jpg",
    gallery: [
      "/works/river-tower/1.jpg",
      "/works/river-tower/2.jpg",
      "/works/river-tower/3.jpg",
      "/works/river-tower/4.jpg",
      "/works/river-tower/5.jpg",
      "/works/river-tower/6.jpg",
      "/works/river-tower/7.jpg",
      "/works/river-tower/8.jpg",
    ],
  },
  {
    id: "areal",
    slug: "areal",
    image: "/works/areal/06.jpg",
    gallery: [
      "/works/areal/06.jpg",
      "/works/areal/07.jpg",
      "/works/areal/14.jpg",
      "/works/areal/03.jpg",
      "/works/areal/01.jpg",
      "/works/areal/09.jpg",
      "/works/areal/12.jpg",
      "/works/areal/13.jpg",
      "/works/areal/02.jpg",
      "/works/areal/04.jpg",
      "/works/areal/11.jpg",
      "/works/areal/05.jpg",
      "/works/areal/10.jpg",
      "/works/areal/08.jpg",
    ],
  },
  {
    id: "khimki-house",
    slug: "khimki-house",
    image: "/works/khimki-house/2.jpg",
    gallery: [
      "/works/khimki-house/1.jpg",
      "/works/khimki-house/2.jpg",
      "/works/khimki-house/3.jpg",
      "/works/khimki-house/4.jpg",
      "/works/khimki-house/5.jpg",
      "/works/khimki-house/6.jpg",
      "/works/khimki-house/7.jpg",
      "/works/khimki-house/8.jpg",
      "/works/khimki-house/9.jpg",
      "/works/khimki-house/10.jpg",
    ],
  },
];

export function getPortfolioBaseBySlug(
  slug: string,
): PortfolioItemBase | undefined {
  return portfolioItemsBase.find((item) => item.slug === slug);
}
