import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Header from "../../common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { Divider, Input } from "antd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TextArea from "antd/es/input/TextArea";
import Avatar from "../../../../../Common/avatarEditor/Avatar";

const CheckBalance = () => {
  const [value, setValue] = useState();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleCountryChange = (val) => {
    setCountry(val);
  };

  const handleRegionChange = (val) => {
    setRegion(val);
  };


  return (
    <div className="">
      <Header title={"Account Settings"} category={"Profile Info"} />
      <div className="shadow-custom rounded-xl p-5">
        <div>
        <Avatar />
        </div>
        <form className="grid gap-5">
          <div className=" sm:flex gap-10">
            <div className="grid w-[100%] gap-2.5">
              <label>Username</label>
              <Input placeholder="username" disabled />
            </div>
            <div className="grid w-[100%] gap-2.5">
              <label>Email</label>
              <Input placeholder="username@gmail.com" disabled />
            </div>
          </div>
          <div className="sm:flex gap-10">
            <div className="grid w-[100%] gap-2.5">
              <div className="flex gap-[5px]">
                <label>New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input placeholder="New Email" type="email" required />
            </div>
            <div className="grid w-[100%] gap-2.5">
              <label>Date of birth</label>
              <Input placeholder="22nd February 1990" disabled />
            </div>
          </div>
          <div className="sm:flex gap-10">
            <div className="grid w-[100%] gap-2.5">
              <label>Phone</label>
              <PhoneInput
                international
                defaultCountry="KE"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className="outline-none border p-[5px] rounded-[5px]"
              />
            </div>
            <div className="grid w-[100%] gap-2.5">
              <div className="flex gap-[5px]">
                <label>Country</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <div>
                <CountryDropdown
                  classes="country"
                  value={country}
                  onChange={handleCountryChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex gap-10">
            <div className="grid w-[100%] gap-2.5">
              <div className="flex gap-[5px]">
                <label>State</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <RegionDropdown
                classes="county"
                country={country}
                value={region}
                onChange={handleRegionChange}
              />
            </div>
            <div className="grid w-[100%] gap-2.5">
              <label>City</label>
              <Input placeholder="Enter City" required />
            </div>
          </div>
          <div className="grid gap-2.5">
            <label>Company</label>
            <Input placeholder="Enter company" />
          </div>
          <div className="flex gap-10">
            <div className="grid w-[100%]">
              <label>Brief profile</label>
              <TextArea />
            </div>
            <div className="grid w-[100%]">
              <label>
                Products to advertise
              </label>
              <TextArea />
            </div>
          </div>
          <button
            type="submit"
            className="shadow-btn transition-all ease-in-out duration-500 w-max font-semibold px-5 py-[5px] bg-[#015FF1] rounded-lg text-white"
          >
            Save changes
          </button>
          <Divider children="More Options" />
          <div className="flex gap-10">
            <button className="shadow-btn transition-all ease-in-out duration-500 w-[100%] border border-zinc-300 py-2.5 px-[25px]">
              Request To Remove My Data
            </button>
            <button className="shadow-btn transition-all ease-in-out duration-500 border w-[100%] border-zinc-300 py-2.5 px-[25px]">Request My Data</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckBalance;
