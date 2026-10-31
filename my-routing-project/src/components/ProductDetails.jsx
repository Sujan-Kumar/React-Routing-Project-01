import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const {state} = useLocation();
    console.log(state.product);

    return (
        <div>
             <h2>Product Details</h2>
             {state?
             <article>
                <h3>{state.title}</h3>
                <p>Price: {state.price}</p>
                <p>Category: {state.category}</p>
                <p>Description: {state.description}</p>
             </article>
             :<p>Product Not Availabel</p>}
        </div>
    )
}

export default ProductDetails
