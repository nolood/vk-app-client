import BasePage from "../shared/ui/base-page";
import { MainMascot } from "../widgets/main-mascot/ui";
import { Button, Header } from "../shared/ui";
import router from "../shared/router/router";
import {
  MAIN_ROUTE,
  MY_EVALUATIONS_ROUTE,
  PASSED_EVALUATIONS_ROUTE,
} from "../shared/router/paths";

const Profile = () => {
  return (
    <BasePage>
      <Header />
      <MainMascot className={"top-[210px]"} />
      <div className="w-full flex items-center justify-center bg-bg py-[30px] rounded-t-[30px] mt-auto z-[1]">
        <div className="w-10/12 flex flex-col gap-[20px]">
          <Button onClick={() => router.navigate(MY_EVALUATIONS_ROUTE)}>
            Мои оценивания
          </Button>
          <Button onClick={() => router.navigate(PASSED_EVALUATIONS_ROUTE)}>
            Пройденные оценивания
          </Button>
          <Button>Друзья</Button>
          <Button onClick={() => router.navigate(MAIN_ROUTE)}>
            Главное меню
          </Button>
        </div>
      </div>
    </BasePage>
  );
};

export default Profile;
