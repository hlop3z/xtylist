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

export function Grid() {
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
      <CodeExample sub="Cols">{`<Grid cols="12" sm="6" md="4" lg="4" xl="4"></Grid>`}</CodeExample>

      <CodeProps
        sub="Rows"
        args={[
          {
            name: "row",
            info: "Indicates if the component should be displayed as a row layout.",
            default: false,
          },
          {
            name: "gap-x",
            info: "Defines the gap in the X-axis.",
            default: 0,
          },
          {
            name: "gap-y",
            info: "Defines the gap in the Y-axis.",
            default: 0,
          },
        ]}
      />
      <CodeProps
        sub="Cols"
        args={[
          {
            name: "cols",
            info: "Specifies the number of columns in the grid layout.",
            default: 12,
          },
          {
            name: "sm",
            info: "Defines the number of columns for small screens (max-width: 767px).",
            default: 12,
          },
          {
            name: "md",
            info: "Defines the number of columns for medium screens (min-width: 768px).",
            default: 12,
          },
          {
            name: "lg",
            info: "Defines the number of columns for large screens (min-width: 992px).",
            default: 12,
          },
          {
            name: "xl",
            info: "Defines the number of columns for extra-large screens (min-width: 1200px).",
            default: 12,
          },
        ]}
      />
    </x-slot>
  );
}
