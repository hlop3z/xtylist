import viteLogo from "/vite.svg";

import { Docs } from "../components";

xtyle.view("/", Docs);
xtyle.view("/components/{section}", Docs);
xtyle.view("/directives/{section}", Docs);
xtyle.view("/actions/{section}", Docs);

export default function Application() {
  return <xtyle.router.views />;
}
