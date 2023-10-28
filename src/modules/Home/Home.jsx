import React from "react";
import Categories from "./Categories/Categories";
import SellingPoint from "./SellingPoint/SellingPoint";
import Testimonials from "./Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import TrustedBy from "./TrustedBy/TrustedBy";
import Services from "./Services/Services";

function Home() {
  return (
    <>
      <Banner />
      <TrustedBy />
      <Services />
      <SellingPoint />
      <Testimonials />
      <Categories />
    </>
  );
}

export default Home;
