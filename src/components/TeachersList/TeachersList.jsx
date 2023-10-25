import { Link } from "react-router-dom";
export const TeachersList = ({ teachers }) => {
  return (
    <table className="students__list">
      <thead>
        <td>Name</td>
        <td>Standard</td>
        <td>Subject</td>
        <td>Gender</td>
        <td>Contact</td>
        <td>Details</td>
      </thead>
      <tbody>
        {teachers.map((teacher) => {
          const { _id, name, gender, subject, standard, contact } = teacher;
          return (
            <tr key={_id}>
              <td>{name}</td>
              <td>{standard}</td>
              <td>{subject}</td>
              <td>{gender ? gender : "-"}</td>
              <td>{contact}</td>
              <td>
                <Link to={`/teachers/${_id}`}>View</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
