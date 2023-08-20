import { baseApi } from "./baseApi.ts";
import { IUser } from "../models/User.ts";


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    fetchUser: build.query<IUser, number>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),

  }),
});


export const { useLazyFetchUserQuery } = userApi;