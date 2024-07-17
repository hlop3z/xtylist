/**
 * Animate.css
 * https://animate.style/
 */

const startTimeDelay: number = 2000; // 3300
const fxCSS = `
.cssfx__init { visibility: hidden;  }
.cssfx__on { visibility: visible !important; pointer-events: auto; }
.cssfx__off { pointer-events: none; }
`;

xtyle.util.inject(fxCSS, "xtyle-css-fx-animations");

/* Class Admin */
function classAdmin(props, otherClasses) {
  if (props.class) {
    props.class = [props.class, ...otherClasses];
  } else {
    props.class = otherClasses;
  }
}

export default {
  shape(self, props) {
    /* shapes: 1-to-14 */
    const { shape } = self.directives.custom;
    const allShapes = [
      [],
      ["br-bl"],
      ["br-tl"],
      ["br-br"],
      ["br-tr"],
      ["br-bl", "br-tl"],
      ["br-bl", "br-br"],
      ["br-bl", "br-tr"],
      ["br-tl", "br-br"],
      ["br-tl", "br-tr"],
      ["br-br", "br-tr"],
      ["br-bl", "br-tl", "br-br"],
      ["br-bl", "br-tl", "br-tr"],
      ["br-bl", "br-br", "br-tr"],
      ["br-tl", "br-br", "br-tr"],
      ["br-bl", "br-tl", "br-br", "br-tr"],
    ];
    if (shape && allShapes[shape]) {
      classAdmin(props, allShapes[shape]);
    }
  },
  effect(self, props) {
    /* const { on, off, delay, speed, repeat } = props; */
    let { effect } = self.directives.custom;
    const { css } = self.directives;

    effect = effect || {};

    if (Object.keys(effect).length > 0) {
      const classList: any = ["animate__animated", "cssfx__init"];

      if (!css.on) css.on = [];
      if (!css.off) css.off = [];

      if (effect.on) {
        css.on.push("cssfx__on");
        css.on.push("animate__" + effect.on.replace(/^animate__/, ""));
      }
      if (effect.off) {
        css.off.push("cssfx__off");
        css.off.push("animate__" + effect.off.replace(/^animate__/, ""));
      }
      if (effect.delay) {
        classList.push("animate__delay-" + effect.delay + "s");
      }
      if (effect.speed) {
        classList.push("animate__" + effect.speed);
      }
      if (effect.repeat) {
        let repeat = "";
        if ([1, 2, 3, "1", "2", "3"].includes(effect.repeat)) {
          repeat = "-" + effect.repeat;
        } else {
          repeat = effect.repeat;
        }
        classList.push("animate__repeat" + repeat);
      }
      // Css Class
      classAdmin(props, classList);

      // Effect Hidden on <INIT>
      preact.useEffect(() => {
        setTimeout(() => {
          self.ref.remove("cssfx__init");
        }, effect.startDelay | startTimeDelay);
      }, []);
    }
  },
};
