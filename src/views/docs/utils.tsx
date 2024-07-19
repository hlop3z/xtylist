import Style from "./style.css?raw";
import { default as Switch } from "../../components/Toggle";

xtyle.util.inject(Style, "library-docs");

export function CodeExample(props) {
  return (
    <x-slot>
      <h2>Code {props.sub ? ` (${props.sub})` : ""}</h2>
      <pre x-html class="px-4 py-3 bd-a bw-2 DOCS__Example">
        {(props.children || props.code || "").trim()}
      </pre>
    </x-slot>
  );
}

export function CodeProps(props) {
  return (
    <div class="my-2">
      <h2>Props {props.sub ? ` (${props.sub})` : ""}</h2>
      <table class="DOCS__Props">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        {props.args.map((item) => (
          <tr>
            <td class="td-b">
              <Code>{item.name}</Code>
            </td>
            <td>{item.info}</td>
            <td>{JSON.stringify(item.default)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export function Code(props) {
  return (
    <pre class="DOCS__Code bd-a px-2 py-1 td-b br-2 d-ib">{props.children}</pre>
  );
}

export function Preview(props) {
  return (
    <div class="my-4">
      <h2 class="my-2">Preview</h2>
      {props.children}
    </div>
  );
}

export const PropLine = (state, key: any = null) => {
  if (state.value !== undefined) {
    const val = Value(state.value);
    return `  ${key}={${val}}`;
  }
  return "";
};

const isNull = (val) => ([null, "null"].includes(val) ? null : val);

export const Value = (val) => {
  const value = isNull(val);
  return [null, true, false].includes(value) ? value : JSON.stringify(value);
};

export const Options = (props) => {
  return (
    <div>
      <h2 class="mt-1 mb-4">Options</h2>
      <div class="e-ns">{props.children}</div>
    </div>
  );
};

export const Select = (props) => {
  return (
    <div x-html class={props.class}>
      <label class="mr-2 td-b">{props.title}:</label>
      <select onChange={props.change}>
        {props.none ? <option value="null">None</option> : ""}
        <x-slot
          x-for={(item) => <option value={item}>{item}</option>}
          x-in={props.items}
        ></x-slot>
      </select>
    </div>
  );
};

export const Toggle = (props) => {
  return (
    <div x-html class={props.class}>
      <label class="mr-2 td-b">{props.title}:</label>
      <Switch {...props} class={undefined} />
    </div>
  );
};
