import {
  CodeProps,
  CodeExample,
  Code,
  PropLine,
  Value,
  Preview,
  Options,
  Select,
  Toggle,
} from "../utils";

import * as UI from "../../../components/index.ts";
import PROPS from "./__props__.ts";

const { useSignal, useEffect } = preact;

/* DevTools */
import lorem from "../../../devtool/lorem.mjs";

const LOREM = lorem.sentence(4);

export function Popover() {
  const isActive = useSignal(false);
  const state = {
    axisY: useSignal("auto"),
    axisX: useSignal("auto"),
    spaceY: useSignal("0"),
    spaceX: useSignal("0"),
    elevation: useSignal("0"),
    persistent: useSignal(false),
    elevationInverted: useSignal(false),
  };

  useEffect(() => {
    setTimeout(() => {
      isActive.value = true;
    }, 100);
  }, [...Object.keys(state).map((key) => state[key].value)]);

  return (
    <x-slot>
      <Options>
        <div class="d-f df-fw">
          <Select
            title="Axis-Y"
            none={false}
            items={["auto", "top", "bottom", "center"]}
            change={(event) => {
              state.axisY.value = event.target.value;
            }}
          />
          <Select
            title="Axis-X"
            class="ml-4"
            none={false}
            items={["auto", "left", "right", "center"]}
            change={(event) => {
              state.axisX.value = event.target.value;
            }}
          />
          <Select
            title="Space-Y"
            class="ml-4"
            none={false}
            items={25}
            change={(event) => {
              state.spaceY.value = event.target.value;
            }}
          />
          <Select
            title="Space-X"
            class="ml-4"
            none={false}
            items={25}
            change={(event) => {
              state.spaceX.value = event.target.value;
            }}
          />
          <Select
            title="Elevation"
            class="ml-4"
            none={false}
            items={13}
            change={(event) => {
              state.elevation.value = event.target.value;
            }}
          />
        </div>
        <div class="d-f df-fw mt-4">
          <Toggle
            title="Elevation-Inverted"
            value={state.elevationInverted}
          ></Toggle>
          <Toggle
            title="Persistent"
            class="ml-4"
            value={state.persistent}
          ></Toggle>
        </div>
      </Options>

      <Preview>
        <div style="height: 0px"></div>
        <LivePreview isActive={isActive} state={state} />
        <div style="height: 60px"></div>
      </Preview>

      <CodeExample sub="">{`
<Button 
  stack 
${PropLine(state.axisY, "axis-y")}
${PropLine(state.axisX, "axis-x")}
${PropLine(state.spaceY, "space-y")}
${PropLine(state.spaceX, "space-x")}
${PropLine(state.elevation, "elevation")}
${PropLine(state.persistent, "persistent")}
${PropLine(state.elevationInverted, "elevation-inverted")}
${PropLine(state.elevationInverted, "disabled")}
  slot={() => (
    <Box
      theme-color="danger"
      class="ta-l oy-a px-4 py-2"
      height="100px"
      width="300px"
    >
      Content
    </Box>
  )}
>
  Click Me
</Button>      
      `}</CodeExample>

      <CodeProps args={PROPS.popover} />
    </x-slot>
  );
}

function LivePreview({ isActive, state }) {
  return (
    <div class="d-f">
      <div style="width: 0%"></div>
      <UI.Popover
        key={Date.now()}
        active={isActive}
        axis-y={state.axisY.value}
        axis-x={state.axisX.value}
        space-y={state.spaceY.value}
        space-x={state.spaceX.value}
        elevation={state.elevation.value}
        elevation-inverted={state.elevationInverted.value}
        persistent={state.persistent.value}
        slot={() => (
          <UI.Box
            theme-color="danger"
            class="ta-l oy-a px-4 py-2"
            height="100px"
            width="300px"
          >
            {LOREM}
          </UI.Box>
        )}
      >
        <div
          x-html
          class="bd-a pa-4 e-ns e-p"
          style="width: 200px"
          on-click={() => (isActive.value = !isActive.value)}
        >
          Popover
        </div>
      </UI.Popover>
    </div>
  );
}
