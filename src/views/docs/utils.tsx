import Style from "./style.css?raw";

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
    <x-slot>
      <h2>Props {props.sub ? ` (${props.sub})` : ""}</h2>
      <table class="DOCS__Props">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        {props.args.map((item) => (
          <tr>
            <td class="td-b">{item.name}</td>
            <td>{item.info}</td>
            <td>{JSON.stringify(item.default)}</td>
          </tr>
        ))}
      </table>
    </x-slot>
  );
}

export function Code(props) {
  return (
    <pre class="DOCS__Code bd-a px-2 py-1 td-b br-2 d-ib">{props.children}</pre>
  );
}

export function Preview(props) {
  return (
    <x-slot>
      <h2 class="my-2">Preview</h2>
      {props.children}
    </x-slot>
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
  return isNull(val);
};
