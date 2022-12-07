import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hook';
import { IProduct } from '../interface/product';
import { useEffect } from "react";
import { useEditProductMutation, useGetProductQuery } from '../services/product';

type Props = {}

const ProductEdit = (props: Props) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>()

  const { id } = useParams();
  const [editProduct, { isLoading }] = useEditProductMutation();
  const { data: product } = useGetProductQuery(parseInt(id as string))

  useEffect(() => {
    reset(product as IProduct)
  }, [product]);

  const onSubmit: SubmitHandler<IProduct> = (product) => {
    editProduct(product)
    try {
      navigate("/admin/products")
    } catch (error) {

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3" >
          <label className="form-label">Name</label>
          <input type="text" className="form-control"  {...register("name" , { required: true })} />
          {errors.name?.type === "required" && <p className='text-danger'>Please input your name</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" {...register("price" , { required: true })} />
          {errors.price?.type === "required" && <p className='text-danger'>Please input your price</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" {...register("desc" , { required: true })} />
          {errors.desc?.type === "required" && <p className='text-danger'>Please input your description</p>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ProductEdit