import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <section className="flex-1 box-border p-4">{children}</section>
      </div>
    </main>
  );
};

export default DefaultLayout;
