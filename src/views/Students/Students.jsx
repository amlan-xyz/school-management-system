import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StudentsList } from "../../components/StudentList/StudentList";
import { fetchStudents } from "../../features/students/studentSlice";
import "./Students.css";

export const StudentsView = () => {
  const dispatch = useDispatch();
  const { status, students, error } = useSelector((state) => state.students);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  return (
    <div className="students__list-container">
      <div className="students__list-header">
        <h1>List of all students</h1>
        <Link className="primary__btn" to={`/students/add`}>
          Add student
        </Link>
      </div>

      {status === "loading" && <h2>Loading....</h2>}
      {error && <h2>Error:{error}</h2>}
      {students && <StudentsList students={students} />}
    </div>
  );
};
