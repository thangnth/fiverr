import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import UserProfileLayout from "./layouts/UserProfileLayout/UserProfileLayout";
import ServiceInfo from "./modules/ServiceInfo/ServiceInfo";

import Loading from "./components/Loading/Loading";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const Home = lazy(() => import("./modules/Home/Home"));
const Login = lazy(() => import("./modules/Auth/Login/Login"));
const Register = lazy(() => import("./modules/Auth/Register/Register"));
const UserProfile = lazy(() => import("./modules/UserProfile/UserProfile"));
const JobList = lazy(() => import("./modules/JobList/JobList"));
const CategoryDetail = lazy(() =>
  import("./modules/CategoryDetail/CategoryDetail")
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/jobList/:keyword" element={<JobList />} />
            <Route
              path="/:tenLoaiCongViec/:MaLoaiCongViec"
              element={<CategoryDetail />}
            />
            <Route
              path="/jobList/:keyword/:MaCongViec"
              element={<ServiceInfo />}
            />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/" element={<UserProfileLayout />}>
            <Route path="/users/:name" element={<UserProfile />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
