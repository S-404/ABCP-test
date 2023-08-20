import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery.ts";

export const baseApi = createApi({
  tagTypes: [],
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
});