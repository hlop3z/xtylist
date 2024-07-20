// @ts-nocheck
import {
  CodeProps,
  CodeExample,
  Code,
  PropLine,
  Value,
  Preview,
  Options,
  Select,
  Switch,
  Details,
} from "../utils";

import * as UI from "../../../components/index.ts";
import PROPS from "./__props__.ts";

const { useSignal, useEffect } = preact;

/* DevTools */
import lorem from "../../../devtool/lorem.mjs";

const LOREM = lorem.sentence(4);

export function Tooltip() {
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
      <Details>Small overlay display on hover.</Details>

      <Options>
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
        <Switch
          class="ml-4"
          title="Elevation-Inverted"
          value={state.elevationInverted}
        ></Switch>
      </Options>

      <Preview>
        <div style="height: 0px"></div>
        <LivePreview isActive={isActive} state={state} />
        <div style="height: 30px"></div>
      </Preview>

      <CodeExample sub="">{`
<Button 
  stack 
${PropLine(state.axisY, "axis-y")}
${PropLine(state.axisX, "axis-x")}
${PropLine(state.spaceY, "space-y")}
${PropLine(state.spaceX, "space-x")}
${PropLine(state.elevation, "elevation")}
${PropLine(state.elevationInverted, "elevation-inverted")}
  slot={() => (
    <div
      theme-color="dark"
      theme-text="light"
      class="d-f dx-ce dy-ce px-6 py-2 br-4"
    >
      Content
    </div>
  )}
>
  Click Me
</Button>      
      `}</CodeExample>

      <CodeProps
        args={PROPS.popover.filter(
          (x) => !["name", "persistent"].includes(x.name)
        )}
      />
    </x-slot>
  );
}

function LivePreview({ isActive, state }) {
  return (
    <div class="d-f">
      <div style="width: 0%"></div>
      <UI.Tooltip
        key={Date.now()}
        axis-y={state.axisY.value}
        axis-x={state.axisX.value}
        space-y={state.spaceY.value}
        space-x={state.spaceX.value}
        elevation={state.elevation.value}
        elevation-inverted={state.elevationInverted.value}
        slot={() => (
          <div
            x-html
            theme-color="dark"
            theme-text="light"
            class="d-f dx-ce dy-ce px-6 py-2 br-4"
          >
            Content
          </div>
        )}
      >
        <div
          x-html
          class="bd-a pa-4 e-ns e-p"
          style="width: 200px"
          on-click={() => (isActive.value = !isActive.value)}
        >
          Tooltip
        </div>
      </UI.Tooltip>
    </div>
  );
}
