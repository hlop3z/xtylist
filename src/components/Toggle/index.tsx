const $NAME = "xtylist__Toggle";

import "./style.scss";
import Props from "./props";

const { useSignal } = preact;

export default function Toggle(props: Props) {
  let { color } = props;
  const { size, dark, radio, active, fill, onInput, disabled, value, onClick } =
    xtyle.util.props(props);
  const isRadio = radio ? true : false;
  let defaultActive = false;
  if (![undefined, null].includes(active)) {
    defaultActive = active;
  }
  const isActive = value ? value : useSignal(defaultActive);
  if (!color && !dark) {
    color = "dark";
  } else if (!color && dark) {
    color = "light";
  }

  const theme: any = {};
  if (dark) {
    theme.color = isActive.value ? color : "dark";
    theme.text = isActive.value ? "black" : null;
  } else if (fill) {
    theme.color = isActive.value ? color : "light";
    theme.text = isActive.value ? "white" : null;
  } else {
    theme.text = isActive.value ? color : null;
  }

  return (
    <div
      x-html
      {...props}
      theme-color={theme.color}
      theme-text={theme.text}
      theme-border={isActive.value ? color : null}
      class={[
        $NAME,
        props.class,
        {
          "br-100p": isRadio,
          radio: isRadio,
          "is-small": size === "sm",
          "is-large": size === "lg",
        },
      ]}
      on-click={() => {
        if (onClick) {
          onClick();
        } else {
          if (!disabled) {
            const nextValue = !isActive.value;
            isActive.value = nextValue;
            if (onInput) onInput(nextValue);
          }
        }
      }}
    >
      <span
        x-html
        theme-text={theme.text}
        class={["checkmark", { active: isActive.value }]}
      >
        {radio ? "•" : "✓"}
      </span>
    </div>
  );
}
