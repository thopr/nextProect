function PersonNeeds({ data, updateArray, removeUser }) {
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
            if (e.target.checked) {
              updateArray(data);
            } else {
              removeUser(data.id);
            }
          }}
          value={data.id}
        />
      </td>
    </tr>
  );
}

export default PersonNeeds;
