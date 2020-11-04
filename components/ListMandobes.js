import React, { useState, useEffect } from "react";

import { GetAllMandobes } from "../services/api_get";
import Skeleton from "react-loading-skeleton";

import useAuth from "../contexts/auth.js";

function ListMandobes({ user_id, mandobe_id, setNewMandobe_id }) {
  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [firstime, setfirstTime] = useState(true);
  const [MandobeName, setMandobeName] = useState("");

  const { data, isLoading, isError } = GetAllMandobes();
  useEffect(() => {
    console.log("test2]]]]]]]]]]]]]");
    setfirstTime(true);
    setMandobeName("");
    setNewMandobe_id(false);
    localStorage.mandobeCity = "";
  }, [user_id]);

  const results = isLoading ? false : data.data;
  console.log(results);

  const showSkeleton = isLoading || loading;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {results ? (
              results.length > 0 ? (
                <div dir="rtl" style={{ textAlign: "right" }}>
                  {MandobeName != "" ? (
                    <p style={{ fontSize: 20 }}>
                      المندوب الحالي : {MandobeName}{" "}
                    </p>
                  ) : (
                    <p style={{ fontSize: 20 }}>لم يتم تحديد المندوب</p>
                  )}
                  {results.map((mandobe, index) => {
                    if (mandobe_id == mandobe.id && firstime) {
                      setMandobeName(mandobe.Name);
                      setfirstTime(false);
                    }
                    if (localStorage.mandobeCity == mandobe.city) {
                      return (
                        <>
                          <div class="custom-control custom-radio mb-3">
                            <input
                              type="radio"
                              id={mandobe.Name + mandobe.id}
                              name="customRadio"
                              class="custom-control-input"
                              onChange={(e) => {
                                // console.log(mandobe.id);
                                setNewMandobe_id(mandobe.id);
                                console.log(e.target.value);
                              }}
                            />
                            <label
                              class="custom-control-label"
                              for={mandobe.Name + mandobe.id}
                            >
                              {" "}
                              {mandobe.Name}
                            </label>
                          </div>
                        </>
                      );
                    } else {
                      localStorage.mandobeCity = mandobe.city;
                      console.log("triggerd");
                      return (
                        <>
                          <h2>{mandobe.city}</h2>

                          <div class="custom-control custom-radio mb-3">
                            <input
                              type="radio"
                              id={mandobe.Name + mandobe.id}
                              name="customRadio"
                              class="custom-control-input"
                              onChange={(e) => {
                                setNewMandobe_id(mandobe.id);
                                console.log(e.target.value);
                              }}
                            />
                            <label
                              class="custom-control-label"
                              for={mandobe.Name + mandobe.id}
                            >
                              {" "}
                              {mandobe.Name}
                            </label>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              ) : (
                <h1 style={{ textAlign: "center" }}>لا يوجد مندوبين </h1>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
    </>
  );
}

export default ListMandobes;
