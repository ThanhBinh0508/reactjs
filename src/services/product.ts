import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../interface/product'
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => ({ url: '/products' }),
            providesTags: ['Product'],
        }),
        getProduct: builder.query<IProduct, number>({
            query: (id) => ({ url: `/products/${id}` }),
            providesTags: ['Product'],
        }),
        removeProduct: builder.mutation<IProduct, IProduct>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Product'],

        }),
        addProduct: builder.mutation<IProduct, Omit<IProduct, 'id'>>({
            query: (product: IProduct) => ({
                url: '/products', product,
                method: "POST",
                body: product,

            }),
            invalidatesTags: ['Product'],

        }),
        editProduct: builder.mutation<IProduct, Partial<IProduct> & Pick<IProduct, 'id'>>({
            query: (product: IProduct) => ({
                url: `/products/${product.id}`,
                method: "PUT",
                body: product,
            }),
            invalidatesTags: ['Product'],

        })
    })
})
export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useEditProductMutation, useRemoveProductMutation } = productApi