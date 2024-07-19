const $NAME = "xtylist__Tooltip";

import "./style.scss";

import Popover from "../Popover";

const { useSignal } = preact;

export default function Tooltip(props) {
  const active = useSignal(false);
  const extras = {
    parentClass: $NAME,
  };
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
