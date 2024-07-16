const $NAME = "xtylist__Grid";

import "./style.scss";

export default function Grid(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      {props.children}
    </div>
  );
}
