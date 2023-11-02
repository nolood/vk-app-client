import { useEffect, useRef, useState } from "react";
import { FiltersIcon } from "../../../shared/ui/icons";
import {
  Category,
  fetchCategoriesFx,
} from "../../../entities/category/lib/categoryEffects";
import { useStore } from "effector-react";
import { $filters } from "../../../entities/filters/model/filters";
import {
  addFilter,
  deleteFilter,
} from "../../../entities/filters/lib/filters-events";
import clsx from "clsx";

const CategoriesDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const filters = useStore($filters);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleOpen = async () => {
    setIsDropdownVisible(true);
    if (!categories.length) {
      const categories = await fetchCategoriesFx();
      setCategories(categories);
    }
  };

  const handleAddFilter = (category: Category) => {
    if (!filters.find((f) => f === category.id)) {
      addFilter(category.id);
    } else {
      deleteFilter(category.id);
    }
  };

  useEffect(() => {
    const clickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <FiltersIcon onClick={handleOpen} />
      {isDropdownVisible && (
        <ul className="absolute top-[50px] right-0 bg-bgSecondary px-[10px] py-[20px] rounded-[20px] w-[300px] gap-[5px]">
          {categories.map((item) => (
            <li
              onClick={() => handleAddFilter(item)}
              className={clsx(
                "cursor-pointer px-[10px] py-[5px] w-full hover:bg-elLightBorder rounded-[10px] select-none bg-elLightBg",
                filters.find((f) => f === item.id) && "!bg-elDarkBg",
              )}
              key={item.id}
            >
              <p className="text-text text-[20px]">{item.value}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesDropdown;
