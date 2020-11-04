import React, { useState, useEffect } from "react";

function PersonNeeds({ data, updateArray, removeUser, UserMeta }) {
  const [state, setstate] = useState(false);

  useEffect(() => {
    let UserNeeds = UserMeta.data.needs;
    let temps = false;
    for (let i = 0; i < UserNeeds.length; i++) {
      if (UserNeeds[i].Category_id == data.id) {
        console.log("onec");
        //  temps = true;
        setstate(true);
        //
      }
    }
  }, []);

  /*if (temps) {
    setstate(true);
  }*/
  return (
    <tr>
      <th scope="row">
        <div className="media align-items-center">
          <div className="media-body">
            <span className="name mb-0 text-sm">{data.name} </span>
          </div>
        </div>
      </th>
      <td className="budget">
        <input
          type="checkbox"
          className="messageCheckbox"
          name="sport"
          onChange={(e) => {
            setstate(!state);
            console.log("فحص التشييك مستخدم");
            console.log(state);
            if (state) {
              removeUser(data.id);
            } else {
              updateArray(data);
            }
          }}
          value={data.id}
          checked={state}
        />
      </td>
    </tr>
  );
}

export default PersonNeeds;
