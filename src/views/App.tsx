export default function Application() {
  return <xtyle.router.views />;
}

xtyle.theme.set({
  theme: {
    // Core
    none: "transparent", // None
    white: "white", // White
    black: "black", // Black
    light: "#fff", // Light
    dark: "#424242", // Dark

    // Main
    context: "#616161", // Context

    // Util
    success: "#4CAF50",
    danger: "#F44336",
    warning: "#ff9800",
    info: "#2196F3",

    // Theme
    primary: "#ba68c8",
    secondary: "#c2185b",
  },
  dark: {
    // Main
    context: "#a5a5a5", // Context

    // Util
    success: "#0f5132",
    danger: "#B71C1C",
    warning: "#ff9800",
    info: "#2196F3",

    // Theme
    primary: "#ba68c8",
    secondary: "#c2185b",
  },
});
