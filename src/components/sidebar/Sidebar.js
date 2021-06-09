import React from "react";

class Home extends React.Component {
  render() {
    return (
      <nav class="navbar custom-navbar">
        <div class="nav_top">
          <a class="navbar-brand" href="index-2.html">
            <img src="assets/images/brand/icon.svg" alt="ArrOwlite" />
          </a>
          <ul class="navbar-nav mr-auto d-none d-md-block">
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
        </div>
        <div id="navbar_main">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown xs-hide">
              <a
                class="nav-link nav-link-icon"
                href="javascript:void(0);"
                id="navbar_1_dropdown_2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-bell"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-xl py-0">
                <div class="py-3 px-3">
                  <h5 class="heading h6 mb-0">
                    Notifications{" "}
                    <span class="badge badge-pill badge-primary text-uppercase float-right">
                      3
                    </span>
                  </h5>
                </div>
                <div class="list-group">
                  <a
                    href="javascript:void(0);"
                    class="list-group-item list-group-item-action d-flex"
                  >
                    <div class="list-group-img">
                      <span class="avatar bg-purple">JD</span>
                    </div>
                    <div class="list-group-content">
                      <div class="list-group-heading">
                        Johnyy Depp <small>10:05 PM</small>
                      </div>
                      <p class="text-sm">
                        Lorem ipsum dolor consectetur adipiscing eiusmod tempor
                      </p>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="list-group-item list-group-item-action d-flex"
                  >
                    <div class="list-group-img">
                      <span class="avatar bg-pink">TC</span>
                    </div>
                    <div class="list-group-content">
                      <div class="list-group-heading">
                        Tom Cruise <small>10:05 PM</small>
                      </div>
                      <p class="text-sm">
                        Lorem ipsum dolor sit amet consectetur eiusmod tempor
                      </p>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="list-group-item list-group-item-action d-flex"
                  >
                    <div class="list-group-img">
                      <span class="avatar bg-blue">WS</span>
                    </div>
                    <div class="list-group-content">
                      <div class="list-group-heading">
                        Will Smith <small>10:05 PM</small>
                      </div>
                      <p class="text-sm">
                        Lorem sit amet consectetur adipiscing eiusmod tempor
                      </p>
                    </div>
                  </a>
                </div>
                <div class="py-3 text-center">
                  <a
                    href="javascript:void(0);"
                    class="link link-sm link--style-3"
                  >
                    View all notifications
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link nav-link-icon"
                href="javascript:void(0);"
                id="navbar_1_dropdown_3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <h6 class="dropdown-header">User menu</h6>
                <a class="dropdown-item" href="page-profile.html">
                  <i class="fa fa-user text-primary"></i>My Profile
                </a>
                <a class="dropdown-item" href="javascript:void(0);">
                  <span class="float-right badge badge-success">$50K</span>
                  <i class="fa fa-briefcase text-primary"></i>My Balance
                </a>
                <a class="dropdown-item" href="app-inbox.html">
                  <span class="float-right badge badge-warning">4</span>
                  <i class="fa fa-envelope text-primary"></i>Inbox
                </a>
                <a class="dropdown-item" href="javascript:void(0);">
                  <i class="fa fa-cog text-primary"></i>Settings
                </a>
                <div class="dropdown-divider" role="presentation"></div>
                <a class="dropdown-item" href="pages/sign-in.html">
                  <i class="fa fa-sign-out-alt text-primary"></i>Sign out
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link nav-link-icon rightbar_btn"
                href="javascript:void(0);"
              >
                <i class="fa fa-cogs"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link nav-link-icon menu_toggle"
                href="javascript:void(0);"
              >
                <i class="fa fa-align-left"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Home;
