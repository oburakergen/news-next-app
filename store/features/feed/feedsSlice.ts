import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import api from "@/utils/api";

type Feed = {
  id: number;
  title: string;
  body: string;
};

interface FeedState {
  feeds: Feed[];
  status: "idle" | "loading" | "success" | "failure";
  error: string | null;
}

const initialState: FeedState = {
  feeds: [],
  status: "idle",
  error: null,
};

const allFeed = createAsyncThunk("api/tasks", async () => {
  const { apiClient } = new api();

  try {
    const response = await apiClient().get(`/api/tasks`);

    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
});

const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        console.log("HYDRATE", state, action.payload);
        return {
          ...state,
          ...action.payload.feeds,
        };
      })
      .addCase(allFeed.pending, (state) => {
        state.status = "loading";
      })
      .addCase(allFeed.fulfilled, (state, action) => {
        state.status = "success";
        state.feeds = action.payload;
      })
      .addCase(allFeed.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      });
  },
});

export default feedsSlice;
