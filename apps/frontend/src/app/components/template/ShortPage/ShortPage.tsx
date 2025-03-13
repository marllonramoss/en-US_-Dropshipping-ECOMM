import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ShortProductsList from "../ShortProductsList";

const ShortPage = () => {
  return (
    <div className="bg-red-400 w-full h-screen flex flex-col">
      <Header />
      <main className="bg-green-400 flex-1 w-full h-full">
        <span>Products</span>
        <ShortProductsList />
      </main>
      <Footer />
    </div>
  );
};

export default ShortPage;
