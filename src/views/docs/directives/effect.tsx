import {
  CodeProps,
  CodeExample,
  Code,
  PropLine,
  Value,
  Preview,
  Options,
  Select,
} from "../utils";
const { useSignal, useEffect } = preact;

// on: fxOn ? fxOn : "animate__fadeInDown",
// off: fxoff ? fxoff : "animate__fadeOutDown",
// speed: "faster",
/* const { on, off, delay, speed, repeat } = props; */

export function Effect() {
  const state = {
    on: useSignal(null),
    off: useSignal(null),
    speed: useSignal(null),
    fx: useSignal(null),
  };

  useEffect(() => {
    setTimeout(() => {
      state.fx.value = null;
    }, 2000);
  }, [state.on.value, state.off.value]);

  return (
    <x-slot>
      <p class="my-4">
        Built with
        <a class="mx-1 td-b" href="https://animate.style/" target="__blank">
          Animate.CSS
        </a>
        and must be use together with{" "}
        <Code class="bd-a px-2 td-b br-2">css-is</Code>
      </p>

      <Options>
        <div class="d-f">
          <Select
            title="ON"
            none
            items={ListFX.enter}
            change={(event) => {
              state.on.value = event.target.value;
              state.fx.value = event.target.value;
            }}
          />
          <Select
            class="ml-8"
            title="OFF"
            none
            items={ListFX.exit}
            change={(event) => {
              state.off.value = event.target.value;
              state.fx.value = event.target.value;
            }}
          />

          <Select
            class="ml-8"
            title="Speed"
            none
            items={["slow", "slower", "fast", "faster"]}
            change={(event) => {
              state.speed.value = event.target.value;
            }}
          />
        </div>
      </Options>

      <Preview>
        <div
          x-html
          class={[
            "bd-a pa-4 bw-2",
            "animate__animated",
            "animate__fast",
            `animate__${state.fx.value}`,
          ]}
          style="border-radius: 40px;"
        >
          Demo
        </div>
      </Preview>

      <CodeProps
        sub="x-effect"
        args={[
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
        ]}
      />
      <CodeExample sub="">{`
<div 
  x-html 
  css-is={true}
  x-effect={${JSON.stringify({
    on: Value(state.on.value),
    off: Value(state.off.value),
    speed: Value(state.speed.value),
  })}}
  style="border-radius: 40px;"
>
  Demo
</div>      
      `}</CodeExample>
    </x-slot>
  );
}

const ListFX = {
  others: [
    "bounce",
    "flash",
    "pulse",
    "rubberBand",
    "shakeX",
    "shakeY",
    "headShake",
    "swing",
    "tada",
    "wobble",
    "jello",
    "heartBeat",
  ],
  enter: [
    "backInDown",
    "backInLeft",
    "backInRight",
    "backInUp",
    "bounceIn",
    "bounceInDown",
    "bounceInLeft",
    "bounceInRight",
    "bounceInUp",
    "fadeIn",
    "fadeInDown",
    "fadeInDownBig",
    "fadeInLeft",
    "fadeInLeftBig",
    "fadeInRight",
    "fadeInRightBig",
    "fadeInUp",
    "fadeInUpBig",
    "fadeInTopLeft",
    "fadeInTopRight",
    "fadeInBottomLeft",
    "fadeInBottomRight",
    "flip",
    "flipInX",
    "flipInY",
    "lightSpeedInRight",
    "lightSpeedInLeft",
    "rotateIn",
    "rotateInDownLeft",
    "rotateInDownRight",
    "rotateInUpLeft",
    "rotateInUpRight",
    "hinge",
    "jackInTheBox",
    "rollIn",
    "zoomIn",
    "zoomInDown",
    "zoomInLeft",
    "zoomInRight",
    "zoomInUp",
    "slideInDown",
    "slideInLeft",
    "slideInRight",
    "slideInUp",
  ],
  exit: [
    "backOutDown",
    "backOutLeft",
    "backOutRight",
    "backOutUp",
    "bounceOut",
    "bounceOutDown",
    "bounceOutLeft",
    "bounceOutRight",
    "bounceOutUp",
    "fadeOut",
    "fadeOutDown",
    "fadeOutDownBig",
    "fadeOutLeft",
    "fadeOutLeftBig",
    "fadeOutRight",
    "fadeOutRightBig",
    "fadeOutUp",
    "fadeOutUpBig",
    "fadeOutTopLeft",
    "fadeOutTopRight",
    "fadeOutBottomRight",
    "fadeOutBottomLeft",
    "flipOutX",
    "flipOutY",
    "lightSpeedOutRight",
    "lightSpeedOutLeft",
    "rotateOut",
    "rotateOutDownLeft",
    "rotateOutDownRight",
    "rotateOutUpLeft",
    "rotateOutUpRight",
    "rollOut",
    "zoomOut",
    "zoomOutDown",
    "zoomOutLeft",
    "zoomOutRight",
    "zoomOutUp",
    "slideOutDown",
    "slideOutLeft",
    "slideOutRight",
    "slideOutUp",
  ],
};
