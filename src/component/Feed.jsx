import React from "react";
import Banner from "../images/banner.png";
import Postwid from "./postwid";

function LatestScholarship() {
  return (
    <div>
      <div className="">
        <img
          className="w-full"
          src={Banner}
          alt="Banner of Scholarshipsadvice.com"
        />
      </div>
      <h3 className='text-center text-4xl p-14'>Latest Scholarships</h3>

      <div className="flex justify-around">
        <Postwid />
        <Postwid />
        <Postwid />
        <Postwid />
      </div>
    </div>
  );
}

export default LatestScholarship;
