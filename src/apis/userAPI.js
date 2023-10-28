import instance from "./instance"

// Authentication
export const postLogIn = async (values) => {
  const { data } = await instance.post("/auth/signin", values);
  return data;
};

export const postRegister = async (values) => {
  const { data } = await instance.post("/auth/signup", values);
  return data;
};

// API user Action
export const getUser = async (userId) => {
  const { data } = await instance.get(`/users/${userId}`);
  return data;
};

export const putUsername = async (userId, user, name) => {
  const payload = { ...user, name };

  const { data } = await instance.put(`/users/${userId}`, payload);
  return data;
};

export const putSkill = async (userId, user, skill) => {
  const payload = { ...user, skill };

  const { data } = await instance.put(`/users/${userId}`, payload);
  return data;
};

export const putCertification = async (userId, user, cert) => {
  const payload = { ...user, cert};

  const { data } = await instance.put(`/users/${userId}`, payload);
  return data;
};

export const postAvatar = async (avatar) => {
  const formData = new FormData();
  formData.append("formFile", avatar);

  const response = await instance.post("/users/upload-avatar", formData);
  return response?.data;
};
