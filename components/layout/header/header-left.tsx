import React from "react";
import Link from "next/link";

/**
 * The top left corner of the layout.
 * It has a left menu toggle(hamburger) button.
 */
export default function HeaderLeft() {
  return (
    <div className="top-left">
      <div className="navbar-header">
        <Link href='/dashboard'>
          <a className="navbar-brand"><img src="/images/logo.png" alt="Logo"/></a>
        </Link>
        <Link href='/dashboard'>
          <a className="navbar-brand hidden"><img src="/images/logo2.png" alt="Logo"/></a>
        </Link>
        <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"/></a>
      </div>
    </div>
  )
}
