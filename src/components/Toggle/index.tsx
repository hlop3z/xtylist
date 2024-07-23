const $NAME = "xtylist__Toggle";

import "./style.scss";

const { useSignal } = preact;

function Toggle(props) {
  let { color } = props;
  const {
    size,
    dark,
    variant,
    active,
    fill,
    onInput,
    disabled,
    value,
    onClick,
  } = xtyle.util.props(props);

  let defaultActive = false;
  if (![undefined, null].includes(active)) {
    defaultActive = active;
  }

  const isRadio = variant === "radio" ? true : false;
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
    <label
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
      on-change={() => {
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
      <input type="checkbox" class="toggle" checked={isActive.value} />
      <span
        x-html
        theme-text={theme.text}
        class={["checkmark", { active: isActive.value }]}
      >
        {isRadio ? "•" : "✓"}
      </span>
    </label>
  );
}

function Switch(props) {
  let { color } = props;
  const { size, dark, active, onInput, disabled, value, onClick } =
    xtyle.util.props(props);

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
    theme.switch = isActive.value ? color : "dark";
  } else {
    theme.switch = isActive.value ? color : null;
  }

  return (
    <div
      x-html
      {...props}
      class={[
        $NAME + "Switch",
        props.class,
        {
          active: isActive.value,
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
      <div class={["switch-box"]}>
        <div x-html class="box-fill" theme-color={theme.switch}></div>
        <div
          x-html
          class={[
            "switch",
            { "sl-6": !isActive.value, "sr-6": isActive.value },
          ]}
          theme-color={theme.switch}
        ></div>
        <input type="checkbox" class="checkbox" checked={isActive.value} />
      </div>
    </div>
  );
}

function ToggleSwitch(props) {
  if (props.variant === "switch") {
    return <Switch {...props} />;
  } else {
    return <Toggle {...props} />;
  }
}

export default ToggleSwitch;
