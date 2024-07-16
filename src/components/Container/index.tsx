const $NAME = "xtylist__Container";

import "./style.scss";

export default function Container(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      {props.children}
    </div>
  );
}
