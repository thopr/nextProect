import React, { useState, useEffect } from "react";
import Router from "next/router";
import useSWR, { mutate } from "swr";
import api from "../services/Api";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import Skeleton from "react-loading-skeleton";

function Dash() {
  const { user, loading } = useAuth();
  // const [tests, settests] = useState();
  // const [showSkeleton, setshowSkeleton] = useState();

  const { data: { data: tests } = {}, isValidating } = useSWR(
    loading ? false : "rabwa/test",
    api.post,
    {
      // refreshInterval: 1000,
    }
  );

  const showSkeleton = isValidating || loading;

  /*useEffect(() => {
    //login("b6447333@gmail.com", "123");

    if (!loading) {
      setshowSkeleton(true);
      api.post("rabwa/test", { di: "d" }).then((res) => {
        settests(res.data);
        setshowSkeleton(false);
      });
    }
  }, [loading]);*/

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1 test-id="dashboard-title">These are your tests</h1>
            <br />

            <table className="table table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">number</th>
                </tr>
              </thead>
              <tbody>
                {tests
                  ? tests.map((test, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{test.name}</td>
                        <td>{test.number}</td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
            {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProtectRoute(Dash);
