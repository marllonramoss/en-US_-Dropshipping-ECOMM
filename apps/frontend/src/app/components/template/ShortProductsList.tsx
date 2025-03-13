import { getAllWatches, Watch } from "@/lib/hygraph";
import React from "react";

const ShortProductsList = async () => {
  const products3 = await getAllWatches();

  return (
    <div>
      {products3.map((watch: Watch, i: number) => (
        <div key={i}>{watch.model}</div>
      ))}
    </div>
  );
};

export default ShortProductsList;
