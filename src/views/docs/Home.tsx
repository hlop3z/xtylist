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
} from "./utils";

const LIBRARIES = [
  { text: "Xtyle (Preact)", link: "https://hlop3z.github.io/xtyle/" },
  { text: "Xtyle (CSS)", link: "https://hlop3z.github.io/xtyle-css/" },
  { text: "Animate.CSS", link: "https://animate.style/" },
];

export default function Home() {
  return (
    <x-slot>
      <h1 class="ta-c">Welcome to Xtylist</h1>
      <p>
        This library is a comprehensive solution designed to seamlessly
        integrate multiple <strong>Xtyle</strong> libraries,{" "}
        <strong>CSS utils</strong>, and <strong>Preact tools</strong> into a
        unified <strong>UI Kit</strong>. It streamlines and enhances your
        front-end development process.
        <br />
        <br />
        <h2 class="td mb-2">Libraries:</h2>
        <x-slot
          x-for={(item) => (
            <a href={item.link} class="ts-3 td-b d-b mb-2" target="_blank">
              {item.text}
            </a>
          )}
          x-in={LIBRARIES}
        ></x-slot>
        <br />
        <br />
        <CodeExample sub="HTML">{`
<!-- Xtyle -->
<script src="https://unpkg.com/xtyle@latest" type="text/javascript"></script>
        
<!-- Xtylist -->
<script src="https://unpkg.com/xtylist@latest" type="text/javascript"></script>
        `}</CodeExample>
        <br />
        <br />
        <h2 class="td mb-2">Global Store:</h2>
        <p>Global Preact-Signals Variables</p>
        <h3 class="mt-6">darkMode:</h3>:
        <div>
          <Code>{`xtyle.store.darkMode.value`}</Code>
        </div>
        <h3 class="mt-3">isAuthenticated:</h3>:
        <div>
          <Code>{`xtyle.store.isAuthenticated.value`}</Code>
        </div>
      </p>
    </x-slot>
  );
}
