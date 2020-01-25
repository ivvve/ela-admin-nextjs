import React from "react";
import HeaderLeft from "./header-left";
import HeaderRight from "./header-right";

/**
 * Header of the layout
 */
export default function Header() {
  return (
    <header id="header" className="header">
      <HeaderLeft/>
      <HeaderRight/>
    </header>
  )
}
