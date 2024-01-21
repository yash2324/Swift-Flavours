import React from "react";

const ShimmerMenuItem = () => (
  <div className="flex mb-5 items-center justify-between animate-shimmer">
    <div className="flex items-center">
      <div className="menu-item-img w-24 h-24 bg-gray-200 rounded mr-4"></div>
      <div className="m-3 border-b-2 flex-grow">
        <div className="menu-item-details">
          <h3 className="item-title text-xl font-semibold mb-1 shimmer-text"></h3>
          <p className="item-cost text-green-600 font-bold shimmer-text"></p>
        </div>
      </div>
    </div>
    <div className="add-btn bg-gray-200 text-gray-200 py-2 px-4 rounded"></div>
  </div>
);

const Shimmer_menu = () => {
  return (
    <div className="text-slate-800 m-5">
      <div className="flex justify-evenly bg-slate-500 animate-shimmer">
        <div className="w-64 h-64 m-10 rounded-md bg-gray-200"></div>
        <div className="flex-col justify-between">
          <h1 className="mt-32 font-extrabold text-5xl shimmer-text"></h1>
          <h2 className="text-white text-xl shimmer-text"></h2>
          <h2 className="text-white text-xl shimmer-text"></h2>
          <p className="text-white text-xl shimmer-text"></p>
        </div>
      </div>

      {Array(5)
        .fill("")
        .map((_, index) => (
          <ShimmerMenuItem key={index} />
        ))}
    </div>
  );
};

export default Shimmer_menu;
