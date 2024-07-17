const $NAME = "xtylist__Grid";

import "./style.scss";

export default function Grid(props) {
  return props.row ? <Row {...props} /> : <Col {...props} />;
}

function Row(props) {
  const { gapY, gapX } = xtyle.util.props(props);
  const cssList: any = ["row"];
  if (gapY) {
    cssList.push("gy-" + gapY);
  }
  if (gapX) {
    cssList.push("gx-" + gapX);
  }
  return (
    <div x-html {...props} class={[$NAME, ...cssList, props.class]}>
      {props.children}
    </div>
  );
}

function Col(props) {
  let { sm, md, lg, xl, cols } = props;

  // Set default values if not provided
  cols = cols || 12;
  sm = sm || cols;
  md = md || sm;
  lg = lg || md;
  xl = xl || lg;

  const cssCol = `col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm}`;
  const cssList: any = ["col", cssCol];
  return (
    <div x-html {...props} class={[$NAME, ...cssList, props.class]}>
      {props.children}
    </div>
  );
}
