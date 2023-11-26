import { BackButton, ScrollPage } from "../shared/ui";
import ConstellationsList from "../widgets/constellations-list/ui/constellations-list";

const MyConstellations = () => {
  return (
    <ScrollPage>
      <div className={"flex w-full justify-start"}>
        <BackButton />
      </div>
      <ConstellationsList />
    </ScrollPage>
  );
};

export default MyConstellations;
