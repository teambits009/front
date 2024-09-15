import {
  faBox,
  faBoxesStacked,
  faCartShopping,
  faCubesStacked,
  faGear,
  faGift,
  faHome,
  faShippingFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "antd";
import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SidebarResponsive = ({
  handleSidebarClick,
  setIsCollapsed,
  isCollapsed,
  selectedSidebar,
}) => {
  const [broken, setBroken] = React.useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  return (
    <div className="flex h-[100%] relative sidebar w-max">
      <Sidebar
        onBackdropClick={() => setIsCollapsed(false)}
        customBreakPoint="1024px"
        onBreakPoint={setBroken}
        toggled={isCollapsed}
        backgroundColor="white"
      >
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Quick links
          </Typography>
        </div>
        <Menu>
          <MenuItem
            className={selectedSidebar === "dashboard" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("dashboard")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faHome} />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            onClick={() => handleSidebarClick("newProduct")}
            className={selectedSidebar === "newProduct" ? "bg-[#f3f3f3]" : ""}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faBox} />}
          >
            New Product
          </MenuItem>
          <MenuItem
            className={selectedSidebar === "newCoupon" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("newCoupon")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faGift} />}
          >
            New Coupon
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Catalog
          </Typography>
        </div>
        <Menu>
          <MenuItem
            className={selectedSidebar === "products" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("products")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faBox} />}
          >
            Products
          </MenuItem>
          <MenuItem
            className={selectedSidebar === "categories" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("categories")}
            icon={
              <FontAwesomeIcon className="text-[16px]" icon={faCubesStacked} />
            }
          >
            Categories
          </MenuItem>
          <MenuItem
            className={selectedSidebar === "collections" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("collections")}
            icon={
              <FontAwesomeIcon className="text-[16px]" icon={faBoxesStacked} />
            }
          >
            Collections
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Sale
          </Typography>
        </div>
        <Menu>
          <MenuItem
            className={selectedSidebar === "orders" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("orders")}
            icon={
              <FontAwesomeIcon className="text-[16px]" icon={faCartShopping} />
            }
          >
            Orders
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Customer
          </Typography>
        </div>
        <Menu>
          <MenuItem
            className={selectedSidebar === "customers" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("customers")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faUsers} />}
          >
            Customers
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Shipping
          </Typography>
        </div>
        <Menu>
          <MenuItem
            className={selectedSidebar === "shipping" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("shipping")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faShippingFast} />}
          >
            Shipping
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Promotion
          </Typography>
        </div>
        <Menu>
          <MenuItem
            className={selectedSidebar === "coupons" ? "bg-[#f3f3f3]" : ""}
            onClick={() => handleSidebarClick("coupons")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faGift} />}
          >
            Coupons
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            settings
          </Typography>
        </div>
        <div className="pb-[20px]">
          <Menu>
            <MenuItem
              className={selectedSidebar === "settings" ? "bg-[#f3f3f3]" : ""}
              onClick={() => handleSidebarClick("settings")}
              icon={<FontAwesomeIcon className="text-[16px]" icon={faGear} />}
            >
              Setting
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarResponsive;
