import React, { useState, useEffect } from "react";
import NavBar from "../components/home/navBar";
import Footer from "../components/home/footer";
import SearchForm from "../components/searchForm";
// pic
// name
// title
// search form - city, zip, mls, address
// autocomplete - we'll see after API
// single family, condos, multi, mobile home, manufactured, townhouse,
// no min and max

export default function Search() {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Let me help you find your dream home today!</h1>
      </div>
      <SearchForm />
      <Footer />
    </>
  );
}
