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
          <Switch title="Dark" class="ml-8" value={state.dark}></Switch>
          <Switch title="Disabled" class="ml-8" value={state.disabled}></Switch>
        </div>
      </Options>

      <Preview>
        <UI.Button
          variant="outlined"
          on-click={() => {
            xtyle.action("dialog.open", {
              name: "demo-dialog",
              overlay: true,
            });
          }}
        >
          Open Dialog
        </UI.Button>
        <UI.Dialog
          name="demo-dialog"
          full="width"
          height="400px"
          width="400px"
          class="br-4"
          theme-color="light"
          persistent
          slot-header={({ Slot }) => (
            <Slot class="bd-b">
              <span></span>
              Header
              <span></span>
            </Slot>
          )}
          slot-left={({ Slot }) => (
            <Slot width="80px" theme-color="success" theme-text="white">
              <div> Left</div>
            </Slot>
          )}
          slot-right={({ Slot }) => (
            <Slot width="80px" theme-color="danger">
              <div> Right</div>
            </Slot>
          )}
          slot-main={({ Slot }) => <Slot>My Dialog</Slot>}
          slot-footer={({ Slot }) => (
            <Slot theme-color="info" class="bd-t">
              <span></span>
              Footer
              <UI.Button
                class="mr-4"
                variant="fill"
                color="light"
                size="sm"
                on-click={() => {
                  xtyle.action("dialog.close", {
                    name: "demo-dialog",
                    overlay: true,
                  });
                }}
              >
                Close
              </UI.Button>
            </Slot>
          )}
        ></UI.Dialog>
      </Preview>

      <CodeProps args={PROPS.dialog} />

      <CodeExample sub="">{`
<Dialog
  stack 
${PropLine(state.variant, "variant")}
${PropLine(state.size, "size")}
${PropLine(state.color, "color")}
${PropLine(state.dark, "dark")}
${PropLine(state.disabled, "disabled")}
${PropLine(state.stack, "stack")}
>
  Click Me
</Dialog>      
      `}</CodeExample>
    </x-slot>
  );
}
