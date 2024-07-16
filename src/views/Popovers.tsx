import * as UI from "../components/index.ts";

/* DevTools */
import lorem from "../devtool/lorem.mjs";

/* Utils */
const { useSignal } = preact;

const LOREM = lorem.sentence(4);

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
        <div style="height: 280vh" class="d-f dy-ce">
          {/* POPOVER */}
          <div style="width: 80%"></div>
          <UI.Popover
            title="Auto"
            axis-y="auto"
            axis-x="center"
            width="240px"
            height="200px"
            space-y="4"
            space-x="4"
            shadow-y="4"
            is-active
            slot={() => (
              <div
                class="ta-c oy-a color-bg-light"
                style="border: solid 1px green;"
              >
                {LOREM}
              </div>
            )}
          >
            <div>Hello World</div>
          </UI.Popover>
        </div>
      </div>
    </div>
  );
}
