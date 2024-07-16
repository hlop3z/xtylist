const $NAME = "xtylist__Divider";

import "./style.scss";
import Props from "./props";

export default function Divider(props: Props) {
  return (
    <div
      x-html
      {...props}
      class={[
        $NAME,
        props.class,
        {
          vertical: props.vertical,
          "md-width": props.size === 1,
          "lg-width": props.size === 2,
          "xl-width": props.size === 3,
          "md-shrink": props.shrink === 1,
          "lg-shrink": props.shrink === 2,
          "xl-shrink": props.shrink === 3,
        },
      ]}
      theme-border={props.color}
    ></div>
  );
}
