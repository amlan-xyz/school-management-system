import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(
      "https://reduxtoolkit-student-management.theweird0ne.repl.co/students"
    );
    return response.data;
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudentAsync",
  async (newStudent) => {
    const response = await axios.post(
      "https://reduxtoolkit-student-management.theweird0ne.repl.co/students",
      newStudent
    );
    return response.data;
  }
);

export const updateStudentAsync = createAsyncThunk(
  "students/updateStudentAsync",
  async ({ id, updatedStudent }) => {
    const response = await axios.put(
      `https://reduxtoolkit-student-management.theweird0ne.repl.co/students/${id}`,
      updatedStudent
    );
    return response.data;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "students/deleteStudentAsync",
  async ({ id }) => {
    const response = await axios.delete(
      `https://reduxtoolkit-student-management.theweird0ne.repl.co/students/${id}`
    );
    return response.data;
  }
);

const initialState = {
  students: [],
  status: "idle",
  error: null,
  standard: "All",
  sortBy: "name",
  gender: "All",
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setFilterByClass: (state, action) => {
      state.standard = action.payload;
    },
    setFilterByGender: (state, action) => {
      state.gender = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [addStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.students.push(action.payload);
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const { updatedStudent, id } = action.payload;
      const index = state.students.findIndex((s) => s._id === id);
      if (index !== -1) {
        state.students[index] = updatedStudent;
      }
    },
    [updateStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteStudentAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteStudentAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const { _id } = action.payload.student;
      state.students = state.students.filter((student) => student._id !== _id);
    },
    [deleteStudentAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export const { setFilterByClass, setFilterByGender, setSortBy } =
  studentsSlice.actions;

export default studentsSlice.reducer;
