import * as UI from "../components";

const { Layout } = UI;

export default function Application() {
  return (
    <Layout.App
      theme-color="danger"
      clip-right
      clip-left
      breakpoints={["xs", "sm", "md", "lg"]}
      space-x={xtyle.device.mobile ? 1 : 3}
      space-y={xtyle.device.mobile ? 1 : 3}
      slot-header={
        <Layout.Header theme-color="white" elevation="8">
          <div>
            <span
              class="material-symbols-outlined e-ns e-p"
              x-html
              on-click={() => xtyle.action("layout.toggle", "left")}
            >
              menu
            </span>
          </div>
          Header
          <span></span>
        </Layout.Header>
      }
      slot-footer={
        <Layout.Footer theme-color="white" elevation="8">
          <span></span>
          Footer
          <span></span>
        </Layout.Footer>
      }
      slot-left={
        <Layout.Left
          class="ta-r"
          theme-color="white"
          elevation="8"
          clip-top
          clip-bottom
        >
          Left
        </Layout.Left>
      }
      slot-right={
        <Layout.Right theme-color="white" elevation="8" clip-top clip-bottom>
          Right
        </Layout.Right>
      }
      slot-left-mini={
        <Layout.LeftMini theme-color="white" elevation="8" clip-top clip-bottom>
          Left Mini
        </Layout.LeftMini>
      }
      slot-right-mini={
        <Layout.RightMini
          theme-color="white"
          elevation="8"
          clip-top
          clip-bottom
        >
          Right Mini
        </Layout.RightMini>
      }
      slot-dialog={<x-slot></x-slot>}
    >
      <xtyle.router.views />
    </Layout.App>
  );
}

xtyle.theme.set({
  theme: {
    // Core
    none: "transparent", // None
    white: "white", // White
    black: "black", // Black
    light: "#fff", // Light
    dark: "#424242", // Dark

    // Main
    context: "#616161", // Context

    // Util
    success: "#4CAF50",
    danger: "#F44336",
    warning: "#ff9800",
    info: "#2196F3",

    // Theme
    primary: "#ba68c8",
    secondary: "#c2185b",
  },
  dark: {
    // Main
    context: "#a5a5a5", // Context

    // Util
    success: "#0f5132",
    danger: "#B71C1C",
    warning: "#ff9800",
    info: "#2196F3",

    // Theme
    primary: "#ba68c8",
    secondary: "#c2185b",
  },
});
