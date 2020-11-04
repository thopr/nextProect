import Cookies from "js-cookie";

function NeedyCheckUsers({ data, myEditUser, myDisUser, openModal }) {
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
        {data.approvalStatus == 1 ? (
          <p style={{ color: "green" }}>فعال</p>
        ) : (
          <p style={{ color: "red" }}>عاطل</p>
        )}
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
              تعديل بيانات المستفيد
            </a>
            {Cookies.get("UserType") == "admin" ? (
              <a
                onClick={() => {
                  openModal(data, "updateMandobe");
                }}
                class="dropdown-item"
                data-toggle="modal"
                data-target="#modal-default"
              >
                تغير المندوب
              </a>
            ) : (
              ""
            )}
            {Cookies.get("UserType") == "admin" ? (
              <>
                {data.approvalStatus == 1 ? (
                  <a
                    onClick={() => {
                      myDisUser(data.user_id, 2);
                    }}
                    class="dropdown-item"
                  >
                    تعطيل حساب المستفيد
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      myDisUser(data.user_id, 1);
                    }}
                    class="dropdown-item"
                  >
                    تفعيل حساب المستفيد
                  </a>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default NeedyCheckUsers;
