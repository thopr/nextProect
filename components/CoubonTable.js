import React, { useState, useEffect } from "react";
import Admin_nav from "./Admin_nav";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import useAuth, { ProtectRoute } from "../contexts/auth.js";
import { GetCouponsByBracnhCat } from "../services/api_get";

import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { mutate } from "swr";

const CoubonTable = ({
  selected,
  reqoiredAmount,
  Categoryid,
  Branchid,
  pool,
}) => {
  const router = useRouter();

  const { user, isAuthenticated, loading } = useAuth();
  const [MyRes, setMyRes] = useState([]);
  const [firstTime, setfirstTime] = useState(true);
  const [mypool, setmypool] = useState([]);

  useEffect(() => {
    if (!isAuthenticated && !loading) Router.push("/login");
  }, [loading, isAuthenticated]);
  /*
  useEffect(() => {
    /* mutate(
      "rabwa/GetCouponsByBracnhCat?Branchid=" +
        Branchid +
        "&Categoryid=" +
        Categoryid
    );*/
  /*
    if (JSON.stringify(pool) != JSON.stringify(mypool)) {
      setmypool(pool);
    }
  });*/

  const { data, isLoading, isError } = GetCouponsByBracnhCat(
    Branchid,
    Categoryid
  );

  const results = isLoading ? false : data.data;
  console.log(results);

  const showSkeleton = isLoading || loading;

  function checkcoubon(Section_id) {
    let tempcheck = false;
    let favorite = pool;
    for (let index = 0; index < favorite.length; index++) {
      const element = favorite[index];
      if (element.Section_id == Section_id) {
        tempcheck = true;
      }
    }

    return tempcheck;
  }

  if (firstTime && results) {
    setMyRes(results);

    setfirstTime(false);
  }

  return (
    <div>
      <div className="table-responsive">
        {results ? (
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th scope="col" data-sort="name">
                  الإسم
                </th>

                <th scope="col" data-sort="status">
                  النوع
                </th>
                <th scope="col" data-sort="completion">
                  الكمية
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody className="list">
              {results.map((coubon, index) => {
                return (
                  <tr>
                    <td className="name">
                      <span className="text-lg">{coubon.name}</span>
                    </td>

                    <td className="name">
                      {coubon.type == "cash" ? (
                        <span class="badge badge-pill badge-lg badge-secondary">
                          <img
                            className="avatar avatar-sm rounded-circle"
                            src="/assets/img/icons/cash.jpg"
                            height="40"
                            width="40"
                          />
                        </span>
                      ) : coubon.type == "basket" ? (
                        <span class="badge badge-pill badge-lg badge-secondary">
                          <img
                            className="avatar avatar-sm rounded-circle"
                            src="/assets/img/icons/basket.jpg"
                            height="40"
                            width="40"
                          />
                        </span>
                      ) : coubon.type == "discount" ? (
                        <span class="badge badge-pill badge-lg badge-secondary">
                          <img
                            className="avatar avatar-sm rounded-circle"
                            src="/assets/img/icons/discount.jpg"
                            height="40"
                            width="40"
                          />
                        </span>
                      ) : (
                        ""
                      )}
                    </td>

                    <td className="name">
                      <span className="text-lg">{coubon.amount - 1}</span>
                    </td>

                    {pool ? (
                      <td className="name">
                        {reqoiredAmount <= coubon.amount - 1 ? (
                          checkcoubon(coubon.Section_id) ? (
                            <button
                              type="button"
                              class="btn btn-default"
                              onClick={() => {
                                selected(
                                  coubon.amount - 1,
                                  coubon.Section_id,
                                  coubon.name,
                                  "remove"
                                );
                              }}
                            >
                              إلغاء
                            </button>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-default"
                              onClick={() => {
                                selected(
                                  coubon.amount - 1,
                                  coubon.Section_id,
                                  coubon.name,
                                  "add"
                                );
                              }}
                            >
                              إضافة
                            </button>
                          )
                        ) : (
                          <button
                            type="button"
                            class="btn btn-default"
                            disabled
                          >
                            إضافة
                          </button>
                        )}
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
        {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
      </div>
    </div>
  );
};

export default CoubonTable;
