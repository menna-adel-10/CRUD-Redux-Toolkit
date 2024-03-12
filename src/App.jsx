import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './features/products/ProductList'
import AddProducts from './features/products/AddProducts'
import EditProducts from './features/products/EditProducts'
import LoginPage from './Login'
import SignupPage from './SignUp'

function App() {

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
     
      <Routes>
         <Route path='/' element={<SignupPage/>} ></Route>
   <Route path='/login' element={<LoginPage/>}></Route>
        
        <Route path="/home" element={<ProductList />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/edit-products/:id" element={<EditProducts />} />
      </Routes>
      
    </div>
  )
}

export default App
