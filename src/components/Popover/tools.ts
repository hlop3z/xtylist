export const intervalTime = 100;

function checkAxis(props, axis, value) {
  return props["axis-" + axis] === value;
}

function getAxis(props) {
  const isCenterX = checkAxis(props, "x", "center");
  const isCenterY = checkAxis(props, "y", "center");
  const isLeftX = checkAxis(props, "x", "left");
  const isRightX = checkAxis(props, "x", "right");
  const isTopY = checkAxis(props, "y", "top");
  const isBottomY = checkAxis(props, "y", "bottom");
  return {
    isCenterX,
    isCenterY,
    isLeftX,
    isRightX,
    isTopY,
    isBottomY,
  };
}

export const ReverseAxis = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  center: "center",
};

export function positionCSS(props) {
  const { isCenterX, isCenterY, isLeftX, isRightX, isTopY, isBottomY } =
    getAxis(props);

  const preConfig = {
    left: isLeftX,
    right: isRightX,
  };

  if (isCenterY) {
    if (preConfig.left) {
      preConfig.right = false;
      preConfig.left = true;
    } else if (preConfig.right) {
      preConfig.left = false;
      preConfig.right = true;
    }
  }

  return {
    "center-x": isCenterX,
    "center-y": isCenterY,
    top: isTopY,
    bottom: isBottomY,
    ...preConfig,
  };
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

function autoPositionCSS(prefix, self, space, direction, isX = false) {
  let oppositeDirection = "";
  if (isX) {
    oppositeDirection = direction === "left" ? "right" : "left";
  } else {
    oppositeDirection = direction === "top" ? "bottom" : "top";
  }
  self.remove(`${prefix}${direction.charAt(0)}-${space}`);
  self.add(`${prefix}${oppositeDirection.charAt(0)}-${space}`);
}

export function shadowAndSpace(space, direction, isX = false) {
  const prefix = "p";
  let oppositeDirection = "";
  if (isX) {
    oppositeDirection = direction === "right" ? "right" : "left";
  } else {
    oppositeDirection = direction === "top" ? "bottom" : "top";
  }
  return `${prefix}${oppositeDirection.charAt(0)}-${space}`;
}

export const autoCSS = {
  space: (a, b, c, d = false) => autoPositionCSS("p", a, b, c, d),
  shadow: (a, b, c, d = false) => autoPositionCSS("s", a, b, c, d),
};
