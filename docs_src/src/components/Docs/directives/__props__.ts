export default {
  shape: [
    {
      name: "x-shape",
      info: "Shape selection from 1-to-14",
      default: null,
    },
  ],
  effect: [
    {
      name: "on",
      info: "Specifies the animation to be applied when the element is active. Corresponds to an animation class from Animate.css.",
      default: null,
    },
    {
      name: "off",
      info: "Specifies the animation to be applied when the element is inactive. Corresponds to an animation class from Animate.css.",
      default: null,
    },
    {
      name: "speed",
      info: "Sets the speed of the animation. Accepts values such as `slow`, `slower`, `fast`, and `faster` as defined by Animate.css.",
      default: null,
    },
    {
      name: "delay",
      info: "Sets the delay of the animation. Accepts values from `2` to `5` as defined by Animate.css.",
      default: null,
    },
    {
      name: "repeat",
      info: "Sets how many times to repeat the animation. Accepts values from `1` to `3` and `infinite` as defined by Animate.css.",
      default: null,
    },
  ],
};
