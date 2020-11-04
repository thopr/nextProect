function PersonType(props) {
  return (
    <tr
      style={
        props.name ==
        "حصة العائلة من الكوبونات (فقط للتسهيل يمكن تغير الكمية وقت الصرف)"
          ? { backgroundColor: "#5E72E4", color: "white" }
          : {}
      }
    >
      <th scope="row">
        <div className="media align-items-center">
          <div className="media-body">
            <span className="name mb-0 text-sm">{props.name} </span>
          </div>
        </div>
      </th>
      <td className="budget">
        <input
          type="text"
          onChange={(e) => {
            props.somef(e);
          }}
          className="form-control numher-person-type"
          style={{ textAlign: "center" }}
          value={props.theState}
        />
      </td>
    </tr>
  );
}

export default PersonType;
