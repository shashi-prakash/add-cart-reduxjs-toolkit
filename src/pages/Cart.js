
import { remove } from "../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const removeCard = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px", flexFlow: "wrap" }}>
        {cartItems?.map((item, index) => (
          <div
            className="product-container"
            key={index}
            style={{ width: "calc(100%4-20px)", marginBottom: "20px" }}
          >
            <div
              className="card"
              style={{
                background: "lightGrey",
                width: "400px",
                border: "1px solid black",
                textAlign: "center",
                height: "100%",
              }}
            >
              <img
                src={item.image}
                style={{ width: "100%", height: "300px" }}
              />
              <h5>{item.title}</h5>
              <p>$ {item.price}</p>
              <button onClick={() => removeCard(item.id)}>Remove cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
