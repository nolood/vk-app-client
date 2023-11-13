import { BackButton, ScrollPage } from "../shared/ui";
import { useEffect, useState } from "react";
import { fetchPassedCriteria } from "../features/passed-criterion-item/lib/fetch-passed-criteria";
import { useParams } from "react-router-dom";
import PassedCriterionItem from "../features/passed-criterion-item/ui/passed-criterion-item";
import { PassedCriterionType } from "../features/passed-criterion-item/model/passed-criterion-type";

const PassedCriteriaByEvaluation = () => {
  const params = useParams();
  const [list, setList] = useState<PassedCriterionType[]>([]);

  useEffect(() => {
    fetchPassedCriteria(params?.id).then((res) => setList(res));
  }, []);

  return (
    <ScrollPage className="bg-elDarkBg">
      <div className="w-full">
        <BackButton />
      </div>
      <ul className="w-full flex flex-col gap-[20px]">
        {list.map((item) => (
          <PassedCriterionItem item={item} key={item.id} />
        ))}
      </ul>
    </ScrollPage>
  );
};

export default PassedCriteriaByEvaluation;
