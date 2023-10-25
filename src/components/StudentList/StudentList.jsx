import { Link } from "react-router-dom";
import "./StudentList.css";
export const StudentsList = ({ students }) => {
  return (
    <table className="students__list">
      <thead>
        <td>Name</td>
        <td>Age</td>
        <td>Standard</td>
        <td>Grade</td>
        <td>Marks</td>
        <td>Attendance</td>
        <td>Gender</td>
        <td>Details</td>
      </thead>
      <tbody>
        {students.map((student) => {
          const { _id, name, age, grade, marks, attendance, gender, standard } =
            student;
          return (
            <tr key={_id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{standard}</td>
              <td>{grade}</td>
              <td>{marks ? marks : "-"}</td>
              <td>{attendance ? attendance : "-"}</td>
              <td>{gender ? gender : "-"}</td>
              <td>
                <Link to={`/students/${_id}`}>View</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
