// const $NAME = "xtylist__Responsive";

// import "./style.scss";

const MobileBreakPoints = ["xs", "sm", "md", "lg"];

export default function Responsive(props) {
  const isMobile = xtyle.device.is(...(props.breakpoints || MobileBreakPoints));
  return isMobile ? props.mobile : props.desktop;
}
