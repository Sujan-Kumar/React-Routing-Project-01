import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {state} = useLocation();
    
    const [product, setProduct]= useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError] = useState(null);
    
    const {id} = useParams();
    

      const fetchData =()=>{
          setIsLoading(true);
              setError(null);
              fetch(`https://dummyjson.com/products/${id}`)
              .then((response)=>{
                if(!response.ok){
                    throw new Error("Data Fetching Failed.");
                }
                return  response.json();
              })
              .then((data)=>{
                setProduct(data);
              }
              )
              .catch(error =>setError(error.message))
              .finally(()=>setIsLoading(false));
        }
        useEffect(()=>{
          fetchData();
        },[]);
    
    return (
        <div className='product-details'>
             <h2>Product Details</h2>
               {isLoading && <p>Product is Loading</p>}
               {error && <p>Error Found!</p>}

                {!isLoading && !error &&
                    <article className='product-details_article'>
                        <img className='product-details_image' src={product.images?.[0]} alt={product.title}/>
                        <h3 className='product-details_title'>{product.title}</h3>
                        <p><strong>Price:</strong> {product.price}</p>
                        <p><strong>Rating:</strong> {product.rating}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <Link to='/Products' className='product_link'>Go To Products</Link>
                    </article>
                }        
             
        </div>
    )
}

export default ProductDetails
