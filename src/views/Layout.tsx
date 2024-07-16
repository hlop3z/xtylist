import * as UI from "../components/index.ts";

/* DevTools */
import lorem from "../devtool/lorem.mjs";
// import AppLogo from "/logo.png";

/* Utils */
const { useSignal } = preact;

const LOREM = lorem.sentence(500);

const { Layout, Button, Fab, Toolbar, Container, Grid } = UI;

function Icon(props) {
  return (
    <span
      x-html
      {...props}
      class={["icon", "material-symbols-outlined", "e-ns ", props.class]}
    >
      {props.children}
    </span>
  );
}

Layout.toggle("left", true);
Layout.toggle("right", true);

/*
 */
setTimeout(() => {
  xtyle.action("dialog.open", {
    name: "demo-dialog",
    overlay: true,
  });
}, 100);

// @ts-ignore
export default function View({ route, search, arg }) {
  return (
    <Layout.Display
      theme-color="context-dark"
      breakpoints={["xs", "sm", "md", "lg"]}
      clip-right
      clip-left
      space-x={xtyle.device.mobile ? 1 : 3}
      space-y={xtyle.device.mobile ? 1 : 3}
      slot-header={
        <Layout.Header class="sb-12 px-3" theme-color="white">
          <div>
            <Icon class="e-p" x-ripple on-click={() => Layout.toggle("left")}>
              menu
            </Icon>
          </div>
          <div class="d-f dx-ce dy-ce eh-i">
            <span class="ml-1 ts-2 td-b">Xtylist</span>
          </div>
          <div>
            <Icon class="e-p" x-ripple on-click={() => Layout.toggle("right")}>
              apps
            </Icon>
            <Icon
              class="e-p ml-2"
              x-ripple
              on-click={() => xtyle.action("account.profile")}
            >
              account_circle
            </Icon>
          </div>
        </Layout.Header>
      }
      slot-footer={
        <Layout.Footer class="st-12" theme-color="white">
          <span></span>
          Footer
          <span></span>
        </Layout.Footer>
      }
      slot-left={
        <Layout.Left class="ta-r sr-4" theme-color="white" clip-top clip-bottom>
          Left
        </Layout.Left>
      }
      slot-right={
        <Layout.Right
          class="sl-4 d-f df-col"
          theme-color="white"
          clip-top
          clip-bottom
        >
          Right
        </Layout.Right>
      }
      slot-left-mini={
        <Layout.LeftMini class="sl-4" theme-color="white" clip-top clip-bottom>
          Left Mini
        </Layout.LeftMini>
      }
      slot-right-mini={
        <Layout.RightMini class="sl-4" theme-color="white" clip-top clip-bottom>
          Right Mini
        </Layout.RightMini>
      }
    >
      <Layout.Main theme-color="white" class="px-4 py-4">
        {/* TOOLBAR */}
        <DemoToolbar />

        {/* DIALOG */}
        <DemoDialog />

        {/* CONTAINER */}
        <Container class="oy-a my-2">
          {LOREM}
          <div class="mb-24"></div>
        </Container>

        {/* DEVICE SIZE DISPLAY */}
        <br />
        {xtyle.device.size}
        {/*
        
          <Grid row gap-x="2" gap-y="2" class="eh-100p">
            <Grid cols="6" class="oy-a">
              {LOREM}
            </Grid>
            <Grid cols="6" class="oy-a">
              {LOREM}
            </Grid>
          </Grid>
        
        */}
      </Layout.Main>
    </Layout.Display>
  );
}
function DemoToolbar() {
  return (
    <x-slot>
      <Toolbar size="sm" class="bd-a">
        <span></span>
        Size Small
        <span></span>
      </Toolbar>
      <br />
      <Toolbar class="bd-a">
        <span></span>
        Medium
        <span></span>
      </Toolbar>
      <br />
      <Toolbar size="lg" class="bd-a br-4" x-shape={8}>
        <span></span>
        <div class="d-f dy-ce eh-100p">
          Large
          <UI.Divider vertical size={1} shrink={3} class="mx-2"></UI.Divider>
          <Button
            variant="outlined"
            color="danger"
            on-click={() => {
              xtyle.action("layout.open", "overlay");
              setTimeout(() => {
                xtyle.action("layout.close", "overlay");
              }, 1000);
            }}
          >
            Click Me
          </Button>
          <Fab size="sm" color="success" variant="fill" dark class="ml-2">
            <Icon class="ts-3">add</Icon>
          </Fab>
        </div>
        <span></span>
      </Toolbar>
    </x-slot>
  );
}

function DemoDialog() {
  return (
    <x-slot>
      <UI.Button
        on-click={() => {
          xtyle.action("dialog.open", {
            name: "demo-dialog",
            overlay: true,
          });
        }}
      >
        Open Dialog
      </UI.Button>
      <UI.Dialog.Display name="demo-dialog" full="screen">
        <UI.Card
          class="br-4"
          height="400px"
          theme-color="light"
          slot-header={({ Slot }) => (
            <Slot class="bd-b">
              <span></span>
              Medium
              <span></span>
            </Slot>
          )}
          slot-left={({ Slot }) => (
            <Slot width="80px" theme-color="success" theme-text="white">
              <div> Left {LOREM}</div>
            </Slot>
          )}
          slot-right={({ Slot }) => (
            <Slot width="80px" theme-color="danger">
              <div> Right {LOREM}</div>
            </Slot>
          )}
          slot-main={({ Slot }) => <Slot>My Dialog</Slot>}
          slot-footer={({ Slot }) => (
            <Slot theme-color="info" class="bd-t">
              <span></span>
              Medium
              <UI.Button
                size="sm"
                on-click={() => {
                  xtyle.action("dialog.close", {
                    name: "demo-dialog",
                    overlay: true,
                  });
                }}
              >
                Close
              </UI.Button>
            </Slot>
          )}
        ></UI.Card>
      </UI.Dialog.Display>
    </x-slot>
  );
}
