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

import * as UI from "../../../components/index.ts";
import PROPS from "./__props__.ts";

const { useSignal, useEffect } = preact;

export function Dialog() {
  const state = {
    size: useSignal(null),
    color: useSignal(null),
    stack: useSignal(false),
    dark: useSignal(false),
    disabled: useSignal(false),
  };
  return (
    <x-slot>
      <Details>Modal windows for displaying content temporarily.</Details>

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
          overlay
          persistent={false}
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

      <CodeExample sub="">{`
<Dialog
  slot-main={({ Slot }) => <Slot>Main</Slot>}
  slot-header={({ Slot }) => (
    <Slot class="bd-b">
      <span></span>
      Header
      <span></span>
    </Slot>
  )}
  slot-left={({ Slot }) => (
    <Slot width="80px" class="bd-r">
      <div> Left </div>
    </Slot>
  )}
  slot-right={({ Slot }) => (
    <Slot width="80px" class="bd-l">
      <div> Right</div>
    </Slot>
  )}
  slot-footer={({ Slot }) => (
    <Slot class="bd-t">
      <span></span>
      Footer
      <span></span>
    </Slot>
  )}
  >
</Dialog      


      `}</CodeExample>

      <CodeProps args={PROPS.dialog} />
    </x-slot>
  );
}
