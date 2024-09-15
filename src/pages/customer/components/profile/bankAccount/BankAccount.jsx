import React from "react";
import Header from "../../common/Header";
import { Alert, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import TextArea from "antd/es/input/TextArea";

export default function BankAccount() {
  return (
    <div className="mb-5">
      <Header title={"Bank Account"} category={"Bank account information"} />
      <form className="shadow-custom rounded-xl p-5 grid gap-5">
        <div className="sm:flex gap-5 justify-between">
          <div className="grid gap-2.5 w-[100%]">
            <div className="flex gap-[5px]">
              <label>Bank name</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>

            <Input placeholder="Bank name" type="text" required />
          </div>
          <div className="grid gap-2.5 w-[100%]">
          <div className="flex mt-2.5 sm:mt-0 gap-[5px]">
              <label>Account holder name</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>
            <Input placeholder="Account holder name" type="text" required />
          </div>
        </div>
        <div className="sm:flex gap-5 justify-between">
          <div className="grid gap-2.5 w-[100%]">
            <div className="flex gap-[5px]">
              <label>Account number</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>
            <Input placeholder="Account number" type="number" required />
          </div>
          <div className="grid gap-2.5 w-[100%]">
            <div className="flex mt-2.5 sm:mt-0 gap-[5px]">
              <label>IFSC/Swift code</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>
            <Input placeholder="IFSC/Swift code" required />
          </div>
        </div>
        <div className=" grid gap-2.5">
          <label>Bank Address</label>
          <TextArea placeholder="Enter bank address"/>
        </div>
        <div className="flex w-max">
          <Alert
            description="Your bank information is safe with us"
            type="info"
            showIcon
          />
        </div>
        <button type="submit" className="shadow-btn transition-all ease-in-out duration-500 w-max font-semibold px-5 py-[5px] bg-[#015FF1] rounded-lg text-white">
            Save Changes
          </button>
      </form>
    </div>
  );
}
