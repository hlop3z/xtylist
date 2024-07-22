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
      <Details>Control the visibility of a dialog.</Details>
      <CodeExample sub="toggle">{`xtyle.action("dialog.toggle", { name: "my-dialog", overlay: true })`}</CodeExample>
      <CodeExample sub="open">{`xtyle.action("dialog.open", { name: "my-dialog", overlay: true })`}</CodeExample>
      <CodeExample sub="close">{`xtyle.action("dialog.close", { name: "my-dialog", overlay: true })`}</CodeExample>
      <CodeExample sub="isActive">{`xtyle.action("dialog.isActive", <dialog-name>)`}</CodeExample>
      <CodeExample sub="keys">{`xtyle.action("dialog.keys")`}</CodeExample>
    </div>
  );
}
