const $NAME = "xtylist__Dialog";

import "./style.scss";

export const stateDialog = preact.signal({});

function Dialog(props) {
  const css: any = [];
  const { full, fxOn, fxoff } = xtyle.util.props(props);

  if (full) {
    css.push(`full-${full}`);
  }

  return (
    <div
      x-html
      {...props}
      name={null}
      class={[$NAME, props.class, css]}
      css-is={Control.isActive(props.name)}
      x-effect={{
        on: fxOn ? fxOn : "animate__fadeInDown",
        off: fxoff ? fxoff : "animate__fadeOutDown",
        speed: "faster",
      }}
    >
      {props.children}
    </div>
  );
}

const Control = {
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
  isActive(name) {
    if (stateDialog.value[name] === true) return true;
    return false;
  },
};

export default Control;
