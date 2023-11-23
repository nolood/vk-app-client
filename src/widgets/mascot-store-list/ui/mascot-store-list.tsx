import Balance from "../../../shared/ui/balance";

const MascotStoreList = () => {
  return (
    <div className="h-[50%] bg-elDarkBg w-full px-[20px]">
      <div className="w-full flex justify-end items-center py-[10px]">
        <Balance variant={"light"} />
      </div>
    </div>
  );
};

export default MascotStoreList;
