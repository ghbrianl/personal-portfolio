import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-row mt-20 bg-amber-200 py-10">
        <div className="flex flex-col text-center w-1/2 leading-10 gap-y-10">
          <div className="font-serif font-bold text-4xl underline">
            Who Am I?
          </div>
          <div className="font-serif font-bold text-xl">My name is Brian</div>
          <div> I'm a freshman at Stuyvesant</div>
        </div>
        <img
          className="w-1/3"
          alt=""
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        ></img>
      </div>
    </div>
  );
};

export default Home;
