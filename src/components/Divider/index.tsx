const $NAME = "xtylist__Divider";

import "./style.scss";
import Props from "./props";

export default function Divider(props: Props) {
  const { vertical, thick, shrink } = props;
  return (
    <div
      x-html
      {...props}
      class={[
        $NAME,
        props.class,
        {
          vertical: vertical,
          "md-width": thick === 1,
          "lg-width": thick === 2,
          "xl-width": thick === 3,
          "md-shrink": shrink === 1,
          "lg-shrink": shrink === 2,
          "xl-shrink": shrink === 3,
        },
      ]}
      theme-border={props.color}
    ></div>
  );
}
