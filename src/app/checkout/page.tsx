"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";



const CheckOut = () => {
  // card state
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFromValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });
  // form Error
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });
  //Data get by useEffect
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  // total amount

  const SubTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  // handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  // from validation
  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };
  //place order event
  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "processing your order....",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "proceed",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your order has been placed successfully",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill all the fields before proceding",
            "error"
          );
        }
      }
    });
    // order type and data
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      cartItems: cartItems.map(item => ({
        _type: "reference",
        _ref: item._id
      })),
      total : SubTotal,
      discount : discount,
      orderDate: new Date().toISOString()
    }; 

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("error creating order", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex item-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight />
            <span>CheckOut</span>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-col-1 lg:grid-col-2 gap-8 ">
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex item-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity : {item.inventory}
                    </p>
                  </div>
                  <p>${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium"> No Item in Cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                SubTotal: <span className="font-medium">${SubTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: <span>${SubTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
          {/* form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-center text-semibold font-serif text-3xl">
              Billing Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <label htmlFor="firstName">First Name </label>
                <input
                  id="firstName"
                  placeholder="Enter Your First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">First Name is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName">Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">Last Name is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="address">Address </label>
                <input
                  id="address"
                  placeholder="Enter Your Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500">Address is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="city">City </label>
                <input
                  id="city"
                  placeholder="Enter Your City"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
                {formErrors.city && (
                  <p className="text-sm text-red-500">City is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="email">Email </label>
                <input
                  id="email"
                  placeholder="Enter Your Email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">
                    Email Address is Required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone">Phone </label>
                <input
                  id="phone"
                  placeholder="Enter Your Phone No"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500"> phone no is Required</p>
                )}
              </div>

              <div>
                <label htmlFor="zipCode">Zip Code </label>
                <input
                  id="zipCode"
                  placeholder="Enter Your Zip code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                />
                {formErrors.zipCode && (
                  <p className="text-sm text-red-500">Zip code is Required</p>
                )}
              </div>

              <button
                className="w-full h-12 bg-blue-500 hover:bg-black text-white"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
