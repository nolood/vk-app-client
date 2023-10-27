const MainButtons = () => {
  return (
    <div className="flex flex-col">
      <div className={"grid grid-cols-2 gap-y-[10px] gap-x-[20px] my-[10px]"}>
        <button className={"h-[50px] rounded-[24px] bg-slate-600"}>
          Маскот
        </button>
        <button className={"h-[50px] rounded-[24px] bg-slate-600"}>
          Созвездия
        </button>
        <button className={"h-[50px] rounded-[24px] bg-slate-600"}>
          Пройденные оценивания
        </button>
        <button className={"h-[50px] rounded-[24px] bg-slate-600"}>
          Мои оценивания
        </button>
      </div>
      <button className={"h-[50px] rounded-[24px] bg-slate-600"}>Небо</button>
    </div>
  );
};

export default MainButtons;
