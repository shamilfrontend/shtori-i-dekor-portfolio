export type ReviewBase = {
  id: string;
};

export const reviewsBase: ReviewBase[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
];

export type Review = ReviewBase & {
  name: string;
  meta: string;
  text: string;
};

export type ReviewShotBase = {
  id: string;
  src: string;
};

export const reviewShotsBase: ReviewShotBase[] = [
  { id: "nina", src: "/reviews/nina.jpg" },
  { id: "natalya", src: "/reviews/natalya.jpg" },
  { id: "maria", src: "/reviews/maria.jpg" },
  { id: "morning", src: "/reviews/morning.jpg" },
  { id: "christmas", src: "/reviews/christmas.jpg" },
  { id: "kids", src: "/reviews/kids.jpg" },
  { id: "grey-open", src: "/reviews/grey-open.jpg" },
  { id: "grey-closed", src: "/reviews/grey-closed.jpg" },
  { id: "blinds", src: "/reviews/blinds.jpg" },
  { id: "kitchen", src: "/reviews/kitchen.jpg" },
  { id: "irina", src: "/reviews/irina.jpg" },
  { id: "anastasia", src: "/reviews/anastasia.jpg" },
  { id: "tatyana", src: "/reviews/tatyana.jpg" },
];

export type ReviewShot = ReviewShotBase & {
  name: string;
  meta: string;
  alt: string;
};
