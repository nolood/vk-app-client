import { useEffect, useState } from "react";
import { IConstellation } from "../../constellation-controls/lib/get-constellation";
import { fetchConstellationsByUser } from "../lib/fetch-constellations";
import ConstellationItem from "../../../features/constellation-item/ui/constellation-item";

const ConstellationsList = () => {
  const [list, setList] = useState<IConstellation[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchConstellationsByUser();
      setList(data);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 w-full gap-[20px]">
      {list.map((item) => (
        <ConstellationItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ConstellationsList;
