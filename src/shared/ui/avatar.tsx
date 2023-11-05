import { useStore } from "effector-react";
import { $user } from "../../entities/user/model";

const Avatar = ({ image }: { image?: string }) => {
  return (
    <div>
      {image && (
        <img src={image} className="w-[56px] h-[56px] rounded-full" alt="" />
      )}
    </div>
  );
};

export default Avatar;
