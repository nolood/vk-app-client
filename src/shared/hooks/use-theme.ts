import { useLayoutEffect, useState } from "react";

const UseTheme = () => {
  const [theme, setTheme] = useState<string>("dark");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return { theme, setTheme };
};

export default UseTheme;
