import * as UI from "../components/index.ts";

/* DevTools */
import lorem from "../devtool/lorem.mjs";

/* Utils */
const { useSignal, signal } = preact;

const LOREM = lorem.sentence(4);

// active={active.value}

// @ts-ignore
export default function View({ route, search, arg }) {
  return (
    <UI.Grid row gap-x="2" gap-y="2">
      <UI.Grid sm="6" md="4" class="bd-a">
        Col A
      </UI.Grid>
      <UI.Grid sm="6" md="4" class="bd-a">
        Col B
      </UI.Grid>
      <UI.Grid sm="12" md="4" class="bd-a">
        Col C
      </UI.Grid>
    </UI.Grid>
  );
}
