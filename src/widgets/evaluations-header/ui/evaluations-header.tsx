import { BackButton } from "../../../shared/ui";
import { CategoriesDropdown } from "../../../features/categories-dropdown/ui";

const EvaluationsHeader = () => {
  return (
    <div className="w-full flex justify-between items-center mb-[30px]">
      <BackButton />
      <CategoriesDropdown />
    </div>
  );
};

export default EvaluationsHeader;
