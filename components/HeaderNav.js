import React, { useState } from "react"; //
import useAuth from "../contexts/auth.js";
import { useRouter } from "next/router";

import Link from "next/link";

function Header() {
  const { toggler, settoggler } = useAuth();
  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <a
          class="nav-link"
          role="button"
          href="#"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            display: "block",
            zIndex: "99999999999999999",
            position: "relative",
            height: "40px",
            backgroundColor: "white",
            padding: "10px",
            marginRight: "10px",
          }}
          onClick={() => {
            settoggler(!toggler);
          }}
        >
          <i className="ni ni-align-left-2"></i>
        </a>
      </nav>
      {/* Header */}
      {/* Header */}
      <div className="header bg-primary pb-6"></div>
    </>
  );
}

export default Header;
