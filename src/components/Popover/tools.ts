import toolPosition from "./toolPosition";

export const intervalTime = 200;

export const ReverseAxis = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  center: "center",
};

export function preConfig(props) {
  if (!props["axis-y"]) {
    props["axis-y"] = "auto";
  }
  if (!props["axis-x"]) {
    props["axis-x"] = "auto";
  }
  return props;
}

export function getAxis(props) {
  const isCenterX = checkAxis(props, "x", "center");
  const isCenterY = checkAxis(props, "y", "center");
  const isLeftX = checkAxis(props, "x", "left");
  const isRightX = checkAxis(props, "x", "right");
  const isTopY = checkAxis(props, "y", "top");
  const isBottomY = checkAxis(props, "y", "bottom");
  return {
    "center-x": isCenterX,
    "center-y": isCenterY,
    top: isTopY,
    bottom: isBottomY,
    left: isLeftX,
    right: isRightX,
  };
}

function checkAxis(props, axis, value) {
  return props["axis-" + axis] === value;
}

export function getCSS(props, auto) {
  const css = getAxis(props);
  const keys = ["center-x", "center-y", "top", "bottom", "left", "right"];
  const active = keys.filter((key) => css[key] === true);
  // Remove - Padding (Space)
  if (auto.y) {
    keys.push("pb-" + props["space-y"]);
    keys.push("pt-" + props["space-y"]);
  }
  if (auto.x) {
    keys.push("pl-" + props["space-x"]);
    keys.push("pr-" + props["space-x"]);
  }
  return { keys, active };
}

export async function setPosition(element, prevPosition) {
  if (element) {
    const { left, top } = element.getBoundingClientRect();

    // Compare current position with previous position
    if (left !== prevPosition.value.left || top !== prevPosition.value.top) {
      // Update previous position with current position
      prevPosition.value = { left, top };
    }
  }
}

export function getAutos(props) {
  const { axisX, axisY } = props;

  let isAutoX = false;
  let isAutoY = false;
  let isAuto = false;

  if (axisY === "auto") {
    isAutoY = true;
    isAuto = true;
  }
  if (axisX === "auto") {
    isAutoX = true;
    isAuto = true;
  }

  return {
    is: isAuto,
    x: isAutoX,
    y: isAutoY,
  };
}

export function elementPosition(element, auto, centerY = false) {
  const css: any = [];
  const pos = toolPosition(element, {
    x: false,
    y: false,
  });
  if (auto.y) {
    css.push(ReverseAxis[pos.y]);
  }
  if (auto.x) {
    css.push(centerY ? ReverseAxis[pos.x] : pos.x);
  }
  return {
    axis: pos,
    class: css,
  };
}

export function autoSpacing(direction, space, reverse = false) {
  const prefix = "p";
  const section = reverse ? ReverseAxis[direction] : direction;
  return `${prefix}${section.charAt(0)}-${space}`;
}

function getShadow(direction, space, reverse = false) {
  const prefix = "s";
  const section = reverse ? ReverseAxis[direction] : direction;
  return `${prefix}${section.charAt(0)}-${space}`;
}

export function autoShadow(direction, size, reverse = false) {
  return {
    keys: [`sb-${size}`, `st-${size}`, `sl-${size}`, `sr-${size}`],
    active: getShadow(direction, size, reverse),
  };
}
