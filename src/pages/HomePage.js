
import React from "react";
import Loader from "../components/Loader";
import CoinTable from "../components/Table";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      {/* Loader */}
      {/* <Loader /> */}
      {/* /Loader */}

      <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        {/* Navigation */}
        <Header />
        {/* Navigation */}

        {/* CoinTable */}
        <CoinTable />
        {/* /CoinTable */}
      </div>
    </>
  );
}

export default HomePage;
