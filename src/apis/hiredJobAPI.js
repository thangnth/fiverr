import instance from "./instance";

export const getHiredJobs = async () => {
  const { data } = await instance.get(
    "/thue-cong-viec/lay-danh-sach-da-thue"
  );
  return data;
};

export const getHiringdJob = async () => {
    const { data } = await instance.get("/thue-cong-viec");
    return data;
  };


export const postHiringJob = async (payload) => {
    const { data } = await instance.post("/thue-cong-viec", payload);
    return data;
  };


export const putHiringJob = async (jobId, values) => {
    const payload = { ...values };
    const { data } = await instance.put(`/thue-cong-viec/${jobId}`, payload);
    return data;
  };


export const deleteHiringJob = async (jobId) => {
  const { data } = await instance.delete(`/thue-cong-viec/${jobId}`);
  return data;
};





