"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React from "react";
import ChartFive from "@/components/Charts/ChartFive";

const BasicChart: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <ChartThree />
        {/* <div className="col-span-12 xl:col-span-5">
          <ChartFive />
        </div> */}
      </div>
    </>
  );
};

export default BasicChart;
