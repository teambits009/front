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

const SidebarCustomer = ({
  handleSidebarCustomerClick,
  selectedSidebarCustomer,
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
          <SubMenu defaultOpen={true} icon={<UserOutlined />} label="Profile">
            <MenuItem
              onClick={() => handleSidebarCustomerClick("account")}
              className={
                selectedSidebarCustomer === "account" ? "bg-[#f2f7ff]" : ""
              }
              
            >
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("bank")}
              className={
                selectedSidebarCustomer === "bank" ? "bg-[#f2f7ff]" : ""
              }
            >
              Bank Account
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("cookie")}
              className={
                selectedSidebarCustomer === "cookie" ? "bg-[#f2f7ff]" : ""
              }
            >
              Cookie Prefences
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("address")}
              className={
                selectedSidebarCustomer === "address" ? "bg-[#f2f7ff]" : ""
              }
            >
              Manage Addresses
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("update")}
              className={
                selectedSidebarCustomer === "update" ? "bg-[#f2f7ff]" : ""
              }
            >
              Update Credentials
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<ShoppingCartOutlined />} label="Orders">
            <MenuItem
              onClick={() => handleSidebarCustomerClick("orders")}
              className={
                selectedSidebarCustomer === "orders" ? "bg-[#f2f7ff]" : ""
              }
            >
              Orders
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("downloads")}
              className={
                selectedSidebarCustomer === "downloads" ? "bg-[#f2f7ff]" : ""
              }
            >
              Downloads
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("cancellation")}
              className={
                selectedSidebarCustomer === "cancellation" ? "bg-[#f2f7ff]" : ""
              }
            >
              Cancellation Requests
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("return")}
              className={
                selectedSidebarCustomer === "return" ? "bg-[#f2f7ff]" : ""
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
                selectedSidebarCustomer === "offers" ? "bg-[#f2f7ff]" : ""
              }
            >
              My Offers
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("reward")}
              className={
                selectedSidebarCustomer === "reward" ? "bg-[#f2f7ff]" : ""
              }
            >
              Reward Points
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("share")}
              className={
                selectedSidebarCustomer === "share" ? "bg-[#f2f7ff]" : ""
              }
            >
              Share and Earn
            </MenuItem>
          </SubMenu>
          <SubMenu icon={<PicLeftOutlined />} label="General">
            <MenuItem
              onClick={() => handleSidebarCustomerClick("messages")}
              className={
                selectedSidebarCustomer === "messages" ? "bg-[#f2f7ff]" : ""
              }
            >
              Messages
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("credits")}
              className={
                selectedSidebarCustomer === "credits" ? "bg-[#f2f7ff]" : ""
              }
            >
              My Credits
            </MenuItem>
            <MenuItem
              onClick={() => handleSidebarCustomerClick("wishlist")}
              className={
                selectedSidebarCustomer === "wishlist" ? "bg-[#f2f7ff]" : ""
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

export default SidebarCustomer;
