import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import App from '../App';
import react from 'react';




const Products = (props) => {

    async function addToCart (userId) {
        try{
            const jwt = localStorage.getItem('token');
            let response = await axios.post(`https://localhost:44394/api/shoppingcart/${userId}`, { headers: {Authorization: 'Bearer ' + jwt}});
            return (response)
        }
        catch (ex){
            console.log('Error in Adding to Cart', ex);
        }
    }
    async function addProduct (item) {
        try{
            let response = await axios.post(`https://localhost:44934/api/products/`);
        }
        catch (ex){
            console.log(`Error in adding product`,ex);
        }
    }

    return (
        <React.Fragment>
        <div classname='container-md con-body'>
            <div className='row'>
                <div className='col-md-3 transparent-column' />
                    <div className='col-md-6 shopping-cart-body'/>
                        {props.products.map(product => {
                            return (
                                <div className='product'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                            <h2>
                                                {product.product.name}
                                            </h2>
                                            <div>
                                                {product.product.description}
                                            </div>
                                            <div>
                                                Price: ${product.product.price}
                                            </div>
                                            <div>
                                                Category: {product.product.category}
                                            </div>
                                            <div>
                                                Quantity: {product.quantity}
                                            </div>
                                            <Link to ={{
                                                pathname:'/review',
                                                postReviewProps:{
                                                    productId: product.product.id
                                                }
                                            }} >Leave Review</Link>
                                        </div>
                                        <div className='col-md-3 right-side-card'>
                                            <div classname='upper-padding'></div>
                                            <div className='submit-div'>
                                                <button className='btn btn-primary submit-button' onClick={_event => this.addToCart(product.product.id)}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            )
                        })}
                            
                        </div>
                    </div>
                <div className='col-md-3 transparent-column' />
        </React.Fragment>
                
    )
}

export default Products;