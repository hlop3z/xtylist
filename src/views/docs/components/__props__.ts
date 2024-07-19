export default {
  button: [
    {
      name: "variant",
      info: "Specifies the variant of the component, determining its style and appearance.",
      default: null,
    },
    {
      name: "size",
      info: "Specifies the size of the component, controlling its dimensions. Options are (`sm`, `md` and `lg`)",
      default: "md",
    },
    {
      name: "color",
      info: "Specifies the color of the component, affecting its background colors.",
      default: null,
    },
    {
      name: "dark",
      info: "Indicates whether the component should use a dark theme.",
      default: false,
    },
    {
      name: "stack",
      info: "Indicates whether the component should stack its children vertically using flex-direction: column.",
      default: false,
    },
    {
      name: "disabled",
      info: "Indicates whether the component is disabled, preventing user interaction and applying a disabled style.",
      default: false,
    },
  ],
  box: [
    {
      name: "height",
      info: "string",
      default: null,
    },
    {
      name: "width",
      info: "string",
      default: null,
    },
  ],
  popover: [
    {
      name: "name",
      info: "string",
      default: null,
    },
    {
      name: "active",
      info: "boolean",
      default: false,
    },
    {
      name: "slot",
      info: "any",
      default: null,
    },
    {
      name: "persistent",
      info: "boolean",
      default: false,
    },
    {
      name: "axis-y",
      info: "top | bottom | center",
      default: null,
    },
    {
      name: "axis-x",
      info: "left | right | center",
      default: null,
    },
    {
      name: "space-y",
      info: "string | number",
      default: null,
    },
    {
      name: "space-x",
      info: "string | number",
      default: null,
    },
    {
      name: "elevation",
      info: "string | number",
      default: null,
    },
    {
      name: "elevation-inverted",
      info: "boolean",
      default: false,
    },
    {
      name: "fx-on",
      info: "string",
      default: null,
    },
    {
      name: "fx-off",
      info: "string",
      default: null,
    },
  ],
};
