import { BackButton, Button, ScrollPage } from "../shared/ui";
import UniversalScrollFetching from "../widgets/universal-scroll-fetching/ui/universal-scroll-fetching";
import { useLocation, useParams } from "react-router-dom";
import {
  CommentType,
  fetchCommentsByCriterion,
} from "../features/coment-item/lib/fetch-comments-by-criterion";
import { Pagination } from "../shared/types/pagination";
import CommentItem from "../features/coment-item/ui/comment-item";
import router from "../shared/router/router";
import { MAIN_ROUTE } from "../shared/router/paths";

const CommentsFromCriterion = () => {
  const { state } = useLocation();
  const params = useParams();

  const fetchCommentsByCriterionWrapper = async ({
    page,
    limit,
  }: Pagination): Promise<CommentType[]> => {
    return await fetchCommentsByCriterion({ page, limit }, params.id);
  };

  return (
    <ScrollPage>
      <div className="flex w-full justify-start">
        <BackButton />
      </div>
      <h1 className="font-semibold text-text text-[20px] mb-[30px]">
        {state.title}
      </h1>
      <UniversalScrollFetching<CommentType>
        fetchFn={fetchCommentsByCriterionWrapper}
        Item={CommentItem}
        className={"w-full flex flex-col gap-[20px] mb-[30px]"}
      />
      <Button className="mt-[auto]" onClick={() => router.navigate(MAIN_ROUTE)}>
        Главное меню
      </Button>
    </ScrollPage>
  );
};

export default CommentsFromCriterion;
