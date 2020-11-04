import React, { useState } from "react";

import { getUserCards } from "../services/api_get";
import Skeleton from "react-loading-skeleton";

import useAuth from "../contexts/auth.js";

function UserCards({ user_id }) {
  const { toggler, settoggler, loading } = useAuth();
  const [spinner, setspinner] = useState(false);
  const [InputTypedis, setInputTypedis] = useState(false);
  const [InputTypecode, setInputTypecode] = useState(false);

  const { data, isLoading, isError } = getUserCards(user_id);

  const results = isLoading ? false : data.data;

  console.log(results);
  const showSkeleton = isLoading || loading;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {results.length > 0 ? (
              <>
                {results.map((card, index) => {
                  var d = new Date();
                  var myd = new Date(card.end);
                  return (
                    <>
                      <div key={index} class="card" style={{ width: "100%" }}>
                        <img class="card-img-top" src={card.img} />
                        <div class="card-body">
                          <h5 class="card-title">{card.name} </h5>
                          <p class="card-text">{card.des}</p>
                          {myd.getTime() >= d.getTime() ? (
                            <p style={{ color: "green" }} class="card-text">
                              {" "}
                              تنتهي : {card.end}
                            </p>
                          ) : (
                            <p style={{ color: "red" }} class="card-text">
                              {" "}
                              منتهية : {card.end}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <h1 style={{ textAlign: "center" }}>لا توجد بطاقات </h1>
            )}
          </div>
        </div>
      </div>

      {showSkeleton ? <Skeleton height={40} count={10} /> : ""}
    </>
  );
}

export default UserCards;
