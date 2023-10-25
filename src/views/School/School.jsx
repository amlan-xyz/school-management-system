import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTopStudent,
  updateSchoolStats,
} from "../../features/school/schoolSlice";

const SchoolView = () => {
  const schoolStats = useSelector((state) => state.school);
  const students = useSelector((state) => state.students.students);
  const { teachers } = useSelector((state) => state.teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalStudents = students.length;
    const totalTeachers = teachers.length;
    const totalAttendance = students.reduce(
      (sum, student) => sum + parseFloat(student.attendance),
      0
    );
    const averageAttendance = totalAttendance / totalStudents;
    const totalMarks = students.reduce(
      (sum, student) => sum + parseFloat(student.marks),
      0
    );
    const averageMarks = totalMarks / totalStudents;

    const topStudent = students.reduce(
      (top, current) =>
        parseFloat(current.marks) > parseFloat(top.marks)
          ? (top = current)
          : top,
      students[0]
    );

    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent,
        totalTeachers,
      })
    );
    dispatch(setTopStudent(topStudent));
  }, [students, teachers, dispatch]);

  return (
    <div className="student__details">
      <div className="student__body">
        <h1>School View</h1>
        <p>
          {" "}
          <b>Total Students:</b> <span>{schoolStats.totalStudents}</span>{" "}
        </p>
        <p>
          {" "}
          <b>Total Teachers:</b> <span>{schoolStats.totalTeachers}</span>{" "}
        </p>
        <p>
          {" "}
          <b>Average Attendance:</b>{" "}
          <span>{schoolStats.averageAttendance.toFixed(2)}</span>{" "}
        </p>
        <p>
          {" "}
          <b>Average Marks:</b>{" "}
          <span>{schoolStats.averageMarks.toFixed(2)}</span>{" "}
        </p>
        <p>
          <b>Top Student:</b>{" "}
          <span>
            {schoolStats.topStudent ? schoolStats.topStudent.name : "-"}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SchoolView;
