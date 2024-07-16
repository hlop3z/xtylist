const $NAME = "xtylist__Toolbar";

import "./style.scss";

export default function Toolbar(props) {
  const { size } = props;
  return (
    <div
      x-html
      {...props}
      class={[
        $NAME,
        props.class,
        {
          "toolbar-small": size === "sm",
          "toolbar-large": size === "lg",
        },
      ]}
    >
      {props.children}
    </div>
  );
}
