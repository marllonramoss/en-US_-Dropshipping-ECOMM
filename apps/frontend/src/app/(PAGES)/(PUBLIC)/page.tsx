"use client";

import QuickNotice from "@/app/components/template/QuickNotice";
import ShortcutsSection from "@/app/components/template/ShortcutsSection";
import ShortPage from "@/app/components/template/ShortPage/ShortPage";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="bg-red-400 w-full h-screen">
      <QuickNotice
        message="parcele em até 3x sem juros | frete grátis a partir de R$499"
        hidden={hidden}
        setHidden={setHidden}
      />
      <ShortcutsSection hidden={hidden} />
      <ShortPage />
    </div>
  );
};

export default Home;
