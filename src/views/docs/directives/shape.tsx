import {
  CodeProps,
  CodeExample,
  PropLine,
  Preview,
  Select,
  Options,
} from "../utils";
import PROPS from "./__props__.ts";

const { useSignal } = preact;

export function Shape() {
  const state = {
    key: useSignal(null),
  };
  return (
    <x-slot>
      <Options>
        <div class="d-f">
          <Select
            title="x-shape"
            none
            items={[...Array(14).keys()].map((x) => (x += 1))}
            change={(event) => {
              // console.log(event.target.value);
              state.key.value = event.target.value;
            }}
          />
        </div>
      </Options>

      <Preview>
        <div
          key={Date.now()}
          x-html
          x-shape={state.key.value}
          class="bd-a pa-4 bw-2"
          style="border-radius: 40px;"
        >
          Demo
        </div>
      </Preview>

      <CodeProps sub="x-shape" args={PROPS.shape} />
      <CodeExample sub="">{`
<div 
  x-html 
${PropLine(state.key, "x-shape")}
  style="border-radius: 40px;"
>
  Demo
</div>      
      `}</CodeExample>
    </x-slot>
  );
}
