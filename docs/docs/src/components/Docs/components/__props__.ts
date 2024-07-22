const Effect = [
  {
    name: "fx-on",
    info: "Animation applied when the element is active (Animate.css class).",
    default: null,
  },
  {
    name: "fx-off",
    info: "Animation applied when the element is inactive (Animate.css class).",
    default: null,
  },
];

const Cards = [
  {
    name: "height",
    info: "Controls the height of the component.",
    default: null,
  },
  {
    name: "width",
    info: "Controls the width of the component.",
    default: null,
  },
  {
    name: "slot-main",
    info: "Defines the main section of the component.",
    default: null,
  },
  {
    name: "slot-header",
    info: "Defines the header section of the component.",
    default: null,
  },
  {
    name: "slot-footer",
    info: "Defines the footer section of the component.",
    default: null,
  },
  {
    name: "slot-left",
    info: "Defines the left section of the component.",
    default: null,
  },
  {
    name: "slot-right",
    info: "Defines the right section of the component.",
    default: null,
  },
];

export default {
  layout: {
    props: [
      {
        name: "breakpoints",
        info: "Array of strings specifying the breakpoints where the main doesn't get clipped from the sides (`xs`, `sm`, `md`, `lg`, `xl`).",
        default: ["xs", "sm", "md", "lg"],
      },
      {
        name: "clip-right",
        info: "Boolean indicating if the right side should be clipped from the main section.",
        default: false,
      },
      {
        name: "clip-left",
        info: "Boolean indicating if the left side should be clipped from the main section.",
        default: false,
      },
      {
        name: "space-x",
        info: "String or number specifying the horizontal space (`0` to `24`).",
        default: null,
      },
      {
        name: "space-y",
        info: "String or number specifying the vertical space (`0` to `24`).",
        default: null,
      },
    ],
    slots: [
      {
        name: "slot-header",
        info: "Defines the header section of the application.",
        default: null,
      },
      {
        name: "slot-footer",
        info: "Defines the footer section of the application.",
        default: null,
      },
      {
        name: "slot-left",
        info: "Defines the left section of the application.",
        default: null,
      },
      {
        name: "slot-right",
        info: "Defines the right section of the application.",
        default: null,
      },
      {
        name: "slot-left-mini",
        info: "Defines the left mini section of the application.",
        default: null,
      },
      {
        name: "slot-right-mini",
        info: "Defines the right mini section of the application.",
        default: null,
      },
    ],
  },
  toolbar: [
    {
      name: "size",
      info: "Controls the dimensions of the component (`sm`, `md`, `lg`).",
      default: "md",
    },
  ],
  divider: [
    {
      name: "color",
      info: "String specifying the color.",
      default: null,
    },
    {
      name: "thick",
      info: "Value specifying the size. Possible values are 1, 2, or 3.",
      default: null,
    },
    {
      name: "shrink",
      info: "Value specifying the shrink factor. Possible values are 1, 2, or 3.",
      default: null,
    },
    {
      name: "vertical",
      info: "Boolean indicating if the orientation is vertical.",
      default: false,
    },
  ],
  toggle: [
    {
      name: "active",
      info: "Controls if the component is currently active or selected.",
      default: false,
    },
    {
      name: "variant",
      info: "Specifies the component design (`radio`, `switch`).",
      default: false,
    },
    {
      name: "size",
      info: "Controls the dimensions of the component (`sm`, `md`, `lg`).",
      default: "md",
    },
    {
      name: "color",
      info: "Specifies the color of the component, affecting its appearance.",
      default: null,
    },
    {
      name: "fill",
      info: "Determines if the component should fill its container.",
      default: false,
    },
    {
      name: "dark",
      info: "Indicates whether the component should use a dark theme.",
      default: false,
    },
    {
      name: "disabled",
      info: "Indicates whether the component is disabled, preventing user interaction.",
      default: false,
    },
    {
      name: "value",
      info: "The value associated with the component.",
      default: null,
    },
    {
      name: "on-input",
      info: "Function to call when an input event is triggered.",
      default: null,
    },
  ],
  button: [
    {
      name: "variant",
      info: "Determines the style and appearance variant of the component.",
      default: null,
    },
    {
      name: "size",
      info: "Controls the dimensions of the component (`sm`, `md`, `lg`).",
      default: "md",
    },
    {
      name: "color",
      info: "Affects the background color of the component.",
      default: null,
    },
    {
      name: "dark",
      info: "Uses a dark theme for the component.",
      default: false,
    },
    {
      name: "stack",
      info: "Stacks the component's children vertically (flex-direction: column).",
      default: false,
    },
    {
      name: "disabled",
      info: "Prevents user interaction and applies a disabled style.",
      default: false,
    },
  ],
  gridRow: [
    {
      name: "row",
      info: "Displays the component as a row layout.",
      default: false,
    },
    {
      name: "gap-x",
      info: "Defines the horizontal gap between grid items.",
      default: 0,
    },
    {
      name: "gap-y",
      info: "Defines the vertical gap between grid items.",
      default: 0,
    },
  ],
  gridCol: [
    {
      name: "cols",
      info: "Number of columns in the grid layout.",
      default: 12,
    },
    {
      name: "sm",
      info: "Number of columns for small screens (max-width: 767px).",
      default: 12,
    },
    {
      name: "md",
      info: "Number of columns for medium screens (min-width: 768px).",
      default: 12,
    },
    {
      name: "lg",
      info: "Number of columns for large screens (min-width: 992px).",
      default: 12,
    },
    {
      name: "xl",
      info: "Number of columns for extra-large screens (min-width: 1200px).",
      default: 12,
    },
  ],
  card: [...Cards],
  dialog: [
    {
      name: "name",
      info: "The name/key of the dialog.",
      default: null,
    },
    {
      name: "active",
      info: "Controls if the component is showing (preact.signal).",
      default: null,
    },
    {
      name: "persistent",
      info: "Boolean indicating persistence.",
      default: false,
    },
    {
      name: "overlay",
      info: "Should it close the overlay if not persistent.",
      default: false,
    },
    {
      name: "full",
      info: "Controls height & width of component (`screen`, `full`, `height`).",
      default: null,
    },
    ...Cards,
    ...Effect,
  ],
  popover: [
    {
      name: "name",
      info: "The name/key of the popover.",
      default: null,
    },
    {
      name: "active",
      info: "Controls if the component is showing (preact.signal).",
      default: null,
    },
    {
      name: "slot",
      info: "The section inside the popover.",
      default: null,
    },
    {
      name: "persistent",
      info: "Boolean indicating persistence.",
      default: false,
    },
    {
      name: "axis-y",
      info: "Position on the Y-axis (`top`, `bottom`, `center`).",
      default: null,
    },
    {
      name: "axis-x",
      info: "Position on the X-axis (`left`, `right`, `center`).",
      default: null,
    },
    {
      name: "space-y",
      info: "Vertical space between the element and popover content.",
      default: null,
    },
    {
      name: "space-x",
      info: "Horizontal space between the element and popover content.",
      default: null,
    },
    {
      name: "elevation",
      info: "Elevation effect applied to the popover.",
      default: null,
    },
    {
      name: "elevation-inverted",
      info: "Indicates whether the elevation effect is inverted.",
      default: false,
    },
    ...Effect,
  ],
};
