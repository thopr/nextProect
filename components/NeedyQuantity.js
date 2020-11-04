import React, { useState, useEffect } from "react";

function NeedyQuantity({ data, recalculate, openModal }) {
  const [value, setvalue] = useState(data.share);
  return (
    <tr>
      <th scope="row">
        <div className="media align-items-center">
          <div className="media-body">
            <span className="name mb-0 text-sm">{data.Name}</span>
          </div>
        </div>
      </th>
      <td className="budget">{data.mempersCount}</td>
      <td className="budget">
        {" "}
        {data.lastCoubon == "0000-00-00" ? "لم يستلم" : data.lastCoubon}
      </td>

      <td className="budget">{data.totalCoubons}</td>

      <td className="budget">
        {data.priority == "normal"
          ? "عايدي"
          : data.priority == "critical"
          ? "حرجة"
          : data.priority == "superCritical"
          ? "حرجة جدا"
          : data.priority}
      </td>
      <td className="budget">
        <button
          type="button"
          class="btn"
          data-toggle="modal"
          data-target="#modal-default"
          onClick={() => {
            openModal(data, "cards");
          }}
        >
          البطاقات
        </button>
      </td>
      <td className="budget">
        <button
          type="button"
          class="btn"
          onClick={() => {
            openModal(data, "stats");
          }}
        >
          معلومات
        </button>
      </td>

      <td className="budget">
        <input
          style={{ textAlign: "center" }}
          type="text"
          className="messageCheckbox"
          name={data.id + "number"}
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
            recalculate(e.target.value, data.id);
          }}
        />
      </td>
    </tr>
  );
}

export default NeedyQuantity;
