import React from "react";
import Sidebar from "@/components/Sidebar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>;
    </>
  );
};

export default DefaultLayout;
