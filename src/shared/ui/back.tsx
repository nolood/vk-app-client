import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <button
      className={
        "bg-transparent text-[20px] py-[10px] border-none outline-none"
      }
      onClick={() => navigate(-1)}
    >
      Назад
    </button>
  );
};

export default Back;
