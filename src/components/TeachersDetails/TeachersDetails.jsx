import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteTeacherAsync } from "../../features/teachers/teachersSlice";

export const TeacherDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const teacher = useSelector((state) =>
    state.teachers.teachers.find((t) => t._id === id)
  );

  if (!teacher) {
    return <div className="center">Teacher Not Found</div>;
  }
  const handleDelete = (id) => {
    dispatch(deleteTeacherAsync({ id }));
  };
  return (
    <div className="student__details">
      <div className="student__body">
        <h1>Teacher Details</h1>
        <p>
          {" "}
          <b>Name:</b> <span>{teacher.name}</span>
        </p>
        <p>
          {" "}
          <b>Contact:</b> <span>{teacher.contact}</span>
        </p>
        <p>
          {" "}
          <b>Standard:</b> <span>{teacher.standard}</span>
        </p>
        <p>
          {" "}
          <b>Subject:</b> <span>{teacher.subject}</span>
        </p>
        <p>
          {" "}
          <b>Gender :</b> <span>{teacher.gender}</span>
        </p>
        <Link
          className="submit__btn"
          to={`/teachers/edit/${teacher._id}`}
          state={teacher}
        >
          Edit Details
        </Link>
        <button
          className="delete__btn"
          onClick={() => handleDelete(teacher._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
