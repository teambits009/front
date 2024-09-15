import React, { useState } from "react";
import { Card, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/Header";

const AddService = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    serviceName: "",
    serviceDescription: "",
    regularPrice: "",
    salePrice: "",
    itemImage: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment information submitted:", paymentInfo);
  };

  return (
    <div>
      <Header title={"Add a Service"} category={"Add Services"} />
      <div className="py-4">
        <div className="w-full mx-auto">
          <div className="shadow-custom rounded-xl">
            <p className="font-semibold text-xl mb-4 p-5">
              Update Payment Information
            </p>
            <hr />
            <form className="grid md:grid-cols-2 gap-2.5 p-5">
              <div className="grid gap-2.5">
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Service Name</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Service Name" required />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Regular price</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Regular price" required />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Item Image</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Item Image" required />
                </div>
              </div>
              <div className="grid gap-2.5">
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Service Description</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Service Description"
                    required
                  />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Sale Price</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Sale Price" required />
                </div>
                <div className="grid gap-[10px]">
                  <div className="flex gap-[5px]">
                    <label>Quantity</label>
                    <FontAwesomeIcon
                      className="text-[red] mt-[5px] text-[8px] "
                      icon={faAsterisk}
                    />
                  </div>
                  <Input type="email" placeholder="Quantity" required />
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

export default AddService;
