import React from "react";
import ExploreCategory from "./ExploreCategory/ExploreCategory";
import SliderCategory from "./SliderCategory/SliderCategory";
import BannerCategory from "./BannerCategory/BannerCategory";
import RelatedService from "./RelatedService/RelatedService";

function CategoryDetail() {
  return (
    <div>
      <BannerCategory />
      <SliderCategory />
      <ExploreCategory />
      <RelatedService />
    </div>
  );
}

export default CategoryDetail;
