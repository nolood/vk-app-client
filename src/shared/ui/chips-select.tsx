import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Item = { label: string; value: string };

interface ChipsSelectProps {
  placeholder?: string;
  options: Item[];
  className?: string;
  onDropDownVisibleChange?: (visible: boolean) => void;
  onSelectedChange?: (selected: Item[]) => void;
}

const ChipsSelect = ({
  placeholder,
  options,
  onDropDownVisibleChange,
  onSelectedChange,
}: ChipsSelectProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");

  const ref = useRef<HTMLDivElement | null>(null);

  const handleShowDropDown = useCallback(() => {
    setIsDropdownVisible(true);
    if (onDropDownVisibleChange) {
      onDropDownVisibleChange(true);
    }
  }, []);

  const handleSelect = (item: Item, isSelected: boolean) => {
    if (isSelected) {
      handleDelete(item);
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleDelete = useCallback((item: Item) => {
    setSelectedItems((prev) => prev.filter((i) => i.value !== item.value));
  }, []);

  useEffect(() => {
    if (onSelectedChange) {
      onSelectedChange(selectedItems);
    }
  }, [selectedItems]);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
        if (onDropDownVisibleChange) {
          onDropDownVisibleChange(false);
        }
      }
    };

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div ref={ref} onClick={handleShowDropDown} className={"h-auto relative"}>
      <label
        htmlFor={"select"}
        className={clsx(
          "w-full flex bg-elLightBg rounded-[20px] border-[2px] border-solid border-elLightBorder px-[20px] py-[10px] hover:bg-bgInputHover focus-within:bg-bgInputActive",
          isDropdownVisible && "rounded-b-[0px]",
        )}
      >
        <ul className="flex flex-wrap flex-1 gap-[10px]">
          {selectedItems.map((item) => (
            <li
              className="text-text text-[20px] bg-bg px-[10px] rounded-[10px] flex items-center gap-[5px]"
              key={item.value}
            >
              {item.label}
              <span
                className={"text-[12px] cursor-pointer"}
                onClick={() => handleDelete(item)}
              >
                &#10006;
              </span>
            </li>
          ))}
          <li className={"h-full flex-1 min-w-[100px]"}>
            <input
              id={"select"}
              type="text"
              className="w-full bg-transparent outline-none text-text text-[20px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </li>
        </ul>

        <p className="text-text text-[20px] absolute top-1/2 left-[20px] -translate-y-1/2 select-none cursor-text">
          {!selectedItems.length && !search && placeholder}
        </p>
      </label>
      {isDropdownVisible && (
        <ul
          className={
            "absolute bottom-[-98px] left-0 w-full h-[100px] bg-bgInputHover border-[2px] border-solid border-elLightBorder rounded-b-[20px] overflow-auto z-[10] pt-[10x]"
          }
        >
          {options.map((item) => (
            <Fragment key={item.value}>
              {item.label.includes(search) && (
                <li
                  className={clsx(
                    "w-full px-[20px] py-[5px] text-text text-[20px] hover:bg-elLightBorder cursor-pointer",
                    selectedItems.find((i) => i.value === item.value) &&
                      "bg-elDarkBg",
                  )}
                  key={item.value}
                  onClick={() =>
                    handleSelect(
                      item,
                      !!selectedItems.find((i) => i.value === item.value),
                    )
                  }
                >
                  {item.label}
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChipsSelect;
