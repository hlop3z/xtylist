const $NAME = "xtylist__Box";

import "./style.scss";

export default function Box(props) {
  const { height, width } = props;
  const style: any = {};
  if (height) {
    style["min-height"] = height;
    style["height"] = height;
  }
  if (width) {
    style["min-width"] = width;
    style["width"] = width;
  }

  return (
    <div
      x-html
      {...props}
      class={[$NAME, props.class]}
      style={[style, props.style]}
    >
      {props.children}
    </div>
  );
}
