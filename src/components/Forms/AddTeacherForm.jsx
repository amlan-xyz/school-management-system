import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  addTeacherAsync,
  updateTeacherAsync,
} from "../../features/teachers/teachersSlice";

export const TeacherForm = () => {
  const { state } = useLocation();
  const teacher = state ? state : null;

  const [name, setName] = useState(teacher ? teacher.name : "");
  const [gender, setGender] = useState(teacher ? teacher.gender : "");
  const [standard, setStandard] = useState(teacher ? teacher.standard : "");
  const [subject, setSubject] = useState(teacher ? teacher.subject : "");
  const [contact, setContact] = useState(teacher ? teacher.contact : "");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTeacher = {
      name,
      standard,
      gender,
      subject,
      contact,
    };
    if (teacher) {
      dispatch(
        updateTeacherAsync({ id: teacher._id, updatedTeacher: newTeacher })
      );
    } else {
      dispatch(addTeacherAsync(newTeacher));
    }
  };

  return (
    <div className="student__form-container">
      <h1>{teacher ? "Edit Teacher" : "Add Teacher"}</h1>
      <form action="" className="student__form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Standard"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
        />

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
        <button className="submit__btn" onClick={handleSubmit}>
          {teacher ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};
