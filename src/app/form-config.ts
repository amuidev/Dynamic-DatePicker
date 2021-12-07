import { DynamicFieldModel } from "./dynamic-field";

export const FormConfig: DynamicFieldModel[] = [
  { label: "Account Name", name: "Account Name", type: "text" },
  { label: "Address", name: "Address", type: "text" },
  {
    label: "Exception Type",
    name: "Exception Type",
    type: "select",
    options: [
      { label: "Cash Call", value: "Cash Call" },
      { label: "Buy Back Restriction", value: "Buy Back Restriction" },
      { label: "Cash Account Liquidation", value: "Cash Account Liquidation" }
    ]
  },
  { label: "Trade Date", name: "Trade Date", type: "datepicker" }
];
