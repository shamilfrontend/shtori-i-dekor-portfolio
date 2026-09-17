export type OrderStepBase = {
  id: string;
};

export const orderStepsBase: OrderStepBase[] = [
  { id: "request" },
  { id: "measure" },
  { id: "sketch" },
  { id: "sewing" },
  { id: "mounting" },
];

export type OrderStep = OrderStepBase & {
  title: string;
  text: string;
};
