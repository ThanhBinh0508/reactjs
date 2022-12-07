import React from 'react'
import { useGetProductsQuery, useRemoveProductMutation } from '../services/product'
import { Space, Table, Tag, Popconfirm, Button, message } from 'antd';
import Column from 'antd/es/table/Column';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type Props = {}
const Product = (props: Props) => {
    const [removeItem, res] = useRemoveProductMutation()
    const { data: products = [], isLoading, error } = useGetProductsQuery()
    if (isLoading) return <div>...isLoading</div>
    if (error) return <div>error</div>
    
    return (
        <div>
            {/* {products.map((product) => (
                <div>{product.name}</div>
            ))} */}
            <Table dataSource={products.map(item => ({
                key: item.id,
                name: item.name,
                price: item.price,
                desc: item.desc,
            }))}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Desc" dataIndex="desc" key="desc" />
                <Column title="Delete" key="delete" render={(product) => {
                    return (
                        <Popconfirm placement="top" title={"Bạn có chắc chắn xóa không?"} onConfirm={() => {
                            removeItem(product.key)
                            message.info("Xóa thành công");
                        }} okText="Yes" cancelText="No">
                            <Button type='primary' danger><DeleteOutlined /></Button>
                        </Popconfirm>
                    )
                }} />
                <Column title="Edit" key="edit" render={(product) => {
                    return (
                        <Link to={`/admin/products/${product.key}/edit`} type='primary' ><EditOutlined /></Link>
                    )
                }} />
            </Table>
        </div>
    )
}

export default Product