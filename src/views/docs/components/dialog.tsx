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

const { useSignal, useEffect } = preact;

export function Dialog() {
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
          <Toggle title="Dark" class="ml-8" value={state.dark}></Toggle>
          <Toggle title="Disabled" class="ml-8" value={state.disabled}></Toggle>
        </div>
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
        args={[
          {
            name: "variant",
            info: "Specifies the variant of the component, determining its style and appearance.",
            default: null,
          },
          {
            name: "size",
            info: "Specifies the size of the component, controlling its dimensions and spacing.",
            default: "md",
          },
          {
            name: "color",
            info: "Specifies the color of the component, affecting its background colors.",
            default: null,
          },
          {
            name: "dark",
            info: "Indicates whether the component should use a dark theme.",
            default: false,
          },
          {
            name: "disabled",
            info: "Indicates whether the component is disabled, preventing user interaction and applying a disabled style.",
            default: false,
          },
        ]}
      />
    </x-slot>
  );
}
