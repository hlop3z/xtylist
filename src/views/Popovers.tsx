import * as UI from "../components/index.ts";

/* DevTools */
import lorem from "../devtool/lorem.mjs";

/* Utils */
const { useSignal, signal } = preact;

const LOREM = lorem.sentence(4);

setInterval(() => {
  // active.value = !active.value;
  xtyle.action("popover.open", "my-dialog");
}, 2000);

// active={active.value}

// @ts-ignore
export default function View({ route, search, arg }) {
  const view = useSignal("home");
  const setView = (name) => (view.value = name);
  return (
    <div class="eh-100p d-f df-col">
      <h1>Xtyle (TypeScript + Vite)</h1>
      <UI.Button theme-color="danger" on-click={() => setView("home")}>
        Home Page
      </UI.Button>
      {LOREM}
      <div class="oy-a">
        <div style="height: 120vh" class="d-f dy-ce">
          <div style="width: 80px"></div>
          <UI.Tooltip
            axis-y="auto"
            axis-x="left"
            space-y="4"
            space-x="8"
            shadow-y="4"
            shadow-inverted={false}
            width="200px"
            slot={({ Slot }) => (
              <Slot
                class="oy-a br-4 pa-4 sb-12"
                theme-color="dark"
                theme-text="light"
                width="200px"
              >
                ToolTip
              </Slot>
            )}
          >
            <div>ToolTip</div>
          </UI.Tooltip>

          {/* POPOVER */}
          <div style="width: 50%"></div>
          <UI.Popover
            name="my-dialog"
            axis-y="auto"
            axis-x="auto"
            width="240px"
            height="200px"
            space-y="4"
            space-x="4"
            shadow-y="4"
            shadow-inverted={false}
            persistent={false}
            slot={() => (
              <div
                class="ta-c oy-a color-bg-light"
                style="border: solid 1px green;"
              >
                {LOREM}
              </div>
            )}
          >
            <div>Popover</div>
          </UI.Popover>
        </div>
      </div>
    </div>
  );
}
