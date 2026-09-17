export type ServiceBase = {
  id: string;
};

export const servicesBase: ServiceBase[] = [
  { id: "design" },
  { id: "sewing" },
  { id: "mounting" },
  { id: "decor" },
  { id: "motorization" },
];

export type Service = ServiceBase & {
  title: string;
  description: string;
  priceFrom: string;
};
