const $NAME = "xtylist__Card";

import "./style.scss";
import Props from "./props";

export default function Card(props: Props) {
  const { height, width } = props;
  const { Header, Main, Footer, Left, Right } = xtyle.slotProps(props, [
    "header",
    "main",
    "footer",
    "left",
    "right",
  ]);
  const children: any = [];
  const style: any = {};
  const childrenMain: any = [];

  if (!props.children) {
    // Header
    if (props["slot-header"]) {
      children.push(Header(CardHeader));
    }

    // Main
    if (props["slot-left"]) {
      childrenMain.push(Left(CardLeft));
    }
    if (props["slot-main"]) {
      childrenMain.push(Main(CardMain));
    }
    if (props["slot-right"]) {
      childrenMain.push(Right(CardRight));
    }

    // Main
    if (childrenMain.length > 0) {
      children.push(<div class="card-body">{childrenMain}</div>);
    }

    // Footer
    if (props["slot-footer"]) {
      children.push(Footer(CardFooter));
    }
  }

  if (height) {
    style.height = height;
  }
  if (width) {
    style.width = width;
  }

  return (
    <div
      x-html
      {...props}
      class={[$NAME, props.class]}
      style={[style, props.style]}
    >
      {props.children ? props.children : children}
    </div>
  );
}

function getTheme(props) {
  const config = {};
  if (props.themeColor) {
    config["theme-color"] = props.themeColor;
  }
  if (props.themeBorder) {
    config["theme-border"] = props.themeBorder;
  }
  if (props.themeText) {
    config["theme-text"] = props.themeText;
  }
  return config;
}

const CardHeader = xtyle.slot({}, (props) => (
  <div
    x-html
    {...props}
    {...getTheme(props)}
    class={[props.class, "card-header"]}
    style={[{ height: props.height }, props.style]}
  >
    {props.children}
  </div>
));

const CardFooter = xtyle.slot({}, (props) => (
  <div
    x-html
    {...props}
    {...getTheme(props)}
    class={[props.class, "card-footer"]}
    style={[{ height: props.height }, props.style]}
  >
    {props.children}
  </div>
));

const CardLeft = xtyle.slot({}, (props) => (
  <div
    x-html
    {...props}
    {...getTheme(props)}
    class={[props.class, "card-left"]}
    style={[{ width: props.width }, props.style]}
  >
    {props.children}
  </div>
));

const CardRight = xtyle.slot({}, (props) => (
  <div
    x-html
    {...props}
    {...getTheme(props)}
    class={[props.class, "card-right"]}
    style={[{ width: props.width }, props.style]}
  >
    {props.children}
  </div>
));

const CardMain = xtyle.slot({}, (props) => (
  <div
    x-html
    {...props}
    {...getTheme(props)}
    class={[props.class, "card-main"]}
  >
    {props.children}
  </div>
));
