import Layout from "../components/Layout";
import { Control as Dialog } from "../components/Dialog";
import { Control as Popover } from "../components/Popover";

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
    toggle: (args) => Dialog.toggle(args.name, args.overlay),
    keys: () => Dialog.keys(),
    isActive: (name) => Dialog.isActive(name),
  },
  popover: {
    open: (name) => Popover.open(name),
    close: (name) => Popover.close(name),
    toggle: (name) => Popover.toggle(name),
    keys: () => Popover.keys(),
    isActive: (name) => Popover.isActive(name),
  },
};
