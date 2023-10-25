import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { StudentForm } from "./components/Forms/AddStudentForm";
import { TeacherForm } from "./components/Forms/AddTeacherForm";
import { Navbar } from "./components/Navbar/Navbar";
import { StudentDetail } from "./components/StudentDetails/StudentDetail";
import { TeacherDetail } from "./components/TeachersDetails/TeachersDetails";
import ClassView from "./views/Classes/Classes";
import SchoolView from "./views/School/School";
import { StudentsView } from "./views/Students/Students";
import { TeachersView } from "./views/Teachers/Teachers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentsView />} />
        <Route path="/students/add" element={<StudentForm />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/students/edit/:id" element={<StudentForm />} />
        <Route path="/classes" element={<ClassView />} />
        <Route path="/school" element={<SchoolView />} />
        <Route path="teachers" element={<TeachersView />} />
        <Route path="/teachers/add" element={<TeacherForm />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/teachers/edit/:id" element={<TeacherForm />} />
      </Routes>
    </div>
  );
}

export default App;
