import React from 'react'
import { Layout } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import HeaderClient from '../components/Header/HeaderClient';
import FooterClient from '../components/Footer/FooterClient';
import SidebarClient from '../components/Sidebar/SidebarClient';
import { useGetProductsQuery } from '../services/product';

const { Header, Footer, Sider, Content } = Layout;
type Props = {}

const LayoutClient = (props: Props) => {
  const { data: products = [], isLoading, error } = useGetProductsQuery()
  if (isLoading) return <div>...isLoading</div>
  if (error) return <div>error</div>
  return (
    <div>
      <Layout>
        <Header className='bg-info bg-opacity-50'>
          <HeaderClient />
        </Header>
        <Layout className='m-5 '>
          <Sider className='bg-info bg-opacity-50 rounded-3' width={"300px"}>
            <SidebarClient />
          </Sider>
          <Content>
            <div className="container">
              <div className="row">
                {products.map((item) => (
                  <div className="col-4 mt-4">
                    <div className="card" style={{ width: '18rem' }}>
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price} đ</p>
                        <p className="card-text">{item.desc}</p>
                        <button className='border bg-danger rounded-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg></button>
                      </div>
                    </div>
                  </div>
                )
                )}
              </div>
            </div>

          </Content>
        </Layout>
        <Footer className='bg-light'>
          <FooterClient />
        </Footer>
      </Layout>
    </div>
  )
}

export default LayoutClient