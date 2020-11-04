function CheckNeedy({ data, approve, reject, openModal, setmodalType }) {
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
      <td className="budget">{data.phone}</td>

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
          class="btn btn"
          data-toggle="modal"
          data-target="#modal-default"
          onClick={() => {
            openModal(data, "stats");
          }}
        >
          معلومات
        </button>
      </td>
      <td className="budget">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#modal-default"
          onClick={() => {
            setmodalType(data);
            openModal(data, "updateMandobe");
          }}
        >
          موافقة
        </button>
      </td>
      <td className="budget">
        <button
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target="#modal-default"
          onClick={() => {
            reject(data);
          }}
        >
          رفض
        </button>
      </td>
    </tr>
  );
}

export default CheckNeedy;
