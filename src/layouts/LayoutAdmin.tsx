import React from 'react'
import { HomeOutlined, AppstoreOutlined, UserOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';
type Props = {}
const { Header, Content, Footer, Sider } = Layout;
const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <Layout style={{ height: "100vh" }}>
                <Header className="header bg-black bg-opacity-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <a href="/"><img style={{ width: '120px' }} src="/images/logo-maytinh.jpg" /></a>
                            </div>
                            <div className="col-5">
                                <input type="text" placeholder='Search' className='rounded-3' style={{ width: '400px', height: '50%', border: '1px solid gray' }} /><SearchOutlined className=" ms-2 text-light" />
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"products/add"} className="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg><label className='text-add px-2'> Add Product</label></Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/signin" className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                        </svg><label className='px-2'>Sign in</label></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu style={{ height: "100%" }}>
                            <Menu.Item>
                                <NavLink to="/admin">
                                    <HomeOutlined />Dashbroad
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to="/admin/products">
                                    <AppstoreOutlined /> Product
                                </NavLink>
                            </Menu.Item>
                            <Menu.SubMenu title="sub menu">
                                <Menu.Item>item 3</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutAdmin