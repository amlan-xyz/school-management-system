import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addStudentAsync,
  updateStudentAsync,
} from "../../features/students/studentSlice";
import "./AddStudentForm.css";

export const StudentForm = () => {
  const { state } = useLocation();
  const student = state ? state : null;

  const [name, setName] = useState(student ? student.name : "");
  const [age, setAge] = useState(student ? student.age : "");
  const [grade, setGrade] = useState(student ? student.grade : "");
  const [attendance, setAttendance] = useState(
    student ? student.attendance : ""
  );
  const [marks, setMarks] = useState(student ? student.marks : "");
  const [gender, setGender] = useState(student ? student.gender : "");

  const dispatch = useDispatch();

  useEffect(() => console.log(student));

  const handleSubmit = () => {
    const newStudent = {
      name,
      age,
      grade,
      gender,
      attendance,
      marks,
    };
    if (student) {
      dispatch(
        updateStudentAsync({ id: student._id, updatedStudent: newStudent })
      );
    } else {
      dispatch(addStudentAsync(newStudent));
    }
  };
  return (
    <div className="student__form-container">
      <h1>{student ? "Edit Student" : "Add Student"}</h1>
      <form action="" className="student__form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />

        {student && (
          <>
            <div className="form__radio-input">
              <p> Gender:</p>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                />{" "}
                Female
              </label>
            </div>
            <input
              type="text"
              placeholder="Attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            />
            <input
              type="text"
              placeholder="Marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </>
        )}
        <button className="submit__btn" onClick={handleSubmit}>
          {student ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};
