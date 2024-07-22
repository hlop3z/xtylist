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

const demoCSS = "bd-a sb-2 px-2 br-pill";

export function Toolbar() {
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
      <Details>Interface bar for tools and options.</Details>

      <Preview>
        <UI.Toolbar size="sm" class={demoCSS}>
          <span></span>
          Toolbar-sm
          <span></span>
        </UI.Toolbar>
        <br />
        <UI.Toolbar size="md" class={demoCSS}>
          <span></span>
          Toolbar-md
          <span></span>
        </UI.Toolbar>
        <br />
        <UI.Toolbar size="lg" class={demoCSS}>
          <span></span>
          Toolbar-lg
          <span></span>
        </UI.Toolbar>
      </Preview>

      <CodeExample sub="">{`
<Toolbar>
  <span></span>
    Toolbar
  <span></span>
</Toolbar>      
      `}</CodeExample>

      <CodeProps args={PROPS.toolbar} />
    </x-slot>
  );
}
