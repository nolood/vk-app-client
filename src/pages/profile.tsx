import BasePage from "../shared/ui/base-page";
import { MainMascot } from "../widgets/main-mascot/ui";
import { Button, Header } from "../shared/ui";
import router from "../shared/router/router";
import { MAIN_ROUTE, MY_EVALUATIONS_ROUTE } from "../app/paths";

const Profile = () => {
  return (
    <BasePage>
      <Header />
      <MainMascot />
      <div className="w-full flex items-center justify-center bg-bg py-[30px] rounded-t-[30px] mt-auto z-[1]">
        <div className="w-10/12 flex flex-col gap-[20px]">
          <Button onClick={() => router.navigate(MY_EVALUATIONS_ROUTE)}>
            Мои оценивания
          </Button>
          <Button>Пройденные оценивания</Button>
          <Button>Друзья</Button>
          <Button onClick={() => router.navigate(-1)}>Главное меню</Button>
        </div>
      </div>
    </BasePage>
  );
};

export default Profile;
