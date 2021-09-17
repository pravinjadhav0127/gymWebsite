import React from "react";
import Features from "./Features";
import Sdata from "./Sdata";
import photos from "./img/img2.jpg";

const FeaturesNav = () => {
  return (
    <>
      <div className="featuresNav">
        <h2>Features</h2>
        {/* <div className="feat_container">
          <Features />
        </div> */}
      </div>
      {Sdata.map((val, key) => {
        return <Features imgsrc={val.imgsrc} text={val.text} />;
      })}
      <div className="offer_img">
        <img src={photos} />
      </div>
    </>
  );
};
export default FeaturesNav;
