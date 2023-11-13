import { ReactElement, useEffect, useState } from "react";
import { Pagination } from "../../../shared/types/pagination";

type UniversalScrollFetchingProps<T> = {
  Item: ({ item }: { item: T }) => ReactElement;
  fetchFn: ({ page, limit }: Pagination) => Promise<T[]>;
  className?: string;
};
const UniversalScrollFetching = <T,>({
  Item,
  fetchFn,
  className,
}: UniversalScrollFetchingProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [list, setList] = useState<T[]>([]);
  const [isMore, setIsMore] = useState<boolean>(true);

  const reset = () => {
    setList([]);
    setIsMore(true);
  };

  const fetchItems = async () => {
    const data = await fetchFn({ page: currentPage, limit: 10 });
    setList((prev) => [...prev, ...data]);
    setIsMore(() => !!data.length);
  };

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (fetching && isMore) {
      fetchItems();
      setCurrentPage((prev) => prev + 1);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
      reset();
    };
  }, []);

  return (
    <ul className={className}>
      {list.map((item, index) => (
        <Item item={item} key={index + 1} />
      ))}
    </ul>
  );
};

export default UniversalScrollFetching;
