import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSortBy } from "../../features/students/studentSlice";
import "./Classes.css";

const ClassView = () => {
  const students = useSelector((state) => state.students.students);
  const filter = useSelector((state) => state.students.filter);
  const sortBy = useSelector((state) => state.students.sortBy);
  const dispatch = useDispatch();

  const filteredStudents = students.filter((student) => {
    if (filter === "All") return true;
    return student.gender === filter;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "marks") return b.marks - a.marks;
    if (sortBy === "attendance") return b.attendance - a.attendance;
    return 0;
  });

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="students__list-container">
      <div className="class__view-header">
        <h1>Class View</h1>
        <div className="filters">
          <label htmlFor="filter">Filter by Gender:</label>
          <select id="filter" onChange={handleFilterChange} value={filter}>
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
          <td>Grade</td>
          <td>Marks</td>
          <td>Attendance</td>
          <td>Gender</td>
        </thead>
        <tbody>
          {sortedStudents.map((student) => {
            const { _id, name, age, grade, marks, attendance, gender } =
              student;
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{age}</td>
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
