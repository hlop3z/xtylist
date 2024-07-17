const $NAME = "xtylist__Popover";

import "./style.scss";

import elementPosition from "../../utils/elementPosition.ts";
import {
  intervalTime,
  getAutos,
  ReverseAxis,
  positionCSS,
  autoCSS,
  shadowAndSpace,
} from "./tools";

const { signal, useEffect, useSignal } = preact;

const statePopover = signal({});

function Popover(props) {
  const { name, active, persistent } = props;
  const extras = {};

  let isActive = false;
  if (![null, undefined].includes(active)) {
    isActive = active;
  }
  if (name) {
    isActive = Control.isActive(name);
    // click-outside
    if (persistent !== true) {
      extras["x-click-outside"] = () => {
        if (isActive) {
          Control.close(name);
        }
      };
    }
  }

  return (
    <PopoverCore {...props} {...extras} is-active={isActive}></PopoverCore>
  );
}

function PopoverCore(props) {
  let elementContainer: any = null;
  let elementPopover: any = null;

  const camelProps = xtyle.util.props(props);
  const cssPosition = positionCSS(props);

  const auto = getAutos(camelProps);
  const { slot, height, width } = props;
  const { isActive } = camelProps;
  const {
    axisX,
    axisY,
    centerX,
    centerY,
    fxOff,
    fxOn,
    shadowInverted,
    shadowX,
    shadowY,
    spaceX,
    spaceY,
  } = camelProps;

  const style: any = {};
  if (height) {
    style["min-height"] = height;
    style["height"] = height;
  }
  if (width) {
    style["min-width"] = width;
    style["width"] = width;
  }

  const prevPosition = useSignal({ left: 0, top: 0 });
  const lastCSS = useSignal([]);

  async function runAuto() {
    const pos = elementPosition(elementContainer.current, {
      y: centerY === true ? true : false,
      x: centerX === true ? true : false,
    });

    let posY = axisY || "bottom";
    let posX = axisX || "left";

    if (auto.y) {
      posY = ReverseAxis[pos.y];
    }

    if (auto.x) {
      if (posY === "center") {
        posX = ReverseAxis[pos.x];
      } else {
        posX = pos.x;
      }
    }

    const args = {
      "axis-x": posX,
      "axis-y": posY,
    };

    const css = positionCSS(args);
    const keys = Object.keys(css);
    const cssList = keys.filter((key) => css[key] === true);

    if (JSON.stringify(cssList) !== JSON.stringify(lastCSS.value)) {
      lastCSS.value = cssList;
      elementPopover.remove(...keys);
      elementPopover.add(...cssList);

      if (auto.y && spaceY) {
        autoCSS.space(elementPopover, spaceY, posY);
      }

      if (auto.x && spaceX) {
        autoCSS.space(elementPopover, spaceX, posX, true);
      }

      if (auto.y && shadowY) {
        autoCSS.shadow(
          elementPopover.current.firstChild.classList,
          shadowY,
          !shadowInverted ? posY : ReverseAxis[posY]
        );
      }

      if (auto.x && shadowX) {
        autoCSS.shadow(
          elementPopover.current.firstChild.classList,
          shadowX,
          !shadowInverted ? posX : ReverseAxis[posX],
          true
        );
      }
    }
  }

  if (auto.is) {
    // Run Auto
    useEffect(async () => {
      if (isActive) {
        if (elementContainer) {
          await runAuto();
        }
      }
    }, [isActive, prevPosition.value]);

    // Effect to run when the component mounts and updates
    useEffect(async () => {
      // Function to check for position change
      let element: any = elementContainer ? elementContainer.current : null;

      async function checkPositionChange() {
        if (element) {
          // Get the current position of the element
          const { left, top } = element.getBoundingClientRect();

          // Compare current position with previous position
          if (
            left !== prevPosition.value.left ||
            top !== prevPosition.value.top
          ) {
            // Update previous position with current position
            prevPosition.value = { left, top };
          }
        }
      }

      // Check for position change initially
      await checkPositionChange();

      // Set up an interval to periodically check for position change
      const intervalId = setInterval(checkPositionChange, intervalTime);

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, [elementContainer, prevPosition.value]);
  }

  /*

  console.log(shadowAndSpace("p", spaceY, posY));
  console.log(shadowAndSpace("p", spaceY, posX, true));

   */
  const spaceCSS: any = [];

  if (!auto.y && spaceY) {
    const posY = axisY || "bottom";
    spaceCSS.push(shadowAndSpace(spaceY, posY));
  }
  if (!auto.x && spaceX) {
    const posX = axisX || "left";
    spaceCSS.push(shadowAndSpace(spaceX, posX, true));
  }

  return (
    <div
      x-html
      {...props}
      x-ref={(self) => (elementContainer = self)}
      class={[$NAME, props.parentClass]}
      style={undefined}
      name={undefined}
      on-input={undefined}
      x-effect={undefined}
    >
      {props.children}
      <div
        x-html
        x-ref={(self) => (elementPopover = self)}
        class={[props.class, cssPosition, spaceCSS, "popover"]}
        style={[style, props.style]}
        x-effect={{
          on: fxOn ? fxOn : "animate__fadeIn",
          off: fxOff ? fxOff : "animate__fadeOut",
          speed: "faster",
        }}
        css-is={isActive}
      >
        {slot ? (
          slot({
            Slot: (p) => <div x-html {...p} style={[style, p.style]}></div>,
          })
        ) : (
          <pre>{"slot={({ Slot })=><Slot>Content</Slot>}"}</pre>
        )}
      </div>
    </div>
  );
}

export const Control = {
  Display: Popover,
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

export default Popover;
