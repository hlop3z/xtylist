import Layout from "../components/Layout";
import Dialog from "../components/Dialog";

export default {
  layout: {
    open: (name: string) => Layout.toggle(name, true),
    close: (name: string) => Layout.toggle(name, false),
    toggle: (name: string) => Layout.toggle(name),
    keys: () => ["left", "right", "left-mini", "right-mini", "overlay"],
  },
  dialog: {
    open: (args) => Dialog.open(args.name, args.overlay),
    close: (args) => Dialog.close(args.name, args.overlay),
    keys: () => Dialog.keys(),
  },
};
