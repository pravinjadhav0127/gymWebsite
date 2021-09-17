import React from "react";

const Features = (props) => {
  return (
    <>
      <div className="feat">
        <div className="img1">
          <img src={props.imgsrc} />
        </div>
        <div className="text">
          <h2>{props.text}</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </>
  );
};
export default Features;
