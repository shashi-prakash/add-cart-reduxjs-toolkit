import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from "../Redux/cartSlice";
import { STATUSES, fetchproducts } from "../Redux/productSlice";

export default function Home() {
  
  const cartItems = useSelector((state) => state.cart);
  const {data, status} = useSelector((state)=> state.product);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchproducts())
  }, []);

  const addCart = (data) => {
    dispatch(add(data))
  }
if(status === STATUSES.LOADING){
  return <h2 style={{textAlign:"center", fontWeight:"bolder"}}>loading ...</h2>
}
  return (
    <div style={{ display: "flex", flexFlow:"wrap", gap:"20px", marginTop:"40px", justifyContent:"center", alignItems:"center" }}>
      {data?.map((item, index) => (
        <div className="product-container"  key={index}  style={{ width: "calc(100%4-20px)", marginBottom: "20px",height:"100%" }}>
          <div
            className="card"
            key={index}
            style={{
              background: "lightGrey",
              width: "400px",
              paddingBottom:"20px",
              border: "1px solid grey",
              textAlign: "center", height:"100%"
            }}
          >
            <img src={item.image} style={{ width: "100%", height: "300px" }} />
            <h5>{item.title}</h5>
            <p>$ {item.price}</p>
            <button onClick={() =>addCart(item)}>Add cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
