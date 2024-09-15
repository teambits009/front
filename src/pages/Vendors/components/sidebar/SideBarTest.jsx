import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  DollarOutlined,
  PicLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { faGem, faLanguage, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarTest = ({
  handleSidebarVendorClick,
  selectedSidebarVendor,
  setToggled,
  toggled,
}) => {

  const [broken, setBroken] = React.useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  return (
    <div className="flex bg-[#f2f7ff] h-[100%]">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        customBreakPoint="800px"
        onBreakPoint={setBroken}
        backgroundColor="#f2f7ff"
      >
        <Menu >
          {/* Dashboard Section */}
          <SubMenu defaultOpen={true} icon={<FontAwesomeIcon className="text-[16px]" icon={faHome} />} label="DashBoard">
            <MenuItem
              onClick={() => handleSidebarVendorClick("dash")}
              className={
                selectedSidebarVendor === "account" ? "bg-[#f2f7ff]" : ""
              }

            >
              My Performance
            </MenuItem>
          </SubMenu>

          {/* Profile Section */}
          <SubMenu defaultOpen={true} icon={<UserOutlined />} label="Profile">
            <MenuItem
              onClick={() => handleSidebarVendorClick("account")}
              className={
                selectedSidebarVendor === "account" ? "bg-[#f2f7ff]" : ""
              }

            >
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("bank")}
              className={
                selectedSidebarVendor === "bank" ? "bg-[#f2f7ff]" : ""
              }
            >
              Bank Account
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("cookie")}
              className={
                selectedSidebarVendor === "cookie" ? "bg-[#f2f7ff]" : ""
              }
            >
              Cookie Prefences
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("address")}
              className={
                selectedSidebarVendor === "address" ? "bg-[#f2f7ff]" : ""
              }
            >
              Manage Addresses
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("update")}
              className={
                selectedSidebarVendor === "update" ? "bg-[#f2f7ff]" : ""
              }
            >
              Update Credentials
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("payment")}
              className={
                selectedSidebarVendor === "payment" ? "bg-[#f2f7ff]" : ""
              }
            >
              Payment Registration
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<ShoppingCartOutlined />} label="services">
            <MenuItem
              onClick={() => handleSidebarVendorClick("orders")}
              className={
                selectedSidebarVendor === "orders" ? "bg-[#f2f7ff]" : ""
              }
            >
              Orders
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("downloads")}
              className={
                selectedSidebarVendor === "downloads" ? "bg-[#f2f7ff]" : ""
              }
            >
              Add Service
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("service")}
              className={
                selectedSidebarVendor === "service" ? "bg-[#f2f7ff]" : ""
              }
            >
              Service List
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("cancellation")}
              className={
                selectedSidebarVendor === "cancellation" ? "bg-[#f2f7ff]" : ""
              }
            >
              Cancellation Requests
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("return")}
              className={
                selectedSidebarVendor === "return" ? "bg-[#f2f7ff]" : ""
              }
            >
              Return Requests
            </MenuItem>
          </SubMenu>
          <SubMenu
            icon={<FontAwesomeIcon icon={faGem} />}
            label="Offers & rewards"
          >
            <MenuItem
              onClick={() => handleSidebarVendorClick("offers")}
              className={
                selectedSidebarVendor === "offers" ? "bg-[#f2f7ff]" : ""
              }
            >
              My Offers
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("reward")}
              className={
                selectedSidebarVendor === "reward" ? "bg-[#f2f7ff]" : ""
              }
            >
              Reward Points
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("share")}
              className={
                selectedSidebarVendor === "share" ? "bg-[#f2f7ff]" : ""
              }
            >
              Share and Earn
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<PicLeftOutlined />} label="General">
            <MenuItem
              onClick={() => handleSidebarVendorClick("feed")}
              className={
                selectedSidebarVendor === "feed" ? "bg-[#f2f7ff]" : ""
              }
            >
              Messages
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarVendorClick("credits")}
              className={
                selectedSidebarVendor === "credits" ? "bg-[#f2f7ff]" : ""
              }
            >
              Total Balance
            </MenuItem>
           
          </SubMenu>
          <SubMenu
            icon={<FontAwesomeIcon icon={faLanguage} />}
            label="Language"
          >
            <MenuItem> English </MenuItem>
            <MenuItem> Arabic </MenuItem>
            <MenuItem> Spanish </MenuItem>
          </SubMenu>
          <SubMenu icon={<DollarOutlined />} label="Currency">
            <MenuItem> KSH </MenuItem>
            <MenuItem> USD </MenuItem>
            <MenuItem> Dirham </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBarTest;
