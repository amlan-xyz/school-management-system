import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk(
  "/teachers/fetchTeachers",
  async () => {
    const response = await axios.get(
      "https://reduxtoolkit-student-management.theweird0ne.repl.co/teachers"
    );
    return response.data;
  }
);

export const addTeacherAsync = createAsyncThunk(
  "teachers/addTeacherAsync",
  async (newTeacher) => {
    const response = await axios.post(
      "https://reduxtoolkit-student-management.theweird0ne.repl.co/teachers",
      newTeacher
    );
    return response.data;
  }
);

export const updateTeacherAsync = createAsyncThunk(
  "teachers/updateTeacherAsync",
  async ({ id, updatedTeacher }) => {
    const response = await axios.put(
      `https://reduxtoolkit-student-management.theweird0ne.repl.co/teachers/${id}`,
      updatedTeacher
    );
    return response.data;
  }
);

export const deleteTeacherAsync = createAsyncThunk(
  "teachers/deleteTeacherAsync",
  async ({ id }) => {
    const response = await axios.delete(
      `https://reduxtoolkit-student-management.theweird0ne.repl.co/teachers/${id}`
    );
    return response.data;
  }
);

const initialState = {
  teachers: [],
  error: null,
  status: "idle",
};

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [addTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers.push(action.payload);
    },
    [addTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      const { updatedTeacher, id } = action.payload;
      const index = state.teachers.findIndex((s) => s._id === id);
      if (index !== -1) {
        state.teachers[index] = updatedTeacher;
      }
    },
    [updateTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteTeacherAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteTeacherAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = state.teachers.filter(
        (t) => t._id !== action.payload.teacher._id
      );
    },
    [deleteTeacherAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    // [deleteTeacherAsync.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [deleteTeacherAsync.fulfilled]: (state, action) => {
    //   state.status = "success";
    //   console.log(action.payload);
    //   const { _id } = action.payload.teacher;
    //   state.teachers = state.teachers.filter((t) => t._id !== _id);
    // },
  },
});

export default teacherSlice.reducer;
