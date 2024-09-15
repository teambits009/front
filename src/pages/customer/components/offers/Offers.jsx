import React from "react";
import Header from "../../../Vendors/components/common/Header";
import santa from '../../assets/santa2.jpg'

const Offers = () => {
  return (
    <div>
      <Header title={"My Offers"} category={"Offers"} />
      <div className="grid gap-2.5 shadow-custom p-5 rounded-xl">
        <div className="flex gap-5">
          <div >
            <img className="w-[150px] h-[150px] border" src={santa} alt='Santa' />
          </div>
          <div className="grid">
            <p className="font-semibold text-[20px]">
              10.00 % OFF <span>Christmas</span>
            </p>
            <p className="opacity-75 text-[14px]">Min Order : C$127.77</p>
            <p>Expires On: 12/04/2082</p>
          </div>
        </div>
        <button className="hover:border-[black] border hover:opacity-100 opacity-75 hover:border-dashed rounded-[100vw] w-max px-5 py-[2px]">
          Christmas
        </button>
      </div>
    </div>
  );
};

export default Offers;
