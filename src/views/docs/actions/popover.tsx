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
      <Details>Control the visibility of a popover.</Details>
      <CodeExample sub="toggle">{`xtyle.action("popover.toggle", <popover-name>)`}</CodeExample>
      <CodeExample sub="open">{`xtyle.action("popover.open", <popover-name>)`}</CodeExample>
      <CodeExample sub="close">{`xtyle.action("popover.close", <popover-name>)`}</CodeExample>
      <CodeExample sub="isActive">{`xtyle.action("popover.isActive", <popover-name>)`}</CodeExample>
      <CodeExample sub="keys">{`xtyle.action("popover.keys")`}</CodeExample>
    </div>
  );
}
