const $NAME = "xtylist__Tooltip";

import "./style.scss";

import Popover from "../Popover";

const { useSignal } = preact;

export default function Tooltip(props) {
  const extras: any = {
    parentClass: $NAME,
  };
  if (!props.active) {
    const active = useSignal(false);
    extras.active = active;
    extras["x-hover"] = ({ value }) => {
      active.value = value;
    };
  }
  return (
    <Popover {...props} {...extras}>
      {props.children}
    </Popover>
  );
}
