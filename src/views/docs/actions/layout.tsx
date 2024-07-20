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

export default function Component() {
  return (
    <div>
      <Details>Control the visibility of various sections.</Details>
      <h2 class="mb-2">Sections</h2>
      <ul class="mb-4">
        <x-slot
          x-for={(item) => (
            <li class="mb-2">
              <span class="ts-3">•</span> <Code>{item}</Code>
            </li>
          )}
          x-in={["left", "right", "left-mini", "right-mini", "overlay"]}
        ></x-slot>
      </ul>
      <CodeExample sub="toggle">{`xtyle.action("layout.toggle", <section-name>)`}</CodeExample>
      <CodeExample sub="open">{`xtyle.action("layout.open", <section-name>)`}</CodeExample>
      <CodeExample sub="close">{`xtyle.action("layout.close", <section-name>)`}</CodeExample>
      <CodeExample sub="keys">{`xtyle.action("layout.keys")`}</CodeExample>
    </div>
  );
}
