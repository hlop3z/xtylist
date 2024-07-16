const $NAME = "xtylist__Menu";

import "./style.scss";

export default function Menu(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      {props.children}
    </div>
  );
}
