import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  DollarOutlined,
  PicLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { faGem, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarCustomerTest = ({
  handleSidebarCustomerClick,
  selectedSidebarCustomer,
  setToggled,
  toggled,
}) => {
 
  const [broken, setBroken] = React.useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  return (
    <div className="flex">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        customBreakPoint="800px"
        onBreakPoint={setBroken}
        backgroundColor="white"
      >
        <Menu>
          <SubMenu icon={<UserOutlined />} label="Profile">
            <MenuItem
              onClick={() => handleSidebarCustomerClick("account")}
              className={
                selectedSidebarCustomer === "account" ? "bg-[#f3f3f3]" : ""
              }
            >
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("bank")}
              className={
                selectedSidebarCustomer === "bank" ? "bg-[#f3f3f3]" : ""
              }
            >
              Bank Account
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("cookie")}
              className={
                selectedSidebarCustomer === "cookie" ? "bg-[#f3f3f3]" : ""
              }
            >
              Cookie Prefences
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("address")}
              className={
                selectedSidebarCustomer === "address" ? "bg-[#f3f3f3]" : ""
              }
            >
              Manage Addresses
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("update")}
              className={
                selectedSidebarCustomer === "update" ? "bg-[#f3f3f3]" : ""
              }
            >
              Update Credentials
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<ShoppingCartOutlined />} label="Orders">
            <MenuItem
              onClick={() => handleSidebarCustomerClick("orders")}
              className={
                selectedSidebarCustomer === "orders" ? "bg-[#f3f3f3]" : ""
              }
            >
              Orders
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("downloads")}
              className={
                selectedSidebarCustomer === "downloads" ? "bg-[#f3f3f3]" : ""
              }
            >
              Downloads
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("cancellation")}
              className={
                selectedSidebarCustomer === "cancellation" ? "bg-[#f3f3f3]" : ""
              }
            >
              Cancellation Requests
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("return")}
              className={
                selectedSidebarCustomer === "return" ? "bg-[#f3f3f3]" : ""
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
              onClick={() => handleSidebarCustomerClick("offers")}
              className={
                selectedSidebarCustomer === "offers" ? "bg-[#f3f3f3]" : ""
              }
            >
              My Offers
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("reward")}
              className={
                selectedSidebarCustomer === "reward" ? "bg-[#f3f3f3]" : ""
              }
            >
              Reward Points
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("share")}
              className={
                selectedSidebarCustomer === "share" ? "bg-[#f3f3f3]" : ""
              }
            >
              Share and Earn
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<PicLeftOutlined />} label="General">
            <MenuItem
              onClick={() => handleSidebarCustomerClick("messages")}
              className={
                selectedSidebarCustomer === "messages" ? "bg-[#f3f3f3]" : ""
              }
            >
              Messages
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("credits")}
              className={
                selectedSidebarCustomer === "credits" ? "bg-[#f3f3f3]" : ""
              }
            >
              My Credits
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("wishlist")}
              className={
                selectedSidebarCustomer === "wishlist" ? "bg-[#f3f3f3]" : ""
              }
            >
              Wishlist
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

export default SidebarCustomerTest;
