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

export function Card() {
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
        <br />
        <div class="d-f dx-ce">
          <UI.Card
            height="200px"
            width="80%"
            class="br-4 bd-a"
            theme-color="light"
            slot-header={({ Slot }) => (
              <Slot class="bd-b">
                <span></span>
                Header
                <span></span>
              </Slot>
            )}
            slot-left={({ Slot }) => (
              <Slot width="80px" class="bd-r d-f dx-ce dy-ce">
                <div> Left </div>
              </Slot>
            )}
            slot-right={({ Slot }) => (
              <Slot width="80px" class="bd-l d-f dx-ce dy-ce">
                <div> Right</div>
              </Slot>
            )}
            slot-main={({ Slot }) => <Slot class="d-f dx-ce dy-ce">Main</Slot>}
            slot-footer={({ Slot }) => (
              <Slot class="bd-t">
                <span></span>
                Footer
                <span></span>
              </Slot>
            )}
          ></UI.Card>
        </div>
      </Preview>

      <CodeProps args={PROPS.card} />

      <CodeExample sub="children">{`
<UI.Card
  height="200px"
  width="80%"
  class="br-4 bd-a d-f dx-ce dy-ce"
  theme-color="light"
>
  My Card
</UI.Card>
      `}</CodeExample>

      <CodeExample sub="slots">{`
 <Card
${PropLine(state.variant, "variant")}
${PropLine(state.size, "size")}
${PropLine(state.color, "color")}
${PropLine(state.dark, "dark")}
${PropLine(state.disabled, "disabled")}
${PropLine(state.stack, "stack")}  
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
  slot-main={({ Slot }) => <Slot>Main</Slot>}
  slot-footer={({ Slot }) => (
    <Slot class="bd-t">
      <span></span>
      Footer
      <span></span>
    </Slot>
  )}
>
</Card>      
      `}</CodeExample>
    </x-slot>
  );
}
