import { CodeProps, CodeExample, PropLine, Preview } from "../utils";
const { useSignal } = preact;

export function Shape() {
  const state = {
    key: useSignal(null),
  };
  return (
    <x-slot>
      <CodeProps
        sub="x-shape"
        args={[
          {
            name: "x-shape",
            info: "Shape selection from 1-to-14",
            default: null,
          },
        ]}
      />
      <CodeExample sub="">{`
<div 
  x-html 
${PropLine(state.key, "x-shape")}
  style="border-radius: 40px;"
>
  Demo
</div>      
      `}</CodeExample>

      <h2 class="my-2">Options</h2>
      <select
        onChange={(event) => {
          // console.log(event.target.value);
          state.key.value = event.target.value;
        }}
      >
        <option value="null">None</option>
        <x-slot
          x-for={(item) => <option value={item + 1}>{item + 1}</option>}
          x-in={12}
        ></x-slot>
      </select>

      <Preview>
        <div
          x-html
          x-shape={state.key.value}
          class="bd-a pa-4 bw-2"
          style="border-radius: 40px;"
        >
          Demo
        </div>
      </Preview>
    </x-slot>
  );
}
