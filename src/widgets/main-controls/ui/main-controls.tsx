import { MainEvaluationForm } from "../../../features/main-evaluation/ui";
import { MainButtons } from "../../../features/navbar/ui";
import Mascot from "../../../features/mascot/ui/mascot";

const MainControls = () => {
  return (
    <div className="w-full mt-auto z-[2] relative">
      <Mascot className="absolute top-[-240px]" />
      <div className="w-full flex items-center justify-center bg-bg py-[30px] rounded-t-[30px] z-[1]">
        <div className="w-10/12">
          <MainEvaluationForm />
          <MainButtons />
        </div>
      </div>
    </div>
  );
};

export default MainControls;
