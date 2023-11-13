import { Pagination } from "../../../shared/types/pagination";
import { api } from "../../../shared/api";
import { IUser } from "../../../entities/user/model/user";

export type CommentType = {
  id: bigint;
  score: number;
  title: string;
  criterionId: bigint;
  user: IUser;
  updatedAt: string;
  createdAt: string;
};

export const fetchCommentsByCriterion = async (
  { page, limit }: Pagination,
  id?: string,
): Promise<CommentType[]> => {
  const res = await api.get<CommentType[]>(
    `/comments/${id}?page=${page}&limit=${limit}`,
  );

  return res.data;
};
