import { MainEvaluationForm } from "../../../features/main-evaluation/ui";
import { MainButtons } from "../../../features/navbar/ui";

const MainControls = () => {
  return (
    <div className="w-full flex items-center justify-center bg-bg py-[30px] rounded-t-[30px] mt-auto z-[1]">
      <div className="w-10/12">
        <MainEvaluationForm />
        <MainButtons />
      </div>
    </div>
  );
};

export default MainControls;
