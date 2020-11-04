import Admin_nav from "../components/Admin_nav";
import React, { useState, useEffect } from "react";
import { set } from "js-cookie";

function Table() {
  //const [project,setProject] = useState(false);
  const [project, setProject] = useState(0);

  return (
    <>
      <body className="rtl g-sidenav-show g-sidenav-pinned" dir="rtl">
        <div>
          {/* Sidenav */}
          <Admin_nav />
          {/* Main content */}

          <div class="main-content" id="panel">
            {/* Topnav */}
            <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
              <div className="container-fluid">
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
                      {/* Light table */}
                      <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                          <thead className="thead-light">
                            <tr>
                              <th
                                scope="col"
                                className="sort"
                                data-sort="name"
                                onClick={() => {
                                  if (project == 0) setProject(1);
                                  if (project == 1) setProject(2);
                                  if (project == 2) setProject(1);
                                }}
                              >
                                Project{" "}
                                {project == 0 ? (
                                  ""
                                ) : project == 1 ? (
                                  <i
                                    class="fa fa-arrow-up"
                                    aria-hidden="true"
                                  ></i>
                                ) : (
                                  <i
                                    class="fa fa-arrow-down"
                                    aria-hidden="true"
                                  ></i>
                                )}
                              </th>
                              <th
                                scope="col"
                                className="sort"
                                data-sort="budget"
                              >
                                Budget
                              </th>
                              <th
                                scope="col"
                                className="sort"
                                data-sort="status"
                              >
                                Status
                              </th>
                              <th scope="col">Users</th>
                              <th
                                scope="col"
                                className="sort"
                                data-sort="completion"
                              >
                                Completion
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <th scope="row">
                                <div className="media align-items-center">
                                  <a
                                    href="#"
                                    className="avatar rounded-circle mr-3"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/bootstrap.jpg"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <span className="name mb-0 text-sm">
                                      Argon Design System
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="budget">$2500 USD</td>
                              <td>
                                <span className="badge badge-dot mr-4">
                                  <i className="bg-warning" />
                                  <span className="status">pending</span>
                                </span>
                              </td>
                              <td>
                                <div className="avatar-group">
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Ryan Tompson"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-1.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Romina Hadid"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-2.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Alexander Smith"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-3.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Jessica Doe"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-4.jpg"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="completion mr-2">60%</span>
                                  <div>
                                    <div className="progress">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "60%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right">
                                <div className="dropdown">
                                  <a
                                    className="btn btn-sm btn-icon-only text-light"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="media align-items-center">
                                  <a
                                    href="#"
                                    className="avatar rounded-circle mr-3"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/angular.jpg"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <span className="name mb-0 text-sm">
                                      Angular Now UI Kit PRO
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="budget">$1800 USD</td>
                              <td>
                                <span className="badge badge-dot mr-4">
                                  <i className="bg-success" />
                                  <span className="status">completed</span>
                                </span>
                              </td>
                              <td>
                                <div className="avatar-group">
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Ryan Tompson"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-1.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Romina Hadid"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-2.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Alexander Smith"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-3.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Jessica Doe"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-4.jpg"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="completion mr-2">100%</span>
                                  <div>
                                    <div className="progress">
                                      <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right">
                                <div className="dropdown">
                                  <a
                                    className="btn btn-sm btn-icon-only text-light"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="media align-items-center">
                                  <a
                                    href="#"
                                    className="avatar rounded-circle mr-3"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/sketch.jpg"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <span className="name mb-0 text-sm">
                                      Black Dashboard
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="budget">$3150 USD</td>
                              <td>
                                <span className="badge badge-dot mr-4">
                                  <i className="bg-danger" />
                                  <span className="status">delayed</span>
                                </span>
                              </td>
                              <td>
                                <div className="avatar-group">
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Ryan Tompson"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-1.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Romina Hadid"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-2.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Alexander Smith"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-3.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Jessica Doe"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-4.jpg"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="completion mr-2">72%</span>
                                  <div>
                                    <div className="progress">
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow={72}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "72%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right">
                                <div className="dropdown">
                                  <a
                                    className="btn btn-sm btn-icon-only text-light"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="media align-items-center">
                                  <a
                                    href="#"
                                    className="avatar rounded-circle mr-3"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/react.jpg"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <span className="name mb-0 text-sm">
                                      React Material Dashboard
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="budget">$4400 USD</td>
                              <td>
                                <span className="badge badge-dot mr-4">
                                  <i className="bg-info" />
                                  <span className="status">on schedule</span>
                                </span>
                              </td>
                              <td>
                                <div className="avatar-group">
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Ryan Tompson"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-1.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Romina Hadid"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-2.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Alexander Smith"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-3.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Jessica Doe"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-4.jpg"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="completion mr-2">90%</span>
                                  <div>
                                    <div className="progress">
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "90%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right">
                                <div className="dropdown">
                                  <a
                                    className="btn btn-sm btn-icon-only text-light"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="media align-items-center">
                                  <a
                                    href="#"
                                    className="avatar rounded-circle mr-3"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/vue.jpg"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <span className="name mb-0 text-sm">
                                      Vue Paper UI Kit PRO
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="budget">$2200 USD</td>
                              <td>
                                <span className="badge badge-dot mr-4">
                                  <i className="bg-success" />
                                  <span className="status">completed</span>
                                </span>
                              </td>
                              <td>
                                <div className="avatar-group">
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Ryan Tompson"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-1.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Romina Hadid"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-2.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Alexander Smith"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-3.jpg"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="avatar avatar-sm rounded-circle"
                                    data-toggle="tooltip"
                                    data-original-title="Jessica Doe"
                                  >
                                    <img
                                      alt="Image placeholder"
                                      src="../assets/img/theme/team-4.jpg"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="completion mr-2">100%</span>
                                  <div>
                                    <div className="progress">
                                      <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-right">
                                <div className="dropdown">
                                  <a
                                    className="btn btn-sm btn-icon-only text-light"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

export default Table;
