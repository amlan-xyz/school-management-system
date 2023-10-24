import { configureStore } from "@reduxjs/toolkit";
import { schoolSlice } from "../features/school/schoolSlice";
import { studentsSlice } from "../features/students/studentSlice";
export default configureStore({
  reducer: {
    students: studentsSlice.reducer,
    school: schoolSlice.reducer,
  },
});
