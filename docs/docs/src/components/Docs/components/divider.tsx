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

export function Divider() {
  const state = {
    thick: useSignal(null),
    shrink: useSignal(null),
    color: useSignal("black"),
  };
  return (
    <x-slot>
      <Details>
        Ensure that the container has a specified width (for horizontal
        orientation) or height (for vertical orientation) so that it can adjust
        to the given size.
      </Details>

      <Options>
        <div class="d-f">
          <Select
            title="Thick"
            items={4}
            change={(event) => {
              state.thick.value = parseInt(event.target.value);
            }}
          />
          <Select
            title="Shrink"
            class="ml-4"
            items={4}
            change={(event) => {
              state.shrink.value = parseInt(event.target.value);
            }}
          />
          <Select
            title="Color"
            class="ml-4"
            none={false}
            items={Colors(["none"])}
            change={(event) => {
              state.color.value = event.target.value;
            }}
          />
        </div>
      </Options>

      <Preview>
        <div class="d-f dy-ce" style="height: 30px">
          <span class="mr-2">Vertical</span>
          <UI.Divider
            vertical
            thick={state.thick.value}
            shrink={state.shrink.value}
            color={state.color.value}
          />
          <div class="ml-4 d-f df-col dy-ce">
            <span>Horizontal (default)</span>
            <UI.Divider
              thick={state.thick.value}
              shrink={state.shrink.value}
              color={state.color.value}
            />
          </div>
        </div>
      </Preview>

      <CodeExample sub="">{`
<Divider
${PropLine(state.thick, "thick")}
${PropLine(state.shrink, "shrink")}
${PropLine(state.color, "color")}
></Divider>      
      `}</CodeExample>

      <CodeProps args={PROPS.divider} />
    </x-slot>
  );
}
