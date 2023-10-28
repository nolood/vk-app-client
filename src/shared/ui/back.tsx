import { setActivePanel } from "../../entities/panel/lib/panel-events";

const Back = ({ to }: { to: string }) => {
  return (
    <button
      className={
        "bg-transparent text-[20px] py-[10px] border-none outline-none"
      }
      onClick={() => setActivePanel(to)}
    >
      Назад
    </button>
  );
};

export default Back;
