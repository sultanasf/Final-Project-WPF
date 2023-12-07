import React from "react";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";

const Layout = ({ isLoading, activeNav, Content, contentProps }) => {
  return (
    <>
      <div className="d-flex">
        <Sidebar activeNav={activeNav} />
        {isLoading ? <Loader /> : <Content {...contentProps} />}
      </div>
    </>
  );
};

export default Layout;
