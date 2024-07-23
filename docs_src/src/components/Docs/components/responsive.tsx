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

export function Responsive() {
  return (
    <x-slot>
      <Details>
        Responsive content that adapts seamlessly to different screen sizes.
      </Details>

      <Preview>
        <UI.Responsive
          mobile={<div>Mobile</div>}
          computer={<div>Desktop</div>}
        />
      </Preview>

      <CodeExample sub="">{`
<Responsive 
  breakpoints={["xs", "sm"]} 
  mobile={<div>Mobile</div>} 
  computer={<div>Desktop</div>} 
/>
      `}</CodeExample>

      <CodeProps args={PROPS.responsive} />
    </x-slot>
  );
}
