import React from "react";
import "./Vendors.css";
import Navbar from "./components/navbar/Navbar";
import Orders from "./components/Service/Orders";
import Downloads from "./components/Service/AddService";
import Cancellation from "./components/Service/requests/Cancellation";
import Return from "./components/Service/requests/Return";
import CheckBalance from "./components/profile/checkBalance/checkBalance";
import BankAccount from "./components/profile/bankAccount/BankAccount";
import Cookie from "./components/profile/cookie/Cookie";
import ManageAddres from "./components/profile/address/ManageAddres";
import Update from "./components/profile/updateCredentials/Update";
import ServiceList from "./components/Service/ServiceList";
import PaymentRegistration from "./components/profile/payment/PaymentRegistration";
import MyCredits from "./components/General/MyCredits";
import Dashboard from "./components/dashboard/Dashboard";
import MessagesPage from "./components/General/MessagesPage";
import Sidebar from "./components/sidebar/SidebarVendor";
import Offers from "./components/offers/Offers";
import Share from "./components/offers/share";




const Vendors = () => {
  const [toggled, setToggled] = React.useState(false);
  const [selectedSidebarVendor, setselectedSidebarVendor] =
    React.useState("dash");

  const handleSidebarVendorClick = (setting) => {
    setselectedSidebarVendor(setting);
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
              handleSidebarVendorClick={handleSidebarVendorClick}
              handleToggled={handleToggled}
              toggled={toggled}
            />
          </div>
          <div className="dashboard">
            <div>
              <Sidebar
                handleSidebarVendorClick={handleSidebarVendorClick}
                selectedSidebarVendor={selectedSidebarVendor}
                toggled={toggled}
                setToggled={setToggled}
              />
            </div>
            <div className="sm:px-[40px] px-[20px] mb-[20px]">
              {selectedSidebarVendor === "dash" && <Dashboard />}
              {selectedSidebarVendor === "orders" && <Orders />}
              {selectedSidebarVendor === "downloads" && <Downloads />}
              {selectedSidebarVendor === "cancellation" && <Cancellation />}
              {selectedSidebarVendor === "return" && <Return />}
              {selectedSidebarVendor === "account" && <CheckBalance />}
              {selectedSidebarVendor === "bank" && <BankAccount />}
              {selectedSidebarVendor === "cookie" && <Cookie />}
              {selectedSidebarVendor === "address" && <ManageAddres />}
              {selectedSidebarVendor === "update" && <Update />}
              {selectedSidebarVendor === "service" && <ServiceList />}
              {selectedSidebarVendor === "payment" && <PaymentRegistration />}
              {selectedSidebarVendor === "offers" && <Offers />}
              {selectedSidebarVendor === "credits" && <MyCredits />}
              {selectedSidebarVendor === "feed" && <MessagesPage />}
              {selectedSidebarVendor === "share" && <Share />}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
