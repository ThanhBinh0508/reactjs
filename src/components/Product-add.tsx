import React from 'react'
import { IProduct } from '../interface/product';
import { useAddProductMutation } from '../services/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

type Props = {}

const ProductAdd = (props: Props) => {
    const navigate = useNavigate()
    const [addProduct, { isLoading }] = useAddProductMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>()

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        addProduct(data)
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
                    <input type="text" className="form-control" {...register("name", { required: true })} />
                    {errors.name?.type === "required" && <p className='text-danger'>Please input your name</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" {...register("price", { required: true })} />
                    {errors.price?.type === "required" && <p className='text-danger'>Please input your price</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" {...register("desc", { required: true })} />
                    {errors.desc?.type === "required" && <p className='text-danger'>Please input your description</p>}
                </div>
                
                <button className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}

export default ProductAdd