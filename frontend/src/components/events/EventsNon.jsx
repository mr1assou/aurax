import React, { useState } from "react";
import Products from "./Products";
import Header from "../Header";

function Events() {
  return (
    <div className="w-full  bg-black py-3 px-2 lg:py-5 lg:px-10 min-h-screen">
      <Header />
      <Products />
    </div>
  );
}

export default Events;
