import React from "react";
import Header from "../../components/Header/Header";
import { Navigate, Outlet, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

function UserProfileLayout() {
  const { user } = useSelector((state) => state.user);
  const { name } = useParams();

  if (!user) return <Navigate to="/" />;
  if (user.user.name !== name) return <PageNotFound />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserProfileLayout;
