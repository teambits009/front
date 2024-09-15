import React from "react";
import "./customer.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";
import Downloads from "./components/orders/downloads/Downloads";
import Cancellation from "./components/orders/requests/Cancellation";
import Return from "./components/orders/requests/Return";
import CheckBalance from "./components/profile/checkBalance/checkBalance";
import BankAccount from "./components/profile/bankAccount/BankAccount";
import Cookie from "./components/profile/cookie/Cookie";
import ManageAddres from "./components/profile/address/ManageAddres";
import Update from "./components/profile/updateCredentials/Update";
import Offers from "./components/offers/Offers";
import Share from "./components/offers/share/Share";
import Messages from "./components/general/Messages";
import Credits from "./components/general/Credits";
import Wishlist from "./components/general/Wishlist";
import Rewards from "./components/offers/rewards/Rewards";
import SidebarCustomer from "./components/sidebar/Sidebar";

const Customer = () => {
  const [toggled, setToggled] = React.useState(false);
  const [selectedSidebarCustomer, setSelectedSidebarCustomer] =
    React.useState("orders");

  const handleSidebarCustomerClick = (setting) => {
    setSelectedSidebarCustomer(setting);
    setToggled(false);
  };

  const handleToggled = () => {
    setToggled(!toggled);
  }

  return (
    <div className="bg-[#f6f6f7]">
      <div className="grid w-[100%] mx-auto h-[100vh] shadow-custom">
        <div className="bg-white">
          <div>
            <Navbar
              handleSidebarCustomerClick={handleSidebarCustomerClick}
              handleToggled={handleToggled}
              toggled={toggled}
            />
          </div>
          <div className="dashboard">
            <div>
              <SidebarCustomer
                handleSidebarCustomerClick={handleSidebarCustomerClick}
                selectedSidebarCustomer={selectedSidebarCustomer}
                toggled={toggled}
                setToggled={setToggled}
              />
            </div>
            <div className="sm:px-[40px] px-[20px] mb-[20px]">
              {selectedSidebarCustomer === "orders" && <Orders />}
              {selectedSidebarCustomer === "downloads" && <Downloads />}
              {selectedSidebarCustomer === "cancellation" && <Cancellation />}
              {selectedSidebarCustomer === "return" && <Return />}
              {selectedSidebarCustomer === "account" && <CheckBalance />}
              {selectedSidebarCustomer === "bank" && <BankAccount />}
              {selectedSidebarCustomer === "cookie" && <Cookie />}
              {selectedSidebarCustomer === "address" && <ManageAddres />}
              {selectedSidebarCustomer === "update" && <Update />}
              {selectedSidebarCustomer === "offers" && <Offers />}
              {selectedSidebarCustomer === "reward" && <Rewards />}
              {selectedSidebarCustomer === "share" && <Share />}
              {selectedSidebarCustomer === "messages" && <Messages />}
              {selectedSidebarCustomer === "credits" && <Credits />}
              {selectedSidebarCustomer === "wishlist" && <Wishlist />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
