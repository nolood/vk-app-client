import { MainEvaluationForm } from "../../../features/main-evaluation/ui";
import { MainButtons } from "../../../features/navbar/ui";

const MainControls = () => {
  return (
    <div
      className={
        "bg-neutral-400 mt-[-70px] rounded-t-[40px] px-[100px] py-[20px]"
      }
    >
      <MainEvaluationForm />
      <MainButtons />
    </div>
  );
};

export default MainControls;
