import Footer from "@/app/components/template/Footer";
import Header from "@/app/components/template/Header";
import React from "react";

const page = () => {
  return (
    <div className="bg-red-400 w-full h-screen flex flex-col">
      <Header />
      <main className="bg-green-400 flex-1 w-full h-full">
        <span>Products</span>
      </main>
      <Footer />
    </div>
  );
};

export default page;
