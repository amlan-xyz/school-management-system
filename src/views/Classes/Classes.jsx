import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterByClass,
  setFilterByGender,
  setSortBy,
} from "../../features/students/studentSlice";
import "./Classes.css";

const ClassView = () => {
  const students = useSelector((state) => state.students.students);
  const { standard, gender } = useSelector((state) => state.students);
  const sortBy = useSelector((state) => state.students.sortBy);
  const dispatch = useDispatch();

  const studentsInClass = students.filter((student) => {
    if (standard === "All") return true;
    return student.standard === standard;
  });

  const filteredStudents = [...studentsInClass].filter((student) => {
    if (gender === "All") return true;
    return student.gender === gender;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "marks") return b.marks - a.marks;
    if (sortBy === "attendance") return b.attendance - a.attendance;
    return 0;
  });

  const handleFilterChangeGender = (e) => {
    dispatch(setFilterByGender(e.target.value));
  };

  const handleFilterChangeClass = (e) => {
    dispatch(setFilterByClass(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="students__list-container">
      <div className="class__view-header">
        <h1>Class View</h1>
        <div className="filters">
          <label htmlFor="filter">Filter by Class:</label>
          <select
            id="filter"
            onChange={handleFilterChangeClass}
            value={standard}
          >
            <option value="All">All</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
          </select>
        </div>
        <div className="filters">
          <label htmlFor="filter">Filter by Gender:</label>
          <select
            id="filter"
            onChange={handleFilterChangeGender}
            value={gender}
          >
            <option value="All">All</option>
            <option value="Male">Boys</option>
            <option value="Female">Girls</option>
          </select>
        </div>
        <div className="filters">
          <label htmlFor="sortBy">Sort by:</label>
          <select id="sortBy" onChange={handleSortChange} value={sortBy}>
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="attendance">Attendance</option>
          </select>
        </div>
      </div>

      <table className="students__list">
        <thead>
          <td>Name</td>
          <td>Age</td>
          <td>Class</td>
          <td>Grade</td>
          <td>Marks</td>
          <td>Attendance</td>
          <td>Gender</td>
        </thead>
        <tbody>
          {sortedStudents.map((student) => {
            const {
              _id,
              name,
              age,
              grade,
              marks,
              attendance,
              gender,
              standard,
            } = student;
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{standard}</td>
                <td>{grade}</td>
                <td>{marks ? marks : "-"}</td>
                <td>{attendance ? attendance : "-"}</td>
                <td>{gender ? gender : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClassView;
