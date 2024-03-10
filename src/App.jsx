import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './features/products/ProductList'
import AddProducts from './features/products/AddProducts'
import EditProducts from './features/products/EditProducts'

function App() {

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center pb-6 font-bold text-2xl text-gray-700">
        Our Latest Products
      </h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/edit-products/:id" element={<EditProducts />} />
      </Routes>
      
    </div>
  )
}

export default App
