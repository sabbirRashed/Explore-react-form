import React, { useState } from 'react';

const ProductForm = ({handleProducts}) => {
    const [error, setError] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);

        if(name.length === 0){
            setError('Please provide a product name');
            return;
        }
        else if(price.length === 0){
            setError('Please provide a price');
            return;
        }
        else if(price < 0){
            setError("Price can not be negative");
        }
        else if(quantity < 1){
            setError('Please provide at least 1 product');
            return;
        }
        else{
            setError('')
        }

        const product = {
            name,
            price,
            quantity
        }
        // console.log(product);
        handleProducts(product);
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' />
                <br />
                <input type="text" name="price" placeholder='Product Price' />
                <br />
                <input type="text" name="quantity" placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <small style={{color:'red', textAlign:'center'}}>{error}</small>
        </div>
    );
};

export default ProductForm;