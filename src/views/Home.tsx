import * as UI from "../components/index.ts";
import * as directives from "./docs/directives";
import * as components from "./docs/components";

import { MenuIcon } from "./__tools.tsx";
/* DevTools */
// import lorem from "../devtool/lorem.mjs";
// import AppLogo from "/logo.png";

/* Utils */
// const { useSignal } = preact;

// const LOREM = lorem.sentence(500);

const { Layout, Button, Fab, Toolbar } = UI;

/* Utils */
const COMPONENT_LINKS = [
  { text: "Layout", link: "layout" },
  { text: "Grid", link: "grid" },
  { text: "Card", link: "card" },
  { text: "Toolbar", link: "toolbar" },
  { text: "Divider", link: "divider" },
  { text: "Button", link: "button" },
  { text: "Fab", link: "fab" },
  { text: "Dialog", link: "dialog" },
  { text: "Popover", link: "popover" },
  { text: "Tooltip", link: "tooltip" },
];

const ACTION_LINKS = [
  { text: "Layout", link: "layout" },
  { text: "Dialog", link: "dialog" },
  { text: "Popover", link: "popover" },
];

const DIRECTIVE_LINKS = [
  { text: "Shape", link: "shape" },
  { text: "Effect", link: "effect" },
];

const LinksTitle = (p) => <div class="ts-4 e-ns my-4 td-b" {...p}></div>;

// @ts-ignore
export default function View({ route, search, arg }) {
  console.log(route);
  return (
    <Layout.App
      breakpoints={["xs", "sm"]}
      clip-left
      slot-header={
        <Layout.Header elevation="12">
          <div>
            <MenuIcon
              class="ml-2"
              x-ripple
              on-click={() => {
                xtyle.action("layout.toggle", "left");
              }}
            />
          </div>
          <span class="ts-2">Xtylist</span>
          <span></span>
        </Layout.Header>
      }
      slot-left={
        <Layout.Left
          class="ta-c oy-a"
          theme-color="white"
          clip-top
          elevation="4"
        >
          <LinksTitle>~ Directives ~</LinksTitle>
          <ul class="ta-c d-f df-col">
            <x-slot
              x-for={(item) => (
                <li
                  x-html
                  x-ripple
                  class="py-3 e-ns e-p"
                  on-click={() => xtyle.router.go(`directives/${item.link}`)}
                >
                  {item.text}
                </li>
              )}
              x-in={DIRECTIVE_LINKS}
            ></x-slot>
          </ul>

          <LinksTitle>~ Components ~</LinksTitle>
          <ul class="ta-c d-f df-col">
            <x-slot
              x-for={(item) => (
                <li
                  x-html
                  x-ripple
                  class="py-3 e-ns e-p"
                  on-click={() => xtyle.router.go(`components/${item.link}`)}
                >
                  {item.text}
                </li>
              )}
              x-in={COMPONENT_LINKS}
            ></x-slot>
          </ul>

          <LinksTitle>~ Actions ~</LinksTitle>
          <ul class="ta-c d-f df-col">
            <x-slot
              x-for={(item) => (
                <li
                  x-html
                  x-ripple
                  class="py-3 e-ns e-p"
                  on-click={() => xtyle.router.go(`actions/${item.link}`)}
                >
                  {item.text}
                </li>
              )}
              x-in={ACTION_LINKS}
            ></x-slot>
          </ul>
        </Layout.Left>
      }
    >
      <Main {...{ route, search, arg }} />
    </Layout.App>
  );
}

// @ts-ignore
function Main({ route, search, arg }) {
  return (
    <Layout.Main class="px-4 py-4 oy-a">
      {arg.section} | {route} | {xtyle.store.darkMode.value ? "yes" : "no"}
      <x-slot x-switch x-case={route}>
        <x-slot case="directives/shape">
          <directives.Shape />
        </x-slot>
        <x-slot case="directives/effect">
          <directives.Effect />
        </x-slot>
        <x-slot case="components/example">
          <h1>Some Page</h1>
        </x-slot>
        <x-slot case="components/layout">
          <h1>Some Page</h1>
        </x-slot>
        <x-slot case="components/grid">
          <components.Grid />
        </x-slot>
        <x-slot case="components/button">
          <components.Button />
        </x-slot>
        <x-slot case="components/fab">
          <components.Fab />
        </x-slot>
        <x-slot case="components/dialog">
          <components.Dialog />
        </x-slot>
        <x-slot case="components/popover">
          <components.Popover />
        </x-slot>
      </x-slot>
    </Layout.Main>
  );
}
