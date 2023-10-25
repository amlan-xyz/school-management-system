import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteStudentAsync } from "../../features/students/studentSlice";
import "./StudentDetails.css";
export const StudentDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === id)
  );

  if (!student) {
    return <div className="center">Student Not Found</div>;
  }

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync({ id }));
  };

  return (
    <div className="student__details">
      <div className="student__body">
        <h1>Student Details</h1>
        <p>
          {" "}
          <b>Name:</b> <span>{student.name}</span>
        </p>
        <p>
          {" "}
          <b>Age:</b> <span>{student.age}</span>
        </p>
        <p>
          {" "}
          <b>Grade:</b> <span>{student.grade}</span>
        </p>
        <p>
          {" "}
          <b>Marks:</b> <span>{student.marks}</span>
        </p>
        <p>
          {" "}
          <b>Attendance:</b> <span>{student.attendance}</span>
        </p>
        <p>
          {" "}
          <b>Gender :</b> <span>{student.gender}</span>
        </p>
        <Link
          className="submit__btn"
          to={`/students/edit/${student._id}`}
          state={student}
        >
          Edit Details
        </Link>
        <button
          className="delete__btn"
          onClick={() => handleDelete(student._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
