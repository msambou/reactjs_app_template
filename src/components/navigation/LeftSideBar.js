import React from "react";

class LeftSideBar extends React.Component {
  render() {
    return (
      <div class="left_sidebar">
        <a class="brand-text" href="javascript:void(0);">
          ArrOwlite
        </a>
        <ul class="navbar-nav mr-auto xs-show d-none">
          <li class="nav-item xs-hide">
            <a class="nav-link nav-link-icon" href="search.html">
              <i class="fa fa-search"></i>
            </a>
          </li>
          <li class="nav-item ">
            <a
              class="nav-link nav-link-icon btn-dashboard active"
              href="javascript:void(0);"
            >
              <i class="fa fa-dashboard"></i>
            </a>
          </li>
          <li class="nav-item ">
            <a
              class="nav-link nav-link-icon btn-ui-element"
              href="javascript:void(0);"
            >
              <i class="fa fa-object-group"></i>
            </a>
          </li>
          <li class="nav-item xs-hide">
            <a
              class="nav-link nav-link-icon btn-auth"
              href="javascript:void(0);"
            >
              <i class="fa fa-lock"></i>
            </a>
          </li>
        </ul>
        <nav class="sidebar main_dashboard open">
          <ul class="metismenu">
            <li class="g_heading">-- Main</li>
            <li class="active">
              <a href="index-2.html">
                <i class="ti-home"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li class="g_heading">-- Application</li>

            <li>
              <a href="page-gallery.html">
                <i class="fa fa-image"></i>
                <span>Image Gallery</span>
              </a>
            </li>
            <li>
              <a href="page-invoices.html">
                <i class="ti-file"></i>
                <span>Invoices</span>
              </a>
            </li>
            <li>
              <a href="app-contact.html">
                <i class="ti-id-badge"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftSideBar;
