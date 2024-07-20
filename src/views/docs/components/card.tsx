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

// const { useSignal, useEffect } = preact;

export function Card() {
  return (
    <x-slot>
      <Details>Independent paper sheets</Details>

      <Preview>
        <br />
        <div class="d-f dx-ce">
          <UI.Card
            height="200px"
            width="70%"
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
      <CodeExample sub="children">{`
<Card
  height="200px"
  width="70%"
>
  My Card
</Card>
      `}</CodeExample>
      <CodeExample sub="slots">{`
 <Card
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
</Card>      
      `}</CodeExample>
      <CodeProps args={PROPS.card} />
    </x-slot>
  );
}
