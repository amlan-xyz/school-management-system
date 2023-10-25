import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TeachersList } from "../../components/TeachersList/TeachersList";
import { fetchTeachers } from "../../features/teachers/teachersSlice";
export const TeachersView = () => {
  const { status, teachers, error } = useSelector((state) => state.teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  return (
    <div className="students__list-container">
      <div className="students__list-header">
        <h1>List of all teachers</h1>
        <Link className="primary__btn" to={`/teachers/add`}>
          Add teacher
        </Link>
      </div>
      {status === "loading" ? (
        <h2>Loading....</h2>
      ) : (
        teachers && <TeachersList teachers={teachers} />
      )}
      {error && <h2>Error:{error}</h2>}
    </div>
  );
};
