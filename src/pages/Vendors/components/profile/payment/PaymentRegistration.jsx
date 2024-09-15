import React from "react";
import Header from "../../common/Header";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const PaymentRegistration = () => {
  return (
    <div>
      <Header
        title={"Update Payment Information"}
        category={"Update Credentials"}
      />
      <div className="py-4">
        <div className="w-full">
          <div className="shadow-custom rounded-xl">
            <p className="font-semibold text-xl mb-4 p-5">
              Update Payment Information
            </p>
            <hr />
            <form className="grid md:grid-cols-2 gap-2.5 p-5">
              <div className="grid gap-2.5">
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Preferred Methods</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Preferred Methods"
                    required
                  />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Payout Schedule</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Payout Schedule" required />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Account HolderName</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Account HolderName"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2.5">
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Currency Options</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Currency Options" required />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Bank Account</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Bank Account" required />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Account Number</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Account Number" required />
                </div>
              </div>
              <button
                type="submit"
                className="border-2 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRegistration;
