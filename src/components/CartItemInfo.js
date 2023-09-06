import non_veg_icon from "../assets/img/non_veg.png";
import veg_icon from "../assets/img/veg.png";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import Cart from "./Cart";
import {
  addItemName,
  totalAmount,
  addIsVeg,
  addPrice,
  removeItem,
  incQty,
  decQty,
  totalAmount,
  addRestuarantInfo,
  clearCart,
  uniqueItem,
} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import TotalToPay from "./TotalToPay";

const CartItemInfo = ({ name, price, isVeg, qty, id, updateSum }) => {
  const dispatch = useDispatch();
  const cartItemInfo = useSelector((store) => store.cart.itemName);
  const [cartQty, setCartQty] = useState(1);

  // setCartQty(cartItemInfo.qty);
  // console.log(cartItemInfo.id);
  // const [itemId, setItemId] = useState(id);
  // setItemId(id);
  // console.log(itemId);

  var price = price * qty;
  dispatch(totalAmount());
  const handleRemoveItem = () => {
    dispatch(removeItem({ id }));
    // console.log(itemId);
  };

  return (
    <div className="items_container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {isVeg === 1 ? (
          <img
            style={{ width: "15px", marginLeft: "-2.4px" }}
            src={veg_icon}
          ></img>
        ) : (
          <img
            style={{ width: "15px", marginLeft: "-2.4px" }}
            src={non_veg_icon}
          ></img>
        )}
        {/* <img
          style={{ width: "15px", marginLeft: "-2.4px" }}
          src={veg_icon}
        ></img> */}
        <span className="cart_item_name">{name}</span>

        <div
          id=""
          className=""
          style={{ display: "flex", border: "1px solid #e9e9eb" }}
        >
          <div
            className=" cart_decrease_qty"
            onClick={() => {
              console.log("clicked");
              var quantity = qty;
              if (quantity - 1 === 0) {
                handleRemoveItem();
                dispatch(totalAmount());
              } else {
                quantity = quantity - 1;
                setCartQty(quantity);
                console.log(cartQty);
                dispatch(decQty(id));
                dispatch(totalAmount());
              }
            }}
          >
            <div className="minus"></div>
          </div>
          <div className="cart_item_qty">{qty}</div>
          <div
            className="cart_increase_qty "
            onClick={() => {
              console.log("clicked");
              var quantity = cartQty;
              quantity = quantity + 1;
              setCartQty(quantity);
              console.log(cartQty);
              dispatch(incQty(id));
              dispatch(totalAmount());
            }}
          >
            <b>+</b>
          </div>
        </div>

        <span className="cart_total_price">&#8377; {price / 100}</span>
        {/* {console.log("iteminfo price : " + price)} */}
      </div>
      {/* <Cart {...price} /> */}
      {/* <TotalToPay data={price} /> */}
    </div>
  );
};

export default CartItemInfo;
