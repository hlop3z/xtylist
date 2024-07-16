const $NAME = "xtylist__Popover";

import "./style.scss";

import elementPosition from "../../utils/elementPosition.ts";
import {
  intervalTime,
  getAutos,
  ReverseAxis,
  positionCSS,
  autoPositionCSS,
} from "./tools";

const { useEffect, useSignal } = preact;
// const { useEffect, useSignal, useMemo } = preact;

export default function Popover(props) {
  let elementBox: any = null;
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
    style.height = height;
  }
  if (width) {
    style.width = width;
  }

  const prevPosition = useSignal({ left: 0, top: 0 });
  const lastCSS = useSignal([]);

  async function runAuto() {
    const pos = elementPosition(elementBox.current, {
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
        autoPositionCSS("p", elementPopover, spaceY, posY);
      }

      if (auto.x && spaceX) {
        autoPositionCSS("p", elementPopover, spaceX, posX, true);
      }

      if (auto.y && shadowY) {
        autoPositionCSS(
          "s",
          elementPopover.current.firstChild.classList,
          shadowY,
          !shadowInverted ? posY : ReverseAxis[posY]
        );
      }

      if (auto.x && shadowX) {
        autoPositionCSS(
          "s",
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
        if (elementBox) {
          await runAuto();
        }
      }
    }, [isActive, prevPosition.value]);

    // Effect to run when the component mounts and updates
    useEffect(async () => {
      // Function to check for position change
      let element: any = elementBox ? elementBox.current : null;

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
    }, [elementBox, prevPosition.value]);
  }

  return (
    <div
      x-html
      {...props}
      x-ref={(self) => (elementBox = self)}
      class={[$NAME, props.class]}
      style={undefined}
      name={undefined}
      on-input={undefined}
      x-effect={undefined}
    >
      {props.children}
      <div
        x-html
        x-ref={(self) => (elementPopover = self)}
        class={[props.class, cssPosition, "popover"]}
        style={[style, props.style]}
        x-effect={{
          on: fxOn ? fxOn : "animate__fadeIn",
          off: fxOff ? fxOff : "animate__fadeOut",
          speed: "faster",
        }}
        css-is={isActive}
      >
        {slot ? slot() : <pre>{"slot={()=><div>Content</div>}"}</pre>}
      </div>
    </div>
  );
}
