/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    screens: {
      "min-445": { min: "400px" },
      "max-510": { max: "510px" },
      "max-445": { max: "445px" },
      "max-400": { max: "400px" },
      "max-height-850": { raw: "(max-height: 800px)" },
      "max-height-890": { raw: "(max-height: 890px)" },
    },
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
      error: "var(--error)",
      star: "#FCC00D",
      disabled: "#C4C4C4",
    },
    extend: {
      backgroundImage: {
        mark: "url('../../shared/ui/icons/mark.svg')",
      },
    },
  },
  plugins: [],
};
