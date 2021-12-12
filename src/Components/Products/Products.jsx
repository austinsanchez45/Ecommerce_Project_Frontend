import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import App from '../App';



const Products = (props) => {

    async function showProducts (userId) {
        try{
          let response = await axios.get(`https://localhost:44394/api/products/`);
          showProducts(response.data)
        }
        catch (ex){
            console.log('Error in showProducts API call', ex);
        }
    }

    return (
        <React.Fragment>
            <div classname='container-md con-body'>
                <div className='row'>
                    <div className='col-md-3 transparent-column' />
                        <div className='col-md-6 shopping-cart-body'>
                            {props.products.map(product => {
                                return (
                                    <div className='card product'>
                                        <div className='row'>
                                            <div className='col-md-9'>
                                                <h2>
                                                    Product Name: {product.product.name}
                                                </h2>
                                                <div>
                                                    Description: {product.product.description}
                                                </div>
                                                <div>
                                                    Price: ${product.product.price}
                                                </div>
                                                <div>
                                                    Category: {product.product.category}
                                                </div>
                                                    <Link to ={{
                                                    pathname:'/postreview',
                                                    postReviewProps:{
                                                        productId: product.product.id
                                                    }
                                                }} >Leave Review</Link>
                                            </div>
                                            <div className='col-md-3 right-side-card'>
                                                <div classname='upper-padding'></div>
                                                <div className='submit-div'>
                                                    <button className='btn btn-primary submit-button' onClick={props.addProductToCart(product.product.id)}>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                )
                            })}
                            </div>
                    <div className='col-md-3 transparent-column' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products;