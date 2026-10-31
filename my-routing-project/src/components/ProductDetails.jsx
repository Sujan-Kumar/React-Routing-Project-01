import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const {state} = useLocation();
    console.log(state.product);

    return (
        <div className='product-details'>
             <h2>Product Details</h2>
             {state?
             <article className='product-details_article'>
                <img className='product-details_image' src={state.images[0]} alt={state.title}/>
                <h3 className='product-details_title'>{state.title}</h3>
                <p><strong>Price:</strong> {state.price}</p>
                <p><strong>Rating:</strong> {state.rating}</p>
                <p><strong>Brand:</strong> {state.brand}</p>
                <p><strong>Category:</strong> {state.category}</p>
                <p><strong>Description:</strong> {state.description}</p>
                <Link to='/Products' className='product_link'>Go To Products</Link>
             </article>
             :<p>Product Not Availabel</p>}
        </div>
    )
}

export default ProductDetails
