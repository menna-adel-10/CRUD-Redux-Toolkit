import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: "Limited Edition Sports Trainer", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80", price: "250" },
    { id: '2', title: "Black Basic T-Shirt", image: "https://i.pinimg.com/564x/16/af/45/16af45d49686478e049da11fd7b6b184.jpg", price: "35" },
    { id: '3', title: "Beige Slouchy Sweatpant", image: "https://i.pinimg.com/564x/88/8f/e6/888fe6d04cbd1fae6a010881bed2a09a.jpg", price: "99" },
    { id: '4', title: "Black Sheep leather Jacket", image: "https://i.pinimg.com/564x/f3/e9/2e/f3e92e14ad2fb2580ba0d84280eb2aa4.jpg", price: "350" },
   
];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        editProduct: (state, action) => {
            const { id, title, image, price } = action.payload;
            const existingProduct = state.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.title = title;
                existingProduct.image = image;
                existingProduct.price = price;
            }
        },
        deleteProduct: (state, action) => {
            const { id } = action.payload;
            const existingProduct = state.find(product => product.id === id);
            if (existingProduct) {
                return state.filter(product => product.id !== id);
            }
        }
    }
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;