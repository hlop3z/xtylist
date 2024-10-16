import Style from "./style.css?raw";
import { CopyIcon } from "./__tools";

const SwitchComponent = xtylist.Toggle;

xtyle.util.inject(Style, "library-docs");

export function Details(props) {
  return <p class="my-4">{props.children}</p>;
}

export function Colors(hidden) {
  const ignore = hidden ? hidden : [];
  const theme = Object.keys(xtyle.theme.info.theme).filter(
    (x) => !ignore.includes(x)
  );
  return theme;
}

function CopyToClipboard(text) {
  const container: any = document.getElementById("__TextToCopy__");
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Ensure the element is off-screen and not visible
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "-9999px";

  container.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand("copy");
  container.removeChild(textArea);
}

export function CodeExample(props) {
  return (
    <div class="DOCS__Code_Example">
      <h2>Code {props.sub ? ` (${props.sub})` : ""}</h2>
      <CopyIcon
        class="copy-icon"
        on-click={async () => {
          const text = (props.children || props.code || "").toString().trim();
          CopyToClipboard(text);
        }}
      ></CopyIcon>
      <pre x-html class="px-4 py-3 bd-a bw-2 DOCS__Example">
        {(props.children || props.code || "").trim()}
      </pre>
    </div>
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
    let value = Value(state.value);
    value = [null, true, false].includes(value) ? value : JSON.stringify(value);
    if (value === true) {
      return `  ${key}`;
    }
    return `  ${key}={${value}}`;
  }
  return "";
};

export const Value = (val) => ([null, "null"].includes(val) ? null : val);

export const Options = (props) => {
  return (
    <div>
      <h2 class="mt-1 mb-4">Options</h2>
      <div class="e-ns d-f df-fw">{props.children}</div>
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

export const Switch = (props) => {
  return (
    <div x-html class={[props.class, "d-f", "dy-ce"]}>
      <label class="mr-2 td-b">{props.title}:</label>
      <SwitchComponent {...props} class={undefined} />
    </div>
  );
};
