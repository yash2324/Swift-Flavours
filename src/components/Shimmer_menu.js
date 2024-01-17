import React from "react";

function Shimmer_menu() {
  return (
    <div className="restaurant-menu-shim">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className="Shimmer-card-menu" key={index}></div>
        ))}
    </div>
  );
}

export default Shimmer_menu;
