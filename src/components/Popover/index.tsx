const $NAME = "xtylist__Popover";

import "./style.scss";

import {
  getAutos,
  getCSS,
  intervalTime,
  setPosition,
  elementPosition,
  autoSpacing,
  autoShadow,
} from "./tools";

const { signal, useEffect, useSignal } = preact;

const statePopover = signal({});

export default function Popover(props) {
  const { name, active, persistent } = props;
  const extras = {};

  if (!props["axis-y"]) {
    props["axis-y"] = "auto";
  }
  if (!props["axis-x"]) {
    props["axis-x"] = "auto";
  }

  let isActive = false;
  if (active && ![null, undefined].includes(active.value)) {
    isActive = active.value;
  }
  if (name) {
    isActive = Control.isActive(name);
  }

  // click-outside
  if (persistent !== true) {
    extras["x-click-outside"] = () => {
      if (isActive) {
        if (name) {
          Control.close(name);
        } else if (active.value) {
          active.value = false;
        }
      }
    };
  }

  return (
    <PopoverCore {...props} {...extras} is-active={isActive}></PopoverCore>
  );
}

function PopoverCore(props) {
  // Elements
  let elementContainer: any = null;
  let elementPopover: any = null;

  // Props
  const camelProps = xtyle.util.props(props);
  const { slot } = props;
  const { isActive } = camelProps;
  const {
    axisX,
    axisY,
    fxOff,
    fxOn,
    elevationInverted,
    elevation,
    spaceX,
    spaceY,
  } = camelProps;

  // Config
  const auto = getAutos(camelProps);
  const centerY = axisY === "center";

  // States
  const prevPosition = useSignal({ left: 0, top: 0 });

  // Auto
  if (auto.is) {
    const autoMethod = async () => {
      const element: any = elementPopover ? elementPopover.current : null;
      if (element) {
        const child = element.firstChild;
        const info = elementPosition(elementContainer.current, auto, centerY);
        const css = getCSS(props, auto);

        // Class Updates
        elementPopover.remove(...css.keys);
        elementPopover.add(...info.class);
        elementPopover.add(...css.active);

        // Spacing Classes
        if (auto.y) {
          const spacing = autoSpacing(info.axis.y, spaceY);
          elementPopover.add(spacing);
        } else {
          const spacing = autoSpacing(axisY, spaceY, true);
          elementPopover.add(spacing);
        }
        if (auto.x) {
          const spacing = autoSpacing(info.axis.x, spaceX);
          elementPopover.add(spacing);
        } else {
          const spacing = autoSpacing(axisX, spaceX);
          elementPopover.add(spacing);
        }

        // Shadow Classes
        let theShadow: any = null;
        if (centerY && auto.x) {
          theShadow = autoShadow(info.axis.x, elevation, elevationInverted);
        } else if (auto.y) {
          theShadow = autoShadow(info.axis.y, elevation, elevationInverted);
        } else if (auto.x && !auto.y) {
          theShadow = autoShadow(axisY, elevation, !elevationInverted);
        }
        if (theShadow) {
          child.classList.remove(...theShadow.keys);
          child.classList.add(theShadow.active);
        }
      }
    };
    const getPosition = async () => {
      const element: any = elementContainer ? elementContainer.current : null;

      await setPosition(element, prevPosition);

      const checkPositionChange = async () =>
        await setPosition(element, prevPosition);

      const intervalId = setInterval(checkPositionChange, intervalTime);

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    };
    useEffect(getPosition, [elementContainer]);
    useEffect(autoMethod, [prevPosition.value]);
    // INIT
    autoMethod();
  } else {
    const notAutoMethod = () => {
      const element: any = elementPopover ? elementPopover.current : null;
      if (element) {
        const child = element.firstChild;

        // Space Classes
        const spacing = {
          x: autoSpacing(axisX, spaceX),
          y: autoSpacing(axisY, spaceY, true),
        };
        elementPopover.add(...[spacing.x, spacing.y]);

        // Shadow Classes
        let theShadow: any = null;
        if (centerY) {
          theShadow = autoShadow(axisX, elevation, !elevationInverted);
        } else {
          theShadow = autoShadow(axisY, elevation, !elevationInverted);
        }
        if (theShadow) {
          child.classList.remove(...theShadow.keys);
          child.classList.add(theShadow.active);
        }
      }
    };
    useEffect(notAutoMethod, [elementPopover]);
  }

  // Animations
  const animation = {
    on: fxOn ? fxOn : "animate__fadeIn",
    off: fxOff ? fxOff : "animate__fadeOut",
    speed: "faster",
  };

  // Classes
  const css = getCSS(props, auto);

  return (
    <div
      x-html
      {...props}
      x-ref={(self) => (elementContainer = self)}
      class={[$NAME, props.parentClass]}
    >
      {props.children}
      <div
        x-html
        x-ref={(self) => (elementPopover = self)}
        class={["popover", css.active, props.class]}
        css-is={isActive}
        x-effect={animation}
      >
        {slot ? props.slot() : ""}
      </div>
    </div>
  );
}

export const Control = {
  state: statePopover,
  keys: () => Object.keys(statePopover.value),
  open(name) {
    const draft = { ...statePopover.value };
    draft[name] = true;
    statePopover.value = draft;
  },
  close(name) {
    const draft = { ...statePopover.value };
    draft[name] = false;
    statePopover.value = draft;
  },
  toggle(name) {
    const draft = { ...statePopover.value };
    draft[name] = !draft[name];
    statePopover.value = draft;
  },
  isActive(name) {
    if (statePopover.value[name] === true) return true;
    return false;
  },
};
