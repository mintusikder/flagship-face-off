import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-117px)] ">
        <div className=" px-8 md:px-12 lg:px-16">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
