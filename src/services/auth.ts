import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuth } from '../interface/auth';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user: IAuth) => ({
                url: '/users', user,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Auth'],
        }),
        signin: builder.mutation({
            query: (user: IAuth) => ({
                url: '/users', user,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Auth'],
        }),
    })
});

export const {
    useSignupMutation,
    useSigninMutation,
} = authApi;