// @ts-nocheck
import * as UI from "../components";

const { Layout, Dialog } = UI;

// console.log(UI.Button);
setTimeout(() => {
  xtyle.action("dialog.open", { name: "my-dialog", overlay: true });
}, 1000);

export default function View() {
  return (
    <Layout.Main theme-color="white">
      Main
      <UI.Button
        on-click={() => {
          xtyle.action("dialog.open", { name: "my-dialog", overlay: false });
        }}
      >
        Click Me
      </UI.Button>
      <x-slot x-portal="#modals" x-fragment>
        <Dialog
          name="my-dialog"
          overlay
          class="bd-a br-4"
          slot-main={({ Slot }) => (
            <Slot theme-color="white" theme-text="black">
              Dialog Main
            </Slot>
          )}
        ></Dialog>
      </x-slot>
    </Layout.Main>
  );
}
