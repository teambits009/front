import React, { useState } from "react";
import "./admin.css";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import Dashboard from "./dashboard/Dashboard";
import Customers from "./customers/Customers";
import NewProduct from "./newProduct/NewProduct";
import NewCoupon from "./newCoupon/NewCoupon";
import Products from "./products/Products";
import Categories from "./categories/Categories";
import Collections from "./collections/Collections";
import Orders from "./orders/orders";
import Coupons from "./coupons/Coupons";
import Settings from "./settings/Settings";
import NewCollection from "./collections/NewCollection";
import SidebarResponsive from "./sidebar/Sidebar";
import Shipping from "./shipping/Shipping";
import InTransit from "./shipping/InTransit";
import Shipped from "./shipping/Shipped";
import Pending from "./shipping/Pending";

const Admin = () => {
  const [selectedSidebar, setSelectedSidebar] = React.useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSideMenuToggle = () => {
    setIsCollapsed(!isCollapsed);
  
  };

  const handleSidebarClick = (setting) => {
    setSelectedSidebar(setting);  
    setIsCollapsed(false)
  };

  const handleSidebarClickSecond = (setting) => {
    setSelectedSidebar(setting);
  }


  return (
    <div>
      
      <div className="md:h-[100vh] overflow-hidden">
        <AdminNavbar handleSideMenuToggle={handleSideMenuToggle} isCollapsed={isCollapsed}/>
        <main className="dashboard shadow-custom bg-[#f6f6f7] md:h-[88vh]">
          <SidebarResponsive
            selectedSidebar={selectedSidebar}
            handleSidebarClick={handleSidebarClick}
            setIsCollapsed={setIsCollapsed}
            isCollapsed={isCollapsed}
          />
          <div className="overflow-auto shadow-custom">
            {selectedSidebar === "dashboard" && <Dashboard />}
            {selectedSidebar === "customers" && <Customers />}
            {selectedSidebar === "newProduct" && (
              <NewProduct handleSidebarClickSecond={handleSidebarClickSecond} />
            )}
            {selectedSidebar === "newCoupon" && (
              <NewCoupon handleSidebarClickSecond={handleSidebarClickSecond} />
            )}
            {selectedSidebar === "products" && <Products />}
            {selectedSidebar === "categories" && <Categories />}
            {selectedSidebar === "collections" && (
              <Collections handleSidebarClickSecond={handleSidebarClickSecond} />
            )}
            {selectedSidebar === "orders" && <Orders />}
            {selectedSidebar === "coupons" && (
              <Coupons handleSidebarClickSecond={handleSidebarClickSecond} />
            )}
            {selectedSidebar === "settings" && <Settings />}
            {selectedSidebar === "newCollection" && (
              <NewCollection handleSidebarClickSecond={handleSidebarClickSecond} />
            )}
             {selectedSidebar === "shipping" && <Shipping handleSidebarClickSecond={handleSidebarClickSecond}/>}
             {selectedSidebar === "inTransit" && <InTransit handleSidebarClickSecond={handleSidebarClickSecond} />}
             {selectedSidebar === "shipped" && <Shipped handleSidebarClickSecond={handleSidebarClickSecond} />}
             {selectedSidebar === "pending" && <Pending handleSidebarClickSecond={handleSidebarClickSecond} />}
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default Admin;
