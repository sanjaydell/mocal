import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="search">
        Search <img src="search.svg" alt="search" />
      </div>
    </header>
  );
}

export default Header;
