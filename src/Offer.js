import React from "react";
import { Button } from "reactstrap";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offer_heading">
          <h1>
            A big <span> offer </span> for this summer
          </h1>
          <p className="para_offer">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="offer_btn">
          <Button outline color="danger">
            join us
          </Button>
        </div>
      </div>
    </>
  );
};
export default Offer;
