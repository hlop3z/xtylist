/* Library */
import Actions from "./app/actions.ts";
import Directives from "./app/directives.ts";
import Store from "./app/store.ts";

/* Components */
export * from "./components/index.ts";

/* Style-Sheets */
import "./style/app.scss";

/* Plugin Install */
// @ts-ignore
export function install(self, option) {
  // Segments
  return {
    actions: Actions,
    directives: Directives,
    store: Store,
  };
}
