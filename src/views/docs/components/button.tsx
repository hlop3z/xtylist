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
} from "../utils";

import * as UI from "../../../components/index.ts";
import PROPS from "./__props__.ts";

const { useSignal, useEffect } = preact;

export function Button() {
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
      <Options>
        <div class="d-f">
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
            items={Object.keys(xtyle.theme.info.theme)}
            change={(event) => {
              state.color.value = event.target.value;
            }}
          />
          <Switch title="Stack" class="ml-8" value={state.stack}></Switch>
          <Switch title="Dark" class="ml-8" value={state.dark}></Switch>
          <Switch title="Disabled" class="ml-8" value={state.disabled}></Switch>
        </div>
      </Options>

      <Preview>
        <div class="d-f dy-ce">
          <UI.Button
            size={state.size.value}
            variant={state.variant.value}
            color={state.color.value}
            stack={state.stack.value}
            dark={state.dark.value}
            disabled={state.disabled.value}
          >
            Click <span class="ml-1">Me</span>
          </UI.Button>
        </div>
      </Preview>

      <CodeProps args={PROPS.button} />

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
    </x-slot>
  );
}
