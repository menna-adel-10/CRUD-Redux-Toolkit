import React, { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { editProduct } from './productSlice';


const EditProducts = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
    const navigate = useNavigate();
    const existingUser = products.filter(product => product.id === params.id);
    const { title, image, price } = existingUser[0];
    const [values, setValues] = useState({
        title,
        image,
        price,
    });

    const handleEditProduct = () => {
        setValues({ title: '', image: '', price: '' });
        dispatch(editProduct({
            id: params.id,
            title: values.title,
            image: values.image,
            price: values.price
        }));
        navigate('/')
    }

  return (
      <div className="mt-10 max-w-xl mx-auto">
          <TextField
              label="Title"
              value={values.title}
              onChange={(e) => setValues({...values, title: e.target.value})}
          inputProps={{type: 'text', placeholder: 'Nike Shirt'}}/>
          <TextField
              label="Image"
              value={values.image}
               onChange={(e) => setValues({...values, image: e.target.value})}
          inputProps={{type: 'url', placeholder: 'https://www.image.com'}}/>
          <TextField
              label="Price"
              value={values.price}
               onChange={(e) => setValues({...values, price: e.target.value})}
              inputProps={{ type: 'number', placeholder: '$9.99' }} />
          <Button onClick={handleEditProduct}>Edit</Button>
    </div>
  )
}


export default EditProducts