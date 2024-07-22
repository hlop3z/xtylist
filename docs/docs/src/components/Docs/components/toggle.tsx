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
  Colors,
  Details,
} from "../utils";

const UI = xtylist;
import PROPS from "./__props__.ts";

const { useSignal, useEffect } = preact;

const fill = false;

export function Toggle() {
  const state = {
    value: useSignal(false),
    color: useSignal(null),
    fill: useSignal(false),
    dark: useSignal(false),
    disabled: useSignal(false),
  };
  return (
    <x-slot>
      <Details>Switch to enable or disable options.</Details>

      <Options>
        <Select
          title="Color"
          none={false}
          items={Colors(["none"])}
          change={(event) => {
            state.color.value = event.target.value;
          }}
        />
        <Switch title="Dark" class="ml-8" value={state.dark}></Switch>
        <Switch title="Fill" class="ml-8" value={state.fill}></Switch>
        <Switch title="Disabled" class="ml-8" value={state.disabled}></Switch>
      </Options>

      <Preview>
        <div class="d-f dy-ce">
          <UI.Toggle
            size="sm"
            variant="radio"
            value={state.value}
            fill={state.fill.value}
            color={state.color.value}
            dark={state.dark.value}
            disabled={state.disabled.value}
          ></UI.Toggle>
          <x-slot
            x-for={(item) => (
              <UI.Toggle
                size={item}
                class="ml-2"
                variant="radio"
                value={state.value}
                fill={state.fill.value}
                color={state.color.value}
                dark={state.dark.value}
                disabled={state.disabled.value}
              ></UI.Toggle>
            )}
            x-in={["", "lg"]}
          ></x-slot>
          <x-slot
            x-for={(item) => (
              <UI.Toggle
                size={item}
                class="ml-2"
                value={state.value}
                fill={state.fill.value}
                color={state.color.value}
                dark={state.dark.value}
                disabled={state.disabled.value}
              ></UI.Toggle>
            )}
            x-in={["sm", "", "lg"]}
          ></x-slot>
          <x-slot
            x-for={(item) => (
              <UI.Toggle
                size={item}
                variant="switch"
                class="ml-2"
                value={state.value}
                fill={state.fill.value}
                color={state.color.value}
                dark={state.dark.value}
                disabled={state.disabled.value}
              ></UI.Toggle>
            )}
            x-in={["sm", "", "lg"]}
          ></x-slot>
        </div>
      </Preview>

      <CodeExample sub="">{`
<Toggle
${PropLine(state.color, "color")}
${PropLine(state.fill, "fill")}
${PropLine(state.dark, "dark")}
${PropLine(state.disabled, "disabled")}
></Toggle>      
      `}</CodeExample>

      <CodeProps args={PROPS.toggle} />
    </x-slot>
  );
}
