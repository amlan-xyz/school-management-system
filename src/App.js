import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { StudentForm } from "./components/Forms/AddStudentForm";
import { Navbar } from "./components/Navbar/Navbar";
import { StudentDetail } from "./components/StudentDetails/StudentDetail";
import ClassView from "./views/Classes/Classes";
import SchoolView from "./views/School/School";
import { StudentsView } from "./views/Students/Students";

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
      </Routes>
    </div>
  );
}

export default App;
