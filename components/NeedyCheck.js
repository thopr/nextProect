function CheckNeedy({ data, updateArray, removeUser, openModal }) {
  console.log(data);
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
        {data.lastCoubon == "0000-00-00" ? "لا يوجد" : data.lastCoubon}
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
          type="checkbox"
          className="messageCheckbox"
          name="sport"
          onChange={(e) => {
            if (e.target.checked) {
              updateArray(data);
            } else {
              removeUser(data.id);
            }
          }}
          value={data.name}
        />
      </td>
    </tr>
  );
}

export default CheckNeedy;
