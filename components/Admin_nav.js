import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

import useAuth, { ProtectRoute } from "../contexts/auth.js";

function Admin_nav() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const { toggler, settoggler, loading, logout } = useAuth();

  useEffect(() => {
    // device detection
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // settoggler(false);
    }
  });
  return (
    <nav
      className="aafa sidenav navbar navbar-vertical  fixed-right  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner" style={{ backgroundColor: "#F5F6F8" }}>
        {/* Brand */}
        <div
          style={{ display: "none" }}
          className="sidenav-header  align-items-center"
        >
          <a className="navbar-brand" href="javascript:void(0)">
            <img
              src="../assets/img/brand/blue.png"
              className="navbar-brand-img"
              alt="..."
            />
          </a>
        </div>
        <div className="navbar-inner">
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Nav items */}
            {Cookies.get("UserType") == "admin" ? (
              <>
                <ul className="navbar-nav" style={{ textAlign: "right" }}>
                  <img
                    onClick={() => {
                      logout();

                      router.push("/Management");
                    }}
                    src={"/logo.png"}
                  />
                  <hr />
                  <div style={{ marginBottom: "10px" }} className="row">
                    <div className="col-4">
                      <img
                        width="100%"
                        height="100%"
                        style={{ marginRight: "10%", borderRadius: "30px" }}
                        src={Cookies.get("profile_pic")}
                      />
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <p style={{ marginBottom: "-1px", fontWeight: "bold" }}>
                          {Cookies.get("first_name") +
                            " " +
                            Cookies.get("last_name")}
                        </p>
                      </div>
                      <div className="row">
                        <div style={{ color: "#4CAF50" }} className="col-auto">
                          مدير
                        </div>
                        <div className="col-auto" style={{ marginTop: "3%" }}>
                          {" "}
                          <Link
                            //href={{ pathname: "/about", query: { name: "test" } }}
                            href="/UpdateProfileA"
                            // replace
                          >
                            <a>
                              <i class="ni ni-settings-gear-65" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <li className="nav-item">
                    <Link
                      //href={{ pathname: "/about", query: { name: "test" } }}
                      href="/CompanysStatistics"
                      // replace
                    >
                      <a
                        className={
                          router.pathname == "/CompanysStatistics"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/CompanysStatistics"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-chart-pie-35 text-orange" />
                        <span className="nav-link-text">إحصائيات الشركات</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/companys">
                      <a
                        className={
                          router.pathname == "/companys"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/companys"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-building text-info" />
                        <span className="nav-link-text">
                          {" "}
                          إدارة الشركات والكوبونات
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/DistributeCoupons">
                      <a
                        className={
                          router.pathname == "/DistributeCoupons"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/DistributeCoupons"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-tag text-danger" />
                        <span className="nav-link-text">صرف الكوبونات</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Needs">
                      <a
                        className={
                          router.pathname == "/Needs"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/Needs"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-archive-2 " />
                        <span className="nav-link-text">إدارة الإحتياجات</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Users">
                      <a
                        className={
                          router.pathname == "/Users"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/Users"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-single-02 text-primary" />
                        <span className="nav-link-text">جميع المستفيدين</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/RegisterUser">
                      <a
                        className={
                          router.pathname == "/RegisterUser"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/RegisterUser"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-circle-08 " />
                        <span className="nav-link-text">تسجيل مستفيد</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/CCA">
                      <a
                        className={
                          router.pathname == "/CCA"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/CCA"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-circle-08 " />
                        <span className="nav-link-text">
                          الدول والمدن والمناطق
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/ApproveUsers">
                      <a
                        className={
                          router.pathname == "/ApproveUsers"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/ApproveUsers"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-circle-08 " />
                        <span className="nav-link-text">إعتماد المستفيدين</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Mandobes">
                      <a
                        className={
                          router.pathname == "/Mandobes"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/Mandobes"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-briefcase-24 text-primary " />
                        <span className="nav-link-text">جميع الجمعيات</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/RegisterMandobe">
                      <a
                        className={
                          router.pathname == "/RegisterMandobe"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/RegisterMandobe"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-briefcase-24 " />
                        <span className="nav-link-text">تسجيل جمعية</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/ApproveMandobes">
                      <a
                        className={
                          router.pathname == "/ApproveMandobes"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/ApproveMandobes"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-briefcase-24 " />
                        <span className="nav-link-text">إعتماد جمعية</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Sponsor">
                      <a
                        className={
                          router.pathname == "/Sponsor"
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style={
                          router.pathname == "/Sponsor"
                            ? { backgroundColor: "#c7e4ae" }
                            : {}
                        }
                      >
                        <i className="ni ni-briefcase-24 " />
                        <span className="nav-link-text">الداعمين</span>
                      </a>
                    </Link>
                  </li>
                  <img
                    onClick={() => {
                      logout();

                      router.push("/Management");
                    }}
                    src={"/logo.png"}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      backgroundColor: "rgb(245,246,248)",
                    }}
                  >
                    <p>الدعم الفني</p>
                    <p>INFO@GUTURESAGES.COM</p>
                  </div>
                </ul>
              </>
            ) : Cookies.get("UserType") == "Company" ? (
              <ul className="navbar-nav">
                <img src={"/logo.png"} />
                <hr />
                <div style={{ marginBottom: "10px" }} className="row">
                  <div className="col-4">
                    <img
                      width="100%"
                      height="100%"
                      style={{ marginRight: "10%", borderRadius: "30px" }}
                      src={Cookies.get("profile_pic")}
                    />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <p style={{ marginBottom: "-1px", fontWeight: "bold" }}>
                        {Cookies.get("first_name") +
                          " " +
                          Cookies.get("last_name")}
                      </p>
                    </div>
                    <div className="row">
                      <div style={{ color: "#4CAF50" }} className="col-auto">
                        شركة
                      </div>
                      <div className="col-auto">
                        {" "}
                        <Link
                          //href={{ pathname: "/about", query: { name: "test" } }}
                          href="/UpdateProfileC"
                          // replace
                        >
                          <a>تعديل</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <li className="nav-item">
                  <Link
                    //href={{ pathname: "/about", query: { name: "test" } }}
                    href="/CompanyStatistics"
                    // replace
                  >
                    <a
                      className={
                        router.pathname == "/CompanyStatistics"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      style={
                        router.pathname == "/CompanyStatistics"
                          ? { backgroundColor: "#c7e4ae" }
                          : {}
                      }
                    >
                      <i className="ni ni-chart-pie-35 text-orange" />
                      <span className="nav-link-text">إحصائيات</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/company">
                    <a
                      className={
                        router.pathname == "/company"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      style={
                        router.pathname == "/company"
                          ? { backgroundColor: "#c7e4ae" }
                          : {}
                      }
                    >
                      <i className="ni ni-building text-info" />
                      <span className="nav-link-text">
                        {" "}
                        إدارة الفروع والكوبونات
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/CompanySponsors">
                    <a
                      className={
                        router.pathname == "/CompanySponsors"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      style={
                        router.pathname == "/CompanySponsors"
                          ? { backgroundColor: "#c7e4ae" }
                          : {}
                      }
                    >
                      <i className="ni ni-building text-info" />
                      <span className="nav-link-text"> الداعمين</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    style={{
                      width: "95%",
                      marginTop: "53px",
                      float: "right",
                      marginRight: "5px",
                    }}
                    type="button"
                    type="submit"
                    class="btn btn-danger"
                    onClick={() => {
                      logout();

                      router.push("/login");
                    }}
                  >
                    تسجيل الخروج
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <img src={"/logo.png"} />
                <hr />
                <div style={{ marginBottom: "10px" }} className="row">
                  <div className="col-4">
                    <img
                      width="100%"
                      height="100%"
                      style={{ marginRight: "10%", borderRadius: "30px" }}
                      src={Cookies.get("profile_pic")}
                    />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <p style={{ marginBottom: "-1px", fontWeight: "bold" }}>
                        {Cookies.get("first_name") +
                          " " +
                          Cookies.get("last_name")}
                      </p>
                    </div>
                    <div className="row">
                      <div style={{ color: "#4CAF50" }} className="col-auto">
                        جمعية
                      </div>
                      <div className="col-auto">
                        {" "}
                        <Link
                          //href={{ pathname: "/about", query: { name: "test" } }}
                          href="/UpdateProfileM"
                          // replace
                        >
                          <a>تعديل</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <li className="nav-item">
                  <Link
                    //href={{ pathname: "/about", query: { name: "test" } }}
                    href="/MyUsers"
                    // replace
                  >
                    <a
                      className={
                        router.pathname == "/MyUsers"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      style={
                        router.pathname == "/MyUsers"
                          ? { backgroundColor: "#c7e4ae" }
                          : {}
                      }
                    >
                      <i className="ni ni-chart-pie-35 text-orange" />
                      <span className="nav-link-text">المستفيدين</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/Register_User">
                    <a
                      className={
                        router.pathname == "/Register_User"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      style={
                        router.pathname == "/Register_User"
                          ? { backgroundColor: "#c7e4ae" }
                          : {}
                      }
                    >
                      <i className="ni ni-building text-info" />
                      <span className="nav-link-text"> تسجيل مستفيد</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/ApproveUsersM">
                    <a
                      className={
                        router.pathname == "/ApproveUsersM"
                          ? "nav-link active"
                          : "nav-link "
                      }
                      style={
                        router.pathname == "/ApproveUsersM"
                          ? { backgroundColor: "#c7e4ae" }
                          : {}
                      }
                    >
                      <i className="ni ni-building text-info" />
                      <span className="nav-link-text"> إعتماد المستفيدين</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    style={{
                      width: "95%",
                      marginTop: "53px",
                      float: "right",
                      marginRight: "5px",
                    }}
                    type="button"
                    type="submit"
                    class="btn btn-danger"
                    onClick={() => {
                      logout();

                      router.push("/login");
                    }}
                  >
                    تسجيل الخروج
                  </button>
                </li>
              </ul>
            )}
            {/* Divider */}

            {/* Heading */}

            {/* Navigation */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Admin_nav;
