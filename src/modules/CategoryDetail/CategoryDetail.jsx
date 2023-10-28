import React from "react";
import ExploreCategory from "./ExploreCatergory";
import SliderCategory from "./SliderCatergory";
import BannerCategory from "./BannerCatergory";
import RelatedService from "./RelatedService";

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
