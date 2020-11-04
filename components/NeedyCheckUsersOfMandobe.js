import Cookies from "js-cookie";

function NeedyCheckUsersOfMandobe({ data, myEditUser, myDisUser, openModal }) {
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
    </tr>
  );
}

export default NeedyCheckUsersOfMandobe;
