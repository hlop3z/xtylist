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

const UI = xtylist;
import PROPS from "./__props__.ts";

// const { useSignal, useEffect } = preact;

export function Grid() {
  return (
    <x-slot>
      <Details>Layout system using columns and rows.</Details>

      <Preview>
        <UI.Grid row gap-x="2" gap-y="2">
          <UI.Grid sm="6" md="4" class="bd-a py-3 ta-c">
            Col A
          </UI.Grid>
          <UI.Grid sm="6" md="4" class="bd-a py-3 ta-c">
            Col B
          </UI.Grid>
          <UI.Grid sm="12" md="4" class="bd-a py-3 ta-c">
            Col C
          </UI.Grid>
        </UI.Grid>
      </Preview>

      <CodeExample sub="Rows">{`<Grid row gap-x="2" gap-y="2"></Grid>`}</CodeExample>
      <CodeProps sub="Rows" args={PROPS.gridRow} />

      <CodeExample sub="Cols">{`<Grid cols="12" sm="6" md="4" lg="4" xl="4"></Grid>`}</CodeExample>
      <CodeProps sub="Cols" args={PROPS.gridCol} />
    </x-slot>
  );
}
