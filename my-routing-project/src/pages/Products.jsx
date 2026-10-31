import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProducts]= useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const [error, setError] = useState(null);


  const fetchData =()=>{
      setIsLoading(true);
          setError(null);
          fetch('https://dummyjson.com/products')
          .then((response)=>{
            if(!response.ok){
                throw new Error("Data Fetching Failed.");
            }
            return  response.json();
          })
          .then((data)=>{
            setProducts(data.products);
          }
          )
          .catch(error =>setError(error.message))
          .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
      fetchData();
    },[]);


  return (
    <div className='products-container'>
      <h2>All Products</h2>
      {isLoading && <p>Products Are Loading</p>}
      {error && <p>Error Found!</p>}
      {!isLoading && !error && 
          <section className="products">
          {
            products && products.length>0 && products.map((product)=>{
              const{id, title, price, description, category, images} = product;
              return(
                  <article key={product.id} className='product'>
                      <h3>{title}</h3>
                      <img src={images[0]} alt={product.title} className='product_image'/>
                      <p>Category: {category}</p>
                      <p>Price: {price}</p>
                      <p>{description && description}</p>
                      <Link to={`/Products/${id}`} state={product} className='product_link'>Show Details</Link>
                  </article>
              )
            })
          }
         </section>    
      }
      
    </div>
  )
}

export default Products
