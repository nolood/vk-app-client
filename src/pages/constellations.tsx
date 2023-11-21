import BasePage from "../shared/ui/base-page";
import { MainMascot } from "../widgets/main-mascot/ui";
import ConstellationsControls from "../widgets/constellation-controls/ui/constellations-controls";
import { BackButton } from "../shared/ui";

const Constellations = () => {
  return (
    <BasePage>
      <div className="w-full absolute top-0 left-[20px] z-40">
        <BackButton />
      </div>
      <MainMascot className={"hidden"} />
      <ConstellationsControls />
    </BasePage>
  );
};

export default Constellations;
