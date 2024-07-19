const $NAME = "xtylist__Fab";

import "./style.scss";

export default function Fab(props) {
  const { size, disabled, dark, variant } = props || {};
  let { color } = props || {};
  const css = ["bd-a bw-1"];

  let bgColor;
  let brColor;
  let txColor;

  color = color || "dark";

  if (variant === "outlined") {
    bgColor = `color-bg-${dark ? "dark" : "light"}`;
    brColor = `color-br-${color}`;
    txColor = `color-tx-${color}`;
  } else if (variant === "fill") {
    bgColor = `color-bg-${color}`;
    brColor = `color-br-${color}`;
    txColor = `color-tx-${!dark ? "dark" : "light"}`;
  } else {
    brColor = `color-br-none`;
    txColor = `color-tx-${color}`;
  }

  return (
    <button
      x-html
      {...props}
      attrs={{ type: "button" }}
      x-ripple={!disabled}
      class={[
        $NAME,
        props.class,
        ...css,
        txColor,
        {
          [brColor]: color ? true : false,
          [bgColor]: color ? true : false,
          "e-p": !disabled,
          "e-ne": disabled,
          "is-disabled": disabled,
          "is-small": size === "sm",
          "is-large": size === "lg",
        },
      ]}
    >
      {props.children}
    </button>
  );
}
