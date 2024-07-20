const $NAME = "xtylist__Dialog";

import "./style.scss";
import Card from "../Card";
import Props from "./props";

const stateDialog = preact.signal({});

function Dialog(props: Props) {
  const css: any = [];
  const extras = {};

  const { name, active, full, persistent, fxOn, fxOff, overlay } =
    xtyle.util.props(props);

  if (full) {
    css.push(`full-${full}`);
  }

  let isActive = false;
  if (active && ![null, undefined].includes(active.value)) {
    isActive = active.value;
  }
  if (name) {
    isActive = Control.isActive(name);
    // click-outside
    if (persistent !== true) {
      extras["x-click-outside"] = () => {
        if (isActive) {
          if (name) {
            Control.close(name, overlay ? true : false);
          } else if (active.value) {
            active.value = false;
          }
        }
      };
    }
  }

  const reset = { name: undefined, fxOn: undefined, fxoff: undefined };

  const animation = {
    on: fxOn ? fxOn : "animate__fadeInDown",
    off: fxOff ? fxOff : "animate__fadeOutDown",
    speed: "faster",
  };

  return (
    <div
      x-html
      name={null}
      class={[$NAME, css]}
      css-is={isActive}
      x-effect={animation}
    >
      <Card {...props} {...extras} {...reset} />
    </div>
  );
}

export const Control = {
  Display: Dialog,
  state: stateDialog,
  keys: () => Object.keys(stateDialog.value),
  open(name, overlay = true) {
    const draft = { ...stateDialog.value };
    draft[name] = true;
    stateDialog.value = draft;
    if (overlay) {
      xtyle.action("layout.open", "overlay");
    }
  },
  close(name, overlay = true) {
    const draft = { ...stateDialog.value };
    draft[name] = false;
    stateDialog.value = draft;
    if (overlay) {
      xtyle.action("layout.close", "overlay");
    }
  },
  toggle(name, overlay = true) {
    if (Control.isActive(name)) {
      Control.close(name, overlay);
    } else {
      Control.open(name, overlay);
    }
  },
  isActive(name) {
    if (stateDialog.value[name] === true) return true;
    return false;
  },
};

export default Dialog;
