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

export function Fab() {
  const state = {
    variant: useSignal(null),
    size: useSignal(null),
    color: useSignal(null),
    stack: useSignal(false),
    dark: useSignal(false),
    disabled: useSignal(false),
  };
  return (
    <x-slot>
      <Details>Round floating button to perform actions.</Details>

      <Options>
        <Select
          title="Variant"
          none
          items={["outlined", "fill"]}
          change={(event) => {
            state.variant.value = event.target.value;
          }}
        />
        <Select
          title="Size"
          class="ml-8"
          none
          items={["sm", "md", "lg"]}
          change={(event) => {
            state.size.value = event.target.value;
          }}
        />
        <Select
          title="Color"
          class="ml-8"
          none={false}
          items={Colors()}
          change={(event) => {
            state.color.value = event.target.value;
          }}
        />
        <Switch title="Dark" class="ml-8" value={state.dark}></Switch>
        <Switch title="Disabled" class="ml-8" value={state.disabled}></Switch>
      </Options>

      <Preview>
        <div class="d-f dy-ce">
          <UI.Fab
            class="sb-4"
            size={state.size.value}
            variant={state.variant.value}
            color={state.color.value}
            dark={state.dark.value}
            disabled={state.disabled.value}
          >
            <span class="td-b ts-3">X</span>
          </UI.Fab>
        </div>
      </Preview>

      <CodeExample sub="">{`
<Button 
  stack 
${PropLine(state.variant, "variant")}
${PropLine(state.size, "size")}
${PropLine(state.color, "color")}
${PropLine(state.dark, "dark")}
${PropLine(state.disabled, "disabled")}
${PropLine(state.stack, "stack")}
>
  Click Me
</Button>      
      `}</CodeExample>

      <CodeProps
        args={PROPS.button.filter((x) => !["stack"].includes(x.name))}
      />
    </x-slot>
  );
}
