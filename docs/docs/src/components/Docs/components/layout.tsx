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
} from "../utils";

const UI = xtylist;
import PROPS from "./__props__.ts";

// const { useSignal, useEffect } = preact;

export function Layout() {
  return (
    <x-slot>
      <p class="my-4">
        The layout consists of different sections: <Code>Layout.App</Code>,{" "}
        <Code>Layout.Main</Code>, <Code>Layout.Header</Code>,{" "}
        <Code>Layout.Footer</Code>, <Code>Layout.Left</Code>,{" "}
        <Code>Layout.Right</Code>, and mini side sections:{" "}
        <Code>Layout.LeftMini</Code> and <Code>Layout.RightMini</Code>. These
        must be used alongside the <Code>slot-{`<part>`}</Code> properties to
        create the application's layout. The main section doesn't required a
        slot to be used.
      </p>

      <Preview>
        <br />
        <div class="d-f dx-ce">
          <UI.Card
            height="200px"
            width="70%"
            class="br-4 bd-a"
            theme-color="light"
            slot-header={({ Slot }) => (
              <Slot class="bd-b">
                <span></span>
                Header
                <span></span>
              </Slot>
            )}
            slot-left={({ Slot }) => (
              <Slot width="80px" class="bd-r d-f dx-ce dy-ce">
                <div> Left </div>
              </Slot>
            )}
            slot-right={({ Slot }) => (
              <Slot width="80px" class="bd-l d-f dx-ce dy-ce">
                <div> Right</div>
              </Slot>
            )}
            slot-main={({ Slot }) => <Slot class="d-f dx-ce dy-ce">Main</Slot>}
            slot-footer={({ Slot }) => (
              <Slot class="bd-t">
                <span></span>
                Footer
                <span></span>
              </Slot>
            )}
          ></UI.Card>
        </div>
      </Preview>

      <CodeExample sub="simple">{`
<Layout.App>
  <Layout.Main theme-color="white">
    Main
  </Layout.Main>
</Layout.App>
      `}</CodeExample>

      <CodeExample sub="slots">{`
<Layout.App
  theme-color="danger"
  clip-right
  clip-left
  breakpoints={["xs", "sm", "md", "lg"]}
  space-x={xtyle.device.mobile ? 1 : 3}
  space-y={xtyle.device.mobile ? 1 : 3}
  slot-header={
    <Layout.Header
      theme-color="white"
      elevation="8"
    >
      <span></span>
      Header
      <span></span>
    </Layout.Header>
  }
  slot-footer={
    <Layout.Footer
      theme-color="white"
      elevation="8"
    >
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
    <Layout.Right
      theme-color="white"
      elevation="8"
      clip-top
      clip-bottom
    >
      Right
    </Layout.Right>
  }
  slot-left-mini={
    <Layout.LeftMini
      theme-color="white"
      elevation="8"
      clip-top
      clip-bottom
    >
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
>
  <Layout.Main theme-color="white">
    Main
  </Layout.Main>
</Layout.App>
      `}</CodeExample>

      <CodeProps sub="" args={PROPS.layout.props} />
      <CodeProps sub="slots" args={PROPS.layout.slots} />
    </x-slot>
  );
}
