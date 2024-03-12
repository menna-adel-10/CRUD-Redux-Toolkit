import { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addProduct } from './productSlice'


const AddProducts = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        image: '',
        price: '',
    });

    const handleAddProduct = () => {
        setValues({ title: '', image: '', price: '' });
        dispatch(addProduct({
            id: uuidv4(),
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
              inputProps={{ type: 'text', placeholder: 'Nike Shirt' }}
              required
          />
          <TextField
              label="Image"
              value={values.image}
               onChange={(e) => setValues({...values, image: e.target.value})}
              inputProps={{ type: 'url', placeholder: 'https://www.image.com' }}
              required
          />
          <TextField
              label="Price"
              value={values.price}
               onChange={(e) => setValues({...values, price: e.target.value})}
              inputProps={{ type: 'number', placeholder: '$9.99' }}
              required
          />
          <Button onClick={handleAddProduct}>Submit</Button>
    </div>
  )
}

export default AddProducts