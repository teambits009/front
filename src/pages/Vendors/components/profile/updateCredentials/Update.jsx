import React from "react";
import Header from "../../common/Header";
import { Card, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Update = () => {
  return (
    <div>
      <Header title={"Update Credentials"} category={"Update Credentials"} />
      <div className="grid md:grid-cols-2 gap-5">
        <div className="shadow-custom rounded-xl">
          <p className="font-semibold text-[18px] p-5">Update Email</p>
          <hr/>
          <form className="grid gap-[10px] p-5">
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="email" placeholder="New Email" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Confirm New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="email" placeholder="Confirm New Email" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Current Password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="Current password" required />
              <button
                type="submit"
                className="border-2 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="shadow-custom rounded-xl">
          <p className="font-semibold text-[18px] p-5">Update Password</p>
          <hr/>
          <form className="grid gap-[10px] p-5">
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Current password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="Current password" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>New password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="New password" required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Confirm new password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="password"
                placeholder="Confirm new password"
                required
              />
              <button
                type="submit"
                className="border-2 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
