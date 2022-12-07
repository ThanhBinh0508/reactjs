import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCartsQuery, useRemoveCartMutation } from '../../services/cart'
type Props = {}

const Cart = (props: Props) => {
    const [removeItem, res] = useRemoveCartMutation()
    const { data: carts = [], isLoading, error } = useGetCartsQuery()

    if (isLoading) return <div>...isLoading</div>
    if (error) return <div>error</div>
    return (
        <div>
            <div className="mx-auto mt-5" style={{ width: "200px" }}>
                <h3 className="text-danger">Giỏ hàng</h3>
                <div className="">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            {carts.map((item) => (
                                <div className='row'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <h5 className="card-title col-10">{item.name}</h5>
                                    <button className='bg-none rounded-2 border col-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                    <p className="card-text">{item.price}</p>
                                    <p className="card-text">{item.desc}</p>
                                </div>
                            ))}
                            <div>
                                <label className="ml-5 mt-5 ">Tổng tiền tạm tính:</label><label>17.820.000 ₫</label>
                                <button className="py-2 mt-3 bg-info border rounded-2">Tiến hành đặt hàng</button>
                                <div className=' mt-3'>
                                    <Link to={"/"} className="text-light bg-primary py-2 border rounded-2 text-decoration-none">Chọn thêm sản phẩm khác</Link>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div >
    )
}

export default Cart