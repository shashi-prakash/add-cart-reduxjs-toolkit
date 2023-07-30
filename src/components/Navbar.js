import { Link } from "react-router-dom";

import {useSelector } from "react-redux/es/hooks/useSelector";
export default function Navbar() {

  const myCart = useSelector((state) => state.cart)

  return (
    <div className="navbar">
      <nav style={{display:"flex", justifyContent:"space-between", fontSize:"bolder"}}>
        <div className="title">Redux</div>
        <div className="link-item" style={{margin:"0 10px", cursor:"pointer"}}>
          <span><Link to="/">Home</Link></span>
          <span style={{margin:"0 30px"}}><Link to="/cart">Mycart:{myCart.length}</Link></span>
        </div>
      </nav>
    </div>
  );
}
