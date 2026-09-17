export type ReviewBase = {
  id: string;
};

export const reviewsBase: ReviewBase[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
];

export type Review = ReviewBase & {
  name: string;
  meta: string;
  text: string;
};
