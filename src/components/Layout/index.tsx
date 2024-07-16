const $NAME = "xtylist__Layout";

import "./style.scss";

const MobileBreakPoints = ["xs", "sm", "md", "lg"];

const State = {
  left: preact.signal(false),
  right: preact.signal(false),
  "left-mini": preact.signal(false),
  "right-mini": preact.signal(false),
  overlay: preact.signal(false),
};

export default {
  Display: Layout,
  // Core
  Main,
  Header,
  Footer,
  // Sides
  Left: (props) => Drawer({ ...props, ...{ name: "left" } }),
  Right: (props) => Drawer({ ...props, ...{ name: "right", right: true } }),
  LeftMini: (props) =>
    Drawer({ ...props, ...{ name: "left-mini", mini: true } }),
  RightMini: (props) =>
    Drawer({ ...props, ...{ name: "right-mini", mini: true, right: true } }),
  // Actions
  state: State,
  toggle(name: string, value?: boolean) {
    if (value !== undefined) {
      State[name].value = value;
    } else {
      State[name].value = !State[name].value;
    }
  },
};

function Overlay() {
  return (
    <div
      x-html
      class={[`${$NAME}-Overlay`]}
      css-on="open"
      css-is={State.overlay.value}
    ></div>
  );
}

function Layout(props) {
  const {
    slotHeader,
    slotFooter,
    slotLeft,
    slotRight,
    slotLeftMini,
    slotRightMini,
    clipLeft,
    clipRight,
    spaceY,
    spaceX,
  } = xtyle.util.props(props);

  const isMobile = xtyle.device.is(...(props.breakpoints || MobileBreakPoints));

  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      <Overlay />

      {/* HEADER */}
      {slotHeader}

      {/* APP-MAIN  */}
      <main
        x-html
        class={[
          "lm",
          {
            "lc-t": slotHeader ? true : false,
            "lc-b": slotFooter ? true : false,
            "lc-l": slotLeft && !isMobile && clipLeft ? true : false,
            "lc-r": slotRight && !isMobile && clipRight ? true : false,
          },
        ]}
      >
        <div
          x-html
          class={[
            "d-b",
            "eh-100p",
            {
              [`px-${spaceX}`]: spaceX ? true : false,
              [`py-${spaceY}`]: spaceY ? true : false,
            },
          ]}
        >
          {props.children}
        </div>
      </main>

      {/* SIDES */}
      {slotLeft}
      {slotRight}
      {slotLeftMini}
      {slotRightMini}

      {/* FOOTER */}
      {slotFooter}
    </div>
  );
}

function Header(props) {
  const css = ["d-f dy-ce dx-sb"];
  return (
    <div x-html {...props} class={["header", "lt", ...css, props.class]}>
      {props.children}
    </div>
  );
}

function Footer(props) {
  const css = ["d-f dy-ce dx-sb"];
  return (
    <footer x-html {...props} class={["footer", "lb", ...css, props.class]}>
      {props.children}
    </footer>
  );
}

function Main(props) {
  const base = `d-f df-col eh-100p`;
  return (
    <div
      x-html
      {...props}
      class={[base, props.class, { "oy-a": props.scroll }]}
    >
      {props.children}
    </div>
  );
}

function Drawer(props) {
  const { clipTop, clipBottom, right, noSwipe } = xtyle.util.props(props);
  const state = State[props.name];
  const side = right ? "lr" : "ll";
  const config = {
    mini: props.mini,
    "lc-t": clipTop,
    "lc-b": clipBottom,
    open: state.value,
  };
  return (
    <div
      x-html
      {...props}
      class={["aside", "ld", config, side, props.class]}
      css-is={state.value}
      css-on="open"
      x-swipe={({ value }) => {
        if (!noSwipe) {
          if (!right && value === "left") {
            state.value = false;
          }
          if (right && value === "right") {
            state.value = false;
          }
        }
      }}
    >
      {props.children}
    </div>
  );
}
