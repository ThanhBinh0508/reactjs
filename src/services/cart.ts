import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICart } from "../interface/cart";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ["Cart"],
    endpoints: (builder) => ({
        getCarts: builder.query<ICart[], void>({
            query: () => ({ url: '/carts' }),
            providesTags: ['Cart'],
        }),
        removeCart: builder.mutation<ICart, ICart>({
            query: (id) => ({
                url: `/carts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cart']
        })
    })
})
export const { useGetCartsQuery, useRemoveCartMutation } = cartApi