export type ExhibitionBase = {
  id: string;
  year: string;
};

export const exhibitionsBase: ExhibitionBase[] = [
  { id: "mosbuild-2024", year: "2024" },
  { id: "interior-show-2023", year: "2023" },
  { id: "balashikha-design-day-2022", year: "2022" },
];

export type Exhibition = ExhibitionBase & {
  title: string;
  place: string;
  description: string;
};
