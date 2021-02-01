function NeedyCheckMandobes({
  data,
  myEditUser,
  myDisUser,
  setmandobe_id,
  setusersInfoMode,
  setCurrenMandomeName,
}) {
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
      <td className="budget">{data.UsersCount}</td>
      <td className="budget">
        <button
          className="btn btn-info "
          onClick={() => {
            console.log(data.id);
            setmandobe_id(data.id);
            setCurrenMandomeName(data.Name);
            setusersInfoMode(true);
          }}
        >
          المستفيدين
        </button>
      </td>

      <td className="budget">
        <div class="dropdown">
          <a
            class="btn btn-sm btn-icon-only text-light"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
            <a
              onClick={() => {
                myEditUser(data);
              }}
              class="dropdown-item"
            >
              تعديل بيانات الجمعية
            </a>

            {data.approvalStatus == 1 ? (
              <a
                onClick={() => {
                  myDisUser(data.id, 2);
                }}
                class="dropdown-item"
              >
                تعطيل حساب الجمعية
              </a>
            ) : (
              <a
                onClick={() => {
                  myDisUser(data.id, 1);
                }}
                class="dropdown-item"
              >
                تفعيل حساب الجمعية
              </a>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default NeedyCheckMandobes;
