'use client';

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from "sweetalert2"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
 
const Cartpage = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        return setCartItems(getCartItems())
    }, []) 

    //handle remove
    const handleRemove = (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "you will not able to recover this item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it",
        }).then((result) => {
            if(result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItems())
                Swal.fire("Removed1!", "Item has been removed.", "success" );
            }
        })
    }

    //quantity 
    const handleQuantityChange = (id: string, quantity : number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems())
    }
    //Handle increment
const handleIncrement = (id: string) => {
    // Find the specific product by its id
    const product = cartItems.find((item) => item._id === id);
    if (product) {
        // Increment the inventory of the found product
        handleQuantityChange(id, product.inventory + 1);
    }
};

//Handle decrement
const hancleDecrement= (id: string) => {
    // Find the specific product by its id
    const product = cartItems.find((item) => item._id === id);
    if (product) {
        // Increment the inventory of the found product
        handleQuantityChange(id, product.inventory - 1);
    }
};
    // calculate
    const calculatedTotal = () =>{
        return cartItems.reduce((total, item) => total + item.price * item.inventory,0)
    }
    //handle proceed

    const handleProceed = () => {
        Swal.fire({
           title: "Proceed to Checkout?",
           text: "Please reveiw your cart before checkout",
           icon: "question",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, Proceed!" 
        }).then((result) =>{
            if(result.isConfirmed){
                Swal.fire("Success","Your Order has been Successfuly proceed,", "success")
                setCartItems([ ])
            }
        })
    }
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>Shopping Cart</h1>
        {cartItems.length === 0 ? (
            <p className='text-center text-gray-500 '>Your cart is empty.</p>
        ) : (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* cart Item */}
                <div className='lg:col-span-2'>
                    {cartItems.map((item) => (
                        <div key={item._id} 
                        className='flex items-center bg-white shadow-md rounded-lg p-4 mb-4'>
                            {item.image &&(
                                <Image src={urlFor(item.image).url()}
                                alt='image5'
                                width={500}
                                height={500}
                                className='w-16 h-16 object-cover rounded-lg'
                                />
                            )}
                            <div className='flex-1 ml-4'>
                                <h2 className='text-lg font-semibold'>{item.productName}</h2>
                                <p className='text-gray-500 '>Price: ${item.price.toFixed(2)}</p>
                                <div className='flex item-center span-x-2 mt-2'>
                                    <button 
                                    onClick={() => hancleDecrement(item._id)}
                                    className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded'
                                    >
                                        -
                                    </button>
                                    <span>{item.inventory}</span>
                                    <button 
                                    onClick={() => handleIncrement(item._id)}
                                    className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                            onClick={() => handleRemove(item._id)}
                            className='ml-4 text-red-600 hover:text-red-800'>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                {/* cart Summary */}
                <div className='bg-white shadow-md rounded-lg p-4'>
                    <h2 className='text-xl font-bold mb-4'>Cart Summary</h2>
                    <div className='flex justify-between mb-2'>
                        <span className='text-gray-600'>SubTotal:</span>
                        <span className='font-semibold'>${calculatedTotal().toFixed(2)}</span>
                    </div>
                    <button
                    onClick={handleProceed}
                    className='w-full bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700'
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        )}
       
    </div>
  )
}

export default Cartpage