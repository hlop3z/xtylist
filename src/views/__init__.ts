import Layout from "./Layout";
import Popover from "./Popovers";
import Grid from "./Grid";
import Home from "./Home";

// xtyle.view("/", Home);
xtyle.view("/components/{section}", Home);
xtyle.view("/directives/{section}", Home);
xtyle.view("/actions/{section}", Home);

// xtyle.view("/", Layout);
xtyle.view("/", Popover);
// xtyle.view("/", Grid);
