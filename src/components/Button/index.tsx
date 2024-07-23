const $NAME = "xtylist__Button";

import "./style.scss";

export default function Button(props) {
  const { size, disabled, dark, variant, stack, type } = props || {};
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
      attrs={{ type: type ? type : "button" }}
      x-ripple={!disabled}
      class={[
        $NAME,
        props.class,
        ...css,
        txColor,
        {
          [brColor]: brColor && color ? true : false,
          [bgColor]: bgColor && color ? true : false,
          "e-p": !disabled,
          "e-ne": disabled,
          "is-disabled": disabled,
          "is-small": size === "sm",
          "is-large": size === "lg",
          "is-stack": stack,
        },
      ]}
    >
      {props.children}
    </button>
  );
}
