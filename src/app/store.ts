const { signal } = preact;

const Store = {
  darkMode: signal(false),
  isAuthenticated: signal(false),
};

const setDarkMode = (state) => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    state.value = true;
  }
};

setDarkMode(Store.darkMode);

export default Store;
