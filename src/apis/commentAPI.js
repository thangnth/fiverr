import instance from "./instance";

export const getCommentByWorkId = async (MaCongViec) => {
  const { data } = await instance.get(
    `/binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`
  );
  return data;
};

export const postComment = async (payload) => {
  const { data } = await instance.post(`/binh-luan`, payload);
  return data;
};
