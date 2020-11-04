import React, { useState, useEffect, useMemo } from "react";

import Header from "../components/header";
import useAuth, { ProtectRoute } from "../contexts/auth.js";

import { getCompany } from "../services/api_get";
import Skeleton from "react-loading-skeleton";
import Router from "next/router";

function Home() {
  useEffect(() => {
    //Router.push("/CompanysStatistics");
    //login("b6447333@gmail.com", "123");
  }, []);
  return <></>;
}

export default Home;
