import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});