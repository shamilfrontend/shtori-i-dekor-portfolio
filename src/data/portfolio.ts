export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  categories: string[];
  roles: string[];
  area?: string;
  location?: string;
  description?: string;
  tasks?: string[];
  gallery?: string[];
};

export const CATEGORIES = [
  "Гостиная",
  "Спальня",
  "Кухня",
  "Офис",
  "Детская",
] as const;

export const ROLES = ["Дизайн", "Пошив", "Монтаж", "Декор"] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "proekt-01",
    title: "Проект 01",
    image: "/images/gallery-01.jpg",
    categories: ["Гостиная"],
    roles: ["Дизайн", "Пошив", "Монтаж"],
    area: "42 м²",
    location: "Москва",
    description:
      "Многослойные шторы и мягкий декор для светлой гостиной. Плейсхолдер-описание проекта — замените на реальный текст.",
    tasks: ["Подбор тканей", "Пошив комплекта", "Монтаж карнизов"],
    gallery: ["/images/gallery-01.jpg", "/images/gallery-02.jpg"],
  },
  {
    id: "2",
    slug: "proekt-02",
    title: "Проект 02",
    image: "/images/gallery-02.jpg",
    categories: ["Спальня"],
    roles: ["Дизайн", "Пошив"],
    area: "28 м²",
    location: "Московская область",
    description:
      "Спокойная спальня с плотными блэкаут-шторами и декоративными портьерами. Плейсхолдер.",
    tasks: ["Эскиз", "Пошив блэкаут", "Декоративные подхваты"],
    gallery: ["/images/gallery-02.jpg", "/images/gallery-03.jpg"],
  },
  {
    id: "3",
    slug: "proekt-03",
    title: "Проект 03",
    image: "/images/gallery-03.jpg",
    categories: ["Кухня"],
    roles: ["Пошив", "Монтаж"],
    area: "16 м²",
    location: "Москва",
    description:
      "Практичные римские шторы для кухни с лёгким уходом. Плейсхолдер.",
    tasks: ["Замер", "Пошив", "Монтаж"],
    gallery: ["/images/gallery-03.jpg"],
  },
  {
    id: "4",
    slug: "proekt-04",
    title: "Проект 04",
    image: "/images/gallery-04.jpg",
    categories: ["Офис"],
    roles: ["Дизайн", "Монтаж", "Декор"],
    area: "120 м²",
    location: "Москва, ЦАО",
    description:
      "Офисное пространство: рулонные системы и текстильный акцент. Плейсхолдер.",
    tasks: ["Концепция", "Поставка", "Монтаж"],
    gallery: ["/images/gallery-04.jpg", "/images/gallery-05.jpg"],
  },
  {
    id: "5",
    slug: "proekt-05",
    title: "Проект 05",
    image: "/images/gallery-05.jpg",
    categories: ["Детская"],
    roles: ["Дизайн", "Пошив", "Декор"],
    area: "18 м²",
    location: "Химки",
    description:
      "Яркий, но мягкий текстиль для детской комнаты. Плейсхолдер.",
    tasks: ["Подбор палитры", "Пошив", "Декор"],
    gallery: ["/images/gallery-05.jpg"],
  },
  {
    id: "6",
    slug: "proekt-06",
    title: "Проект 06",
    image: "/images/gallery-06.jpg",
    categories: ["Гостиная", "Офис"],
    roles: ["Дизайн", "Пошив", "Монтаж", "Декор"],
    area: "65 м²",
    location: "Санкт-Петербург",
    description:
      "Комбинированный проект: гостиная-кабинет с многослойным текстилем. Плейсхолдер.",
    tasks: ["Дизайн-проект", "Пошив", "Монтаж", "Стилизация"],
    gallery: ["/images/gallery-06.jpg", "/images/gallery-07.jpg"],
  },
  {
    id: "7",
    slug: "proekt-07",
    title: "Проект 07",
    image: "/images/gallery-07.jpg",
    categories: ["Спальня"],
    roles: ["Пошив", "Монтаж", "Декор"],
    area: "32 м²",
    location: "Москва",
    description:
      "Классические портьеры и тюль для спальни. Плейсхолдер.",
    tasks: ["Пошив", "Монтаж карниза", "Декор"],
    gallery: ["/images/gallery-07.jpg"],
  },
  {
    id: "8",
    slug: "proekt-08",
    title: "Проект 08",
    image: "/images/gallery-08.jpg",
    categories: ["Гостиная"],
    roles: ["Дизайн", "Декор"],
    area: "50 м²",
    location: "Москва",
    description:
      "Акцентный текстиль и стилизация оконной зоны. Плейсхолдер.",
    tasks: ["Концепция", "Декор"],
    gallery: ["/images/gallery-08.jpg", "/images/gallery-09.jpg"],
  },
  {
    id: "9",
    slug: "proekt-09",
    title: "Проект 09",
    image: "/images/gallery-09.jpg",
    categories: ["Кухня", "Гостиная"],
    roles: ["Пошив", "Монтаж"],
    area: "38 м²",
    location: "Одинцово",
    description:
      "Единый текстильный сценарий для кухни-гостиной. Плейсхолдер.",
    tasks: ["Замер", "Пошив", "Монтаж"],
    gallery: ["/images/gallery-09.jpg"],
  },
  {
    id: "10",
    slug: "proekt-10",
    title: "Проект 10",
    image: "/images/gallery-10.jpg",
    categories: ["Офис"],
    roles: ["Дизайн", "Пошив", "Монтаж"],
    area: "85 м²",
    location: "Москва",
    description:
      "Переговорная и open-space: светофильтры и декоративные панели. Плейсхолдер.",
    tasks: ["Дизайн", "Пошив", "Монтаж"],
    gallery: ["/images/gallery-10.jpg", "/images/gallery-01.jpg"],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}
