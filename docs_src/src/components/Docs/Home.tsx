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
        <strong>CSS utils</strong>, and <strong>Preact tools</strong>. It
        streamlines and enhances your front-end development process by providing
        a cohesive set of components and styles that work together harmoniously.
        With support for <strong>Animate.css</strong>, it brings engaging
        animations to your UI elements, making your applications more dynamic
        and interactive. Whether you're building a simple website or a complex
        application, this library simplifies the development workflow, improves
        maintainability, and ensures a consistent and professional look and feel
        across your projects. Its modular architecture allows for easy
        customization and extension, enabling you to adapt it to your specific
        needs with minimal effort.
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
        <CodeExample sub="HTML">{`
<!-- Xtyle -->
<script src="https://unpkg.com/xtyle@latest" type="text/javascript"></script>

<!-- Xtylist (JS) -->
<script src="https://unpkg.com/xtylist@latest" type="text/javascript"></script>

<!-- Xtylist (CSS) -->
<link href="https://unpkg.com/xtylist@latest/dist/style.css" rel="stylesheet" />
        `}</CodeExample>
        <br />
        <CodeExample sub="Install">{`
xtyle.use(xtylist);
        `}</CodeExample>
        <br />
        <br />
        <h2 class="td mb-2">Global Store:</h2>
        <p>Global Preact-Signals Variables</p>
        <h3 class="mt-6">darkMode:</h3>
        <div>
          <Code>{`xtyle.store.darkMode.value`}</Code>
        </div>
        <h3 class="mt-3">isDebug:</h3>
        <div>
          <Code>{`xtyle.store.isDebug.value`}</Code>
        </div>
        <h3 class="mt-3">isAuthenticated:</h3>
        <div>
          <Code>{`xtyle.store.isAuthenticated.value`}</Code>
        </div>
      </p>
      <br />
      <br />
    </x-slot>
  );
}
