import { MainMascot } from "../widgets/main-mascot/ui";
import useTheme from "../shared/hooks/use-theme";
import { MainControls } from "../widgets/main-controls/ui";
import BasePage from "../shared/ui/base-page";
import { Header } from "../shared/ui";

const Main = () => {
  const { theme, setTheme } = useTheme();

  return (
    <BasePage>
      <Header />
      <MainMascot
        className={
          "top-[30px] max-height-850:top-[-10px] max-height-890:top-[100px]"
        }
      />
      <MainControls />
    </BasePage>
  );
};

export default Main;
