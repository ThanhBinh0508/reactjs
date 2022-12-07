import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import ProductAdd from './components/Product-add'
import LayoutAdmin from './layouts/LayoutAdmin'
import ProductEdit from './components/Product-edit'
import LayoutClient from './layouts/LayoutClient'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateLayout from './Private/PrivateLayout'
import Cart from './pages/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutClient />}>

        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/admin" element={
          <PrivateLayout>
            <LayoutAdmin />
          </PrivateLayout>
        }>
          <Route path="products" element={<Product />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
