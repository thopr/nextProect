import React, { useState, useEffect } from "react";

import Admin_nav from "../components/Admin_nav";
function About() {
  const [toggler, settoggler] = useState(true);

  return (
    <>
      <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
        <div>
          {/* Sidenav */}

          {toggler ? <Admin_nav /> : ""}
          {/* Main content */}

          <div class="main-content" id="panel">
            {/* Topnav */}
            <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
              <div className="container-fluid">
                <a
                  class="nav-link"
                  role="button"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => {
                    settoggler(!toggler);
                  }}
                >
                  <i className="ni ni-align-left-2"></i>
                </a>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* Search form */}
                  <form
                    className="navbar-search navbar-search-light form-inline mr-sm-3"
                    id="navbar-search-main"
                  >
                    <div className="form-group mb-0">
                      <div className="input-group input-group-alternative input-group-merge">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-search" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Search"
                          type="text"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-action="search-close"
                      data-target="#navbar-search-main"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </form>
                  {/* Navbar links */}
                  <ul className="navbar-nav align-items-center  ml-md-auto ">
                    <li className="nav-item d-xl-none">
                      {/* Sidenav toggler */}
                      <div
                        className="pr-3 sidenav-toggler sidenav-toggler-dark"
                        data-action="sidenav-pin"
                        data-target="#sidenav-main"
                      >
                        <div className="sidenav-toggler-inner">
                          <i className="sidenav-toggler-line" />
                          <i className="sidenav-toggler-line" />
                          <i className="sidenav-toggler-line" />
                        </div>
                      </div>
                    </li>
                    <li className="nav-item d-sm-none">
                      <a
                        className="nav-link"
                        href="#"
                        data-action="search-show"
                        data-target="#navbar-search-main"
                      >
                        <i className="ni ni-zoom-split-in" />
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ni ni-bell-55" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                        {/* Dropdown header */}
                        <div className="px-3 py-3">
                          <h6 className="text-sm text-muted m-0">
                            You have{" "}
                            <strong className="text-primary">13</strong>{" "}
                            notifications.
                          </h6>
                        </div>
                        {/* List group */}
                        <div className="list-group list-group-flush">
                          <a
                            href="#!"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="row align-items-center">
                              <div className="col-auto">
                                {/* Avatar */}
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-1.jpg"
                                  className="avatar rounded-circle"
                                />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>2 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">
                                  Let's meet at Starbucks at 11:30. Wdyt?
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#!"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="row align-items-center">
                              <div className="col-auto">
                                {/* Avatar */}
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-2.jpg"
                                  className="avatar rounded-circle"
                                />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>3 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">
                                  A new issue has been reported for Argon.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#!"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="row align-items-center">
                              <div className="col-auto">
                                {/* Avatar */}
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-3.jpg"
                                  className="avatar rounded-circle"
                                />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>5 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">
                                  Your posts have been liked a lot.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#!"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="row align-items-center">
                              <div className="col-auto">
                                {/* Avatar */}
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-4.jpg"
                                  className="avatar rounded-circle"
                                />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>2 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">
                                  Let's meet at Starbucks at 11:30. Wdyt?
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#!"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="row align-items-center">
                              <div className="col-auto">
                                {/* Avatar */}
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-5.jpg"
                                  className="avatar rounded-circle"
                                />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>3 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">
                                  A new issue has been reported for Argon.
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                        {/* View all */}
                        <a
                          href="#!"
                          className="dropdown-item text-center text-primary font-weight-bold py-3"
                        >
                          View all
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ni ni-ungroup" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                        <div className="row shortcuts px-4">
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                              <i className="ni ni-calendar-grid-58" />
                            </span>
                            <small>Calendar</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                              <i className="ni ni-email-83" />
                            </span>
                            <small>Email</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                              <i className="ni ni-credit-card" />
                            </span>
                            <small>Payments</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                              <i className="ni ni-books" />
                            </span>
                            <small>Reports</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                              <i className="ni ni-pin-3" />
                            </span>
                            <small>Maps</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                              <i className="ni ni-basket" />
                            </span>
                            <small>Shop</small>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link pr-0"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="media align-items-center">
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt="Image placeholder"
                              src="../assets/img/theme/team-4.jpg"
                            />
                          </span>
                          <div className="media-body  ml-2  d-none d-lg-block">
                            <span className="mb-0 text-sm  font-weight-bold">
                              John Snow
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu  dropdown-menu-right ">
                        <div className="dropdown-header noti-title">
                          <h6 className="text-overflow m-0">Welcome!</h6>
                        </div>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-single-02" />
                          <span>My profile</span>
                        </a>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-settings-gear-65" />
                          <span>Settings</span>
                        </a>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-calendar-grid-58" />
                          <span>Activity</span>
                        </a>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-support-16" />
                          <span>Support</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-user-run" />
                          <span>Logout</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Header */}
            {/* Header */}
            <div className="header bg-primary pb-6">
              <div className="container-fluid">
                <div className="header-body">
                  <div className="row align-items-center py-4">
                    <div className="col-lg-6 col-7 text-right">
                      <h6 className="h2 text-white d-inline-block mb-0">
                        Default
                      </h6>
                      <nav
                        aria-label="breadcrumb"
                        className="d-none d-md-inline-block ml-md-4"
                      >
                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                          <li className="breadcrumb-item">
                            <a href="#">
                              <i className="fas fa-home" />
                            </a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">Dashboards</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Default
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-lg-6 col-5 text-left">
                      <a href="#" className="btn btn-sm btn-neutral">
                        New
                      </a>
                      <a href="#" className="btn btn-sm btn-neutral">
                        Filters
                      </a>
                    </div>
                  </div>
                  {/* Card stats */}
                </div>
              </div>
            </div>

            <div class="container-fluid mt--6">
              <div class="row justify-content-center">
                <div class=" col ">
                  <div class="card">
                    <div class="card-header bg-transparent">
                      <h3 class="mb-0">Icons</h3>
                    </div>
                    <div class="card-body">
                      <div class="row icon-examples">
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="active-40"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-active-40"></i>
                              <span>active-40</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="air-baloon"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-air-baloon"></i>
                              <span>air-baloon</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="album-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-album-2"></i>
                              <span>album-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="align-center"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-align-center"></i>
                              <span>align-center</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="align-left-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-align-left-2"></i>
                              <span>align-left-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="ambulance"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-ambulance"></i>
                              <span>ambulance</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="app"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-app"></i>
                              <span>app</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="archive-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-archive-2"></i>
                              <span>archive-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="atom"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-atom"></i>
                              <span>atom</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="badge"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-badge"></i>
                              <span>badge</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bag-17"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bag-17"></i>
                              <span>bag-17</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="basket"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-basket"></i>
                              <span>basket</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bell-55"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bell-55"></i>
                              <span>bell-55</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bold-down"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bold-down"></i>
                              <span>bold-down</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bold-left"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bold-left"></i>
                              <span>bold-left</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bold-right"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bold-right"></i>
                              <span>bold-right</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bold-up"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bold-up"></i>
                              <span>bold-up</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bold"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bold"></i>
                              <span>bold</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="book-bookmark"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-book-bookmark"></i>
                              <span>book-bookmark</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="books"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-books"></i>
                              <span>books</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="box-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-box-2"></i>
                              <span>box-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="briefcase-24"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-briefcase-24"></i>
                              <span>briefcase-24</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="building"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-building"></i>
                              <span>building</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bulb-61"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bulb-61"></i>
                              <span>bulb-61</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bullet-list-67"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bullet-list-67"></i>
                              <span>bullet-list-67</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="bus-front-12"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-bus-front-12"></i>
                              <span>bus-front-12</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="button-pause"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-button-pause"></i>
                              <span>button-pause</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="button-play"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-button-play"></i>
                              <span>button-play</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="button-power"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-button-power"></i>
                              <span>button-power</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="calendar-grid-58"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-calendar-grid-58"></i>
                              <span>calendar-grid-58</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="camera-compact"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-camera-compact"></i>
                              <span>camera-compact</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="caps-small"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-caps-small"></i>
                              <span>caps-small</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="cart"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-cart"></i>
                              <span>cart</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="chart-bar-32"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-chart-bar-32"></i>
                              <span>chart-bar-32</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="chart-pie-35"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-chart-pie-35"></i>
                              <span>chart-pie-35</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="chat-round"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-chat-round"></i>
                              <span>chat-round</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="check-bold"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-check-bold"></i>
                              <span>check-bold</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="circle-08"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-circle-08"></i>
                              <span>circle-08</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="cloud-download-95"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-cloud-download-95"></i>
                              <span>cloud-download-95</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="cloud-upload-96"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-cloud-upload-96"></i>
                              <span>cloud-upload-96</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="compass-04"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-compass-04"></i>
                              <span>compass-04</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="controller"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-controller"></i>
                              <span>controller</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="credit-card"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-credit-card"></i>
                              <span>credit-card</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="curved-next"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-curved-next"></i>
                              <span>curved-next</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="delivery-fast"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-delivery-fast"></i>
                              <span>delivery-fast</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="diamond"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-diamond"></i>
                              <span>diamond</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="email-83"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-email-83"></i>
                              <span>email-83</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="fat-add"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-fat-add"></i>
                              <span>fat-add</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="fat-delete"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-fat-delete"></i>
                              <span>fat-delete</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="fat-remove"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-fat-remove"></i>
                              <span>fat-remove</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="favourite-28"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-favourite-28"></i>
                              <span>favourite-28</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="folder-17"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-folder-17"></i>
                              <span>folder-17</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="glasses-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-glasses-2"></i>
                              <span>glasses-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="hat-3"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-hat-3"></i>
                              <span>hat-3</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="headphones"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-headphones"></i>
                              <span>headphones</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="html5"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-html5"></i>
                              <span>html5</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="istanbul"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-istanbul"></i>
                              <span>istanbul</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="circle-08"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-circle-08"></i>
                              <span>circle-08</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="key-25"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-key-25"></i>
                              <span>key-25</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="laptop"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-laptop"></i>
                              <span>laptop</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="like-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-like-2"></i>
                              <span>like-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="lock-circle-open"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-lock-circle-open"></i>
                              <span>lock-circle-open</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="map-big"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-map-big"></i>
                              <span>map-big</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="mobile-button"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-mobile-button"></i>
                              <span>mobile-button</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="money-coins"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-money-coins"></i>
                              <span>money-coins</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="note-03"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-note-03"></i>
                              <span>note-03</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="notification-70"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-notification-70"></i>
                              <span>notification-70</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="palette"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-palette"></i>
                              <span>palette</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="paper-diploma"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-paper-diploma"></i>
                              <span>paper-diploma</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="pin-3"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-pin-3"></i>
                              <span>pin-3</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="planet"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-planet"></i>
                              <span>planet</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="ruler-pencil"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-ruler-pencil"></i>
                              <span>ruler-pencil</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="satisfied"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-satisfied"></i>
                              <span>satisfied</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="scissors"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-scissors"></i>
                              <span>scissors</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="send"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-send"></i>
                              <span>send</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="settings-gear-65"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-settings-gear-65"></i>
                              <span>settings-gear-65</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="settings"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-settings"></i>
                              <span>settings</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="single-02"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-single-02"></i>
                              <span>single-02</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="single-copy-04"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-single-copy-04"></i>
                              <span>single-copy-04</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="sound-wave"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-sound-wave"></i>
                              <span>sound-wave</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="spaceship"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-spaceship"></i>
                              <span>spaceship</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="square-pin"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-square-pin"></i>
                              <span>square-pin</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="support-16"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-support-16"></i>
                              <span>support-16</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="tablet-button"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-tablet-button"></i>
                              <span>tablet-button</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="tag"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-tag"></i>
                              <span>tag</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="tie-bow"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-tie-bow"></i>
                              <span>tie-bow</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="time-alarm"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-time-alarm"></i>
                              <span>time-alarm</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="trophy"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-trophy"></i>
                              <span>trophy</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="tv-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-tv-2"></i>
                              <span>tv-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="umbrella-13"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-umbrella-13"></i>
                              <span>umbrella-13</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="user-run"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-user-run"></i>
                              <span>user-run</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="vector"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-vector"></i>
                              <span>vector</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="watch-time"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-watch-time"></i>
                              <span>watch-time</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="world"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-world"></i>
                              <span>world</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="zoom-split-in"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-zoom-split-in"></i>
                              <span>zoom-split-in</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="collection"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-collection"></i>
                              <span>collection</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="image"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-image"></i>
                              <span>image</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="shop"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-shop"></i>
                              <span>shop</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="ungroup"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-ungroup"></i>
                              <span>ungroup</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="world-2"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-world-2"></i>
                              <span>world-2</span>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <button
                            type="button"
                            class="btn-icon-clipboard"
                            data-clipboard-text="ui-04"
                            title=""
                            data-original-title="Copy to clipboard"
                          >
                            <div>
                              <i class="ni ni-ui-04"></i>
                              <span>ui-04</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer class="footer pt-0">
                <div class="row align-items-center justify-content-lg-between">
                  <div class="col-lg-6">
                    <div class="copyright text-center  text-lg-left  text-muted">
                      <a
                        href="https://www.creative-tim.com"
                        class="font-weight-bold ml-1"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          class="nav-link"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          class="nav-link"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="http://blog.creative-tim.com"
                          class="nav-link"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                          class="nav-link"
                          target="_blank"
                        >
                          MIT License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          {/* Argon Scripts */}
          {/* Core */}
          {/* Optional JS */}
          {/* Argon JS */}
        </div>
      </body>
    </>
  );
}

export default About;
