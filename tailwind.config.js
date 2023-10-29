/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    fontSize: {
      default: "20px",
    },
    colors: {
      bg: "var(--bg)",
      sky: "var(--sky)",
      elLightBg: "var(--el-light-bg)",
      elDarkBg: "var(--el-dark-bg)",
      elLightBorder: "var(--el-light-border)",
      text: "var(--text)",
      bgSecondary: "var(--bg-secondary)",
      bgInputHover: "var(--bg-input-hover)",
      inputActiveBorder: "var(--input-active-border)",
      btnDarkHover: "var(--btn-dark-hover)",
      btnDarkActive: "var(--btn-dark-active)",
      btnLightHover: "var(--btn-light-hover)",
      btnLightActive: "var(--btn-light-active)",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        mark: "url('../../shared/ui/icons/mark.svg')",
      },
    },
  },
  plugins: [],
};
