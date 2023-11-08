import { useStore } from "effector-react";
import { $user } from "../../entities/user/model";

const Avatar = ({
  image,
  onClick,
  className,
}: {
  image?: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div onClick={onClick} className={className}>
      {image && (
        <img src={image} className="w-[56px] h-[56px] rounded-full" alt="" />
      )}
    </div>
  );
};

export default Avatar;
