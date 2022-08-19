import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ISeasonalAnimeState {
  data: any;
  status: string;
}

const initialState: ISeasonalAnimeState = {
  data: [],
  status: "",
};

export const getEmployeeData = createAsyncThunk("employee/data", async () => {
  return await axios.get(`/api/employee`);
});

export const employeeDataSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: {
    [getEmployeeData.pending.type]: (state) => {
      state.status = "ApiStatus.Pending";
    },
    [getEmployeeData.fulfilled.type]: (state, { payload: { data } }: any) => {
      state.status = "ApiStatus.Succes";
      state.data = data;
    },
    [getEmployeeData.rejected.type]: (state) => {
      state.status = "ApiStatus.Failed";
    },
  },
});

export default employeeDataSlice.reducer;
