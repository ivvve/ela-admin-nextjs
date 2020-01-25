import React from "react";
import {AdminCategory} from "../../../common/constant/admin-category";
import Link from "next/link";
import {useRouter} from "next/router";

/**
 * Left Navbar of the layout
 */
export default function LeftPanel() {
  const currentCategory = useRouter().route.split('/')[1];

  function activeIfCurrentCategory(category: AdminCategory): 'active' | '' {
    return (currentCategory === category) ? 'active' : ''
  }

  return (
    <>
    <aside id="left-panel" className="left-panel">
      <nav className="navbar navbar-expand-sm navbar-default">
        <div id="main-menu" className="main-menu collapse navbar-collapse">
          <ul className="nav navbar-nav">

            <li className={activeIfCurrentCategory(AdminCategory.Dashboard)}>
              <Link href={`/${AdminCategory.Dashboard}`}>
                <a><i className="menu-icon fa fa-laptop"/> Dashboard</a>
              </Link>
            </li>

            <li className="menu-title">UI elements</li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Components)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-cogs"/>Components
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="fa fa-puzzle-piece"/>
                  <Link href={`/${AdminCategory.Components}/buttons`}>
                    <a>Buttons</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-id-badge"/>
                  <Link href={`/${AdminCategory.Components}/badges`}>
                    <a>Badges</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-bars"/>
                  <Link href={`/${AdminCategory.Components}/tabs`}>
                    <a>Tabs</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-id-card-o"/>
                  <Link href={`/${AdminCategory.Components}/cards`}>
                    <a>Cards</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-exclamation-triangle"/>
                  <Link href={`/${AdminCategory.Components}/alerts`}>
                    <a>Alerts</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-spinner"/>
                  <Link href={`/${AdminCategory.Components}/progressbar`}>
                    <a>Progress Bars</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-fire"/>
                  <Link href={`/${AdminCategory.Components}/modals`}>
                    <a>Modals</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-book"/>
                  <Link href={`/${AdminCategory.Components}/switches`}>
                    <a>Switches</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-th"/>
                  <Link href={`/${AdminCategory.Components}/grids`}>
                    <a>Grids</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-file-word-o"/>
                  <Link href={`/${AdminCategory.Components}/typography`}>
                    <a>Typography</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Tables)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-table"/>Tables
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="fa fa-table"/>
                  <Link href={`/${AdminCategory.Tables}/basic`}>
                    <a>Basic Table</a>
                  </Link>
                </li>
                <li>
                  <i className="fa fa-table"/>
                  <Link href={`/${AdminCategory.Tables}/data`}>
                    <a>Data Table</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Forms)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-th"/>Forms
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="menu-icon fa fa-th"/>
                  <Link href={`/${AdminCategory.Forms}/basic`}>
                    <a>Basic Form</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon fa fa-th"/>
                  <Link href={`/${AdminCategory.Forms}/advanced`}>
                    <a>Advanced Form</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">Icons</li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Icons)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-tasks"/>Icons
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="menu-icon fa fa-fort-awesome"/>
                  <Link href={`/${AdminCategory.Icons}/font-awesome`}>
                    <a>Font Awesome</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon ti-themify-logo"/>
                  <Link href={`/${AdminCategory.Icons}/themify`}>
                    <a>Themify Icons</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={activeIfCurrentCategory(AdminCategory.Widgets)}>
              <Link href={`/${AdminCategory.Widgets}`}>
                <a><i className="menu-icon ti-email"/>Widgets</a>
              </Link>
            </li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Charts)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-bar-chart"/>Charts
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="menu-icon fa fa-line-chart"/>
                  <Link href={`/${AdminCategory.Charts}/chartjs`}>
                    <a>Chart JS</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon fa fa-area-chart"/>
                  <Link href={`/${AdminCategory.Charts}/flot`}>
                    <a>Flot Chart</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon fa fa-pie-chart"/>
                  <Link href={`/${AdminCategory.Charts}/peity`}>
                    <a>Peity Chart</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Maps)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-map-marker"></i>Maps
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="menu-icon fa fa-map-o"/>
                  <Link href={`/${AdminCategory.Maps}/google`}>
                    <a>Google Maps</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon fa fa-street-view"/>
                  <Link href={`/${AdminCategory.Maps}/vector`}>
                    <a> Vector Maps</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">Extras</li>

            <li className={`menu-item-has-children dropdown ${activeIfCurrentCategory(AdminCategory.Pages)}`}>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="menu-icon fa fa-glass"/>Pages
              </a>

              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="menu-icon fa fa-sign-in"/>
                  <Link href={`/${AdminCategory.Pages}/login`}>
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon fa fa-sign-in"/>
                  <Link href={`/${AdminCategory.Pages}/register`}>
                    <a>Register</a>
                  </Link>
                </li>
                <li>
                  <i className="menu-icon fa fa-paper-plane"/>
                  <Link href={`/${AdminCategory.Pages}/forget`}>
                    <a>Forget Pass</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
    </>
  )
}
