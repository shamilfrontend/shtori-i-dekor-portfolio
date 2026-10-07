export type ExhibitionBase = {
  id: string;
  image: string;
  /** YYYY-MM for sorting (newest first) */
  date: string;
};

export const exhibitionsBase: ExhibitionBase[] = [
  { id: "homefest-sep-2026", image: "/exhibitions/04.jpg", date: "2026-09" },
  { id: "heimtextile-2026", image: "/exhibitions/06.jpg", date: "2026-09" },
  {
    id: "moscow-interior-week-aug-2026",
    image: "/exhibitions/03.jpg",
    date: "2026-08",
  },
  { id: "podium-homefest-2025", image: "/exhibitions/05.jpg", date: "2025-10" },
  { id: "tekstil-yug-2025", image: "/exhibitions/01.jpg", date: "2025-06" },
  {
    id: "moscow-interior-week-may-2025",
    image: "/exhibitions/02.jpg",
    date: "2025-05",
  },
].sort((a, b) => b.date.localeCompare(a.date));

export type Exhibition = ExhibitionBase & {
  title: string;
  year: string;
  place: string;
};
