import axios from "axios";

const instance = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjI4LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTA3ODQwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzA5MjI2MDAwfQ.GboZ7OZlrOvJ_T6lEZ9PfGJD8vygDn30BxaLgB43WbM",
  },
});

instance.interceptors.request.use((request) => {
  //Kiểm tra xem user đã đăng nhập chưa, nếu rồi thêm token của user vào header
  const user =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    request.headers.token = user.token;
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
  
   //Nếu lỗi 401 - token ko hợp lệ : sign out
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      window.location.href = "/login";
    }
  }
);

export default instance;
