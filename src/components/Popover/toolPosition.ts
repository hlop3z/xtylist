function horizontalPosition(element, center = false) {
  const childRect = element.getBoundingClientRect();
  const distanceToLeft = childRect.left;
  const distanceToRight = Math.round(window.innerWidth - childRect.right);
  const halfwayPoint = Math.round(window.innerWidth / 2);

  if (distanceToLeft < halfwayPoint && distanceToRight < halfwayPoint) {
    if (center === true) {
      return "center";
    } else {
      // Default
      return "left";
    }
  } else if (distanceToLeft < distanceToRight) {
    return "left";
  } else {
    return "right";
  }
}

function verticalPosition(element, center = false) {
  const childRect = element.getBoundingClientRect();
  const distanceToTop = childRect.top;
  const distanceToBottom = window.innerHeight - childRect.bottom;
  const halfwayPoint = window.innerHeight / 2;

  if (distanceToTop < halfwayPoint && distanceToBottom < halfwayPoint) {
    if (center === true) {
      return "center";
    } else {
      return "top";
    }
    // Default
  } else if (distanceToTop < distanceToBottom) {
    return "top";
  } else {
    return "bottom";
  }
}

export default function elementPosition(element, config) {
  const center = config || {};
  const axisY = verticalPosition(element, center.y);
  const axisx = horizontalPosition(element, center.x);
  const setup = {
    x: axisx,
    y: axisY,
  };
  return setup;
}
