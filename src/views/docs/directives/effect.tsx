import {
  CodeProps,
  CodeExample,
  Code,
  PropLine,
  Value,
  Preview,
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

      <h2 class="my-2">Options</h2>
      <div class="d-f">
        <div>
          <label class="mr-2 td-b">ON:</label>
          <select
            onChange={(event) => {
              // console.log(event.target.value);
              state.on.value = event.target.value;
              state.fx.value = event.target.value;
            }}
          >
            <option value="null">None</option>
            <x-slot
              x-for={(item) => <option value={item}>{item}</option>}
              x-in={ListFX.enter}
            ></x-slot>
          </select>
        </div>
        <div class="ml-8">
          <label class="mr-2 td-b">OFF:</label>
          <select
            onChange={(event) => {
              // console.log(event.target.value);
              state.off.value = event.target.value;
              state.fx.value = event.target.value;
            }}
          >
            <option value="null">None</option>
            <x-slot
              x-for={(item) => <option value={item}>{item}</option>}
              x-in={ListFX.exit}
            ></x-slot>
          </select>
        </div>
        <div class="ml-8">
          <label class="mr-2 td-b">Speed:</label>
          <select
            onChange={(event) => {
              // console.log(event.target.value);
              state.speed.value = event.target.value;
            }}
          >
            <option value="null">None</option>
            <x-slot
              x-for={(item) => <option value={item}>{item}</option>}
              x-in={["slow", "slower", "fast", "faster"]}
            ></x-slot>
          </select>
        </div>
      </div>

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
