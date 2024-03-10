import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { deleteProduct } from './productSlice';


const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);

    const handleRemoveProduct = (id) => {
        dispatch(deleteProduct({id: id}));
    }

    const renderCard = () => products.map(product => (
        <a href="#" className="group block overflow-hidden pb-8 mx-4" key={product.id}>
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={product.image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      {product.title}
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
       <p className="tracking-wide font-semibold">${product.price}</p>

      <div className="flex gap-2">
                        <Link to={`edit-products/${product.id}`}>
                            <button className="hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
                </button>
                        </Link>
                        <button onClick={() => handleRemoveProduct(product.id)}
                            className="hover:opacity-80 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
                </button>
            </div>
                </div>
                
  </div>
</a>
        
    ))
        
  return (
      <div>
          <Link to="/add-products" className="mx-4"><Button>Add New +</Button></Link>
          <div className="grid gap-5 md:grid-cols-2">
          {products.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No Products</p>}
    </div>
      </div>
  )
}

export default ProductList
