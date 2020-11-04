function NeedyCheckApproveMandobe({ data, approve, reject }) {
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
      <td className="budget">{data.phone}</td>
      <td className="budget">{data.email}</td>

      <td className="budget">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#modal-default"
          onClick={() => {
            approve(data);
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

export default NeedyCheckApproveMandobe;
