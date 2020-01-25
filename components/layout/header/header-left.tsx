import React from "react";

/**
 * The top left corner of the layout.
 * It has a left menu toggle(hamburger) button.
 */
export default function HeaderLeft() {
  return (
    <div className="top-left">
      <div className="navbar-header">
        <a className="navbar-brand" href="../.."><img src="images/logo.png" alt="Logo"/></a>
        <a className="navbar-brand hidden" href="../.."><img src="images/logo2.png" alt="Logo"/></a>
        <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"/></a>
      </div>
    </div>
  )
}
