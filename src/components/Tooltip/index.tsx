const $NAME = "xtylist__Tooltip";

import "./style.scss";

export default function Tooltip(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      {props.children}
    </div>
  );
}
