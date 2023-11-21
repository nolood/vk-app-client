import Stars from "../../../shared/ui/stars";
import Mascot from "../../../features/mascot/ui/mascot";
import clsx from "clsx";

const MainMascot = ({ className }: { className?: string }) => {
  return (
    <div className="bg-sky h-screen w-full absolute z-[0]">
      <Stars
        variant={true}
        className={"absolute left-[-100px] top-[-200px] w-[600px]"}
      />
      <Stars
        variant={false}
        className={"absolute right-[-150px] top-[-50px] w-[600px]"}
      />
      <Mascot className={clsx("absolute top-[30px]", className)} />
    </div>
  );
};

export default MainMascot;
