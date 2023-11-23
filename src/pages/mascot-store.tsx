import BasePage from "../shared/ui/base-page";
import React from "react";
import { MainMascot } from "../widgets/main-mascot/ui";
import Mascot from "../features/mascot/ui/mascot";
import MascotStoreList from "../widgets/mascot-store-list/ui/mascot-store-list";

const MascotStore = () => {
  return (
    <BasePage className={"bg-sky px-[0]"}>
      <div className="flex-1 relative">
        <Mascot
          className={
            "flex-1 absolute bottom-[-50px] -translate-x-1/2 w-[400px]"
          }
        />
      </div>
      <MascotStoreList />
    </BasePage>
  );
};

export default MascotStore;
