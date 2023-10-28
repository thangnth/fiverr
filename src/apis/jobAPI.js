import instance from "./instance"

export const getJobCategogy= async () => {
  const { data } = await instance.get(`/cong-viec/lay-menu-loai-cong-viec`);
  return data;
};

export const getPagination= async (currentPage, keyword) => {
  const { data } = await instance.get(`/cong-viec/phan-trang-tim-kiem`, {
    params: {
      pageIndex: currentPage,
      pageSize: 8,
      keyword: keyword,
    },
  });
  return data?.content;
};

export const getCATDetail = async (MaLoaiCongViec) => {
  const { data } = await instance.get(
    `/cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`
  );
  return data;
};

export const getJobByTypeDetail = async (MaChiTietLoai) => {
  const { data } = await instance.get(
    `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${MaChiTietLoai}`
  );
  return data;
};

export const getJobDetail = async (MaCongViec) => {
  const { data } = await instance.get(
    `/cong-viec/lay-cong-viec-chi-tiet/${MaCongViec}`
  );
  return data;
};
