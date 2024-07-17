const $NAME = "xtylist__Tooltip";

import "./style.scss";

import Popover from "../Popover";

const { useSignal } = preact;

// <div x-html {...props} class={[$NAME, props.class]}> {props.children} </div>

export default function Tooltip(props) {
  const extras = {
    parentClass: $NAME,
  };
  const active = useSignal(false);
  return (
    <Popover
      {...props}
      {...extras}
      active={active.value}
      x-hover={({ value }) => {
        active.value = value;
      }}
    >
      {props.children}
    </Popover>
  );
}
