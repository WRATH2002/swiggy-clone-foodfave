import location_icon from "../assets/img/location.png";
import location_add_icon from "../assets/img/location_add.png";
import wallet_icon from "../assets/img/wallet.png";
import home_icon from "../assets/img/home.png";
import location_active from "../assets/img/location_active.svg";
import { useState, useEffect } from "react";
import quote_icon from "../assets/img/quote.png";
import offer_icon from "../assets/img/offer_icon.png";
import non_veg_icon from "../assets/img/non_veg.png";
import veg_icon from "../assets/img/veg.png";
import { useSelector } from "react-redux";
import { addItemName, addIsVeg, addPrice, qty } from "../utils/cartSlice";
import CartItemInfo from "./CartItemInfo";
import { IMG_URL, EmptyCart } from "./config";
import { Link } from "react-router-dom";
import info_icon from "../assets/img/info.png";
// import TotalToPay from "./TotalToPay";

const Cart = ({ cartQty }) => {
  // const [sum, setSum] = useState(0);
  // const updateSum = (price) => {
  //   setSum((prevSum) => prevSum + price);
  // };
  // console.log("totaltopay : " + sum);

  const cartItemInfo = useSelector((store) => store.cart.itemName);
  const cartRestuarantInfo = useSelector((store) => store.cart.restuarantInfo);
  console.log("Total price : " + cartItemInfo[0]?.price);

  const cartItemTotal = useSelector((store) => store.cart.price);
  console.log(cartItemTotal);

  const [payment, setPayment] = useState("Payment");
  const [coupon, setCoupon] = useState("");
  const [contactLess, setContactLess] = useState(
    "Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)"
  );
  const [on, setOn] = useState(true);
  const [address, setAddress] = useState("");
  const [active, setActive] = useState(false);

  const [infoState, setInfoState] = useState(false);
  const [feeState, setFeeState] = useState(false);

  function feeToggle() {
    if (feeState === false) {
      setFeeState(true);
      console.log(feeState);
    } else {
      setFeeState(false);
      console.log(feeState);
    }
  }

  function infoToggle() {
    if (infoState === false) {
      setInfoState(true);
      console.log(infoState);
    } else {
      setInfoState(false);
      console.log(infoState);
    }
  }

  function errorPayment() {
    const errorMessage = "Failed to Load Payment Methods!! Try Again Later";
    if (!active) {
      setActive(true);
    }
    return errorMessage;
  }

  function errorAddress() {
    const errorMessage = "[Service Temporarily Unavailable]";
    return errorMessage;
  }

  function noCoupon() {
    const errorCoupon = "[Coupons Not Available]";
    return errorCoupon;
  }

  function changeDescription() {
    if (on) {
      const changeMessage =
        "Our delivery partner will call to confirm. Please ensure that your address has all the required details. Temporarily Unavailable";
      setOn(!on);
      return changeMessage;
    } else {
      const changeMessage =
        "Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)";
      setOn(!on);
      return changeMessage;
    }
  }

  useEffect(() => {}, [cartItemInfo]);
  return (
    <>
      {/* <span>Helo Its Cart</span> */}

      {/* <img src={location_inactive} style={{ backgroundColor: "gray" }}></img> */}

      {cartItemInfo.length === 0 ? (
        <div className="empty_cart_page">
          <img className="empty_cart_image" src={EmptyCart}></img>
          <span className="empty_cart_header">
            <b>Your Cart is Empty</b>
          </span>
          <span className="empty_cart_subheader">
            You can go to home page to view more restaurants
          </span>
          <Link className="logo" to="/">
            <button className="empty_cart_btn">
              <b>SEE RESTAURATS NEAR YOU</b>
            </button>
          </Link>
        </div>
      ) : (
        <div className="cart_body_container">
          <div className="delivery_segment">
            <div className="delivery_image">
              <img className="delivery_segment_image" src={location_icon}></img>
            </div>
            <div className="horizontal_line"></div>
            <div className="payment_image">
              <img className="delivery_segment_image" src={wallet_icon}></img>
            </div>
          </div>

          <div className="payment_page">
            {/* <div></div>
          <div></div> */}
            <div className="cart_delivery_info">
              <div className="delivery_heading">
                <span className="del_header">
                  <b>Select delivery address</b>
                </span>

                <span className="del_subheader">
                  Select You have a saved address in this location address
                </span>
              </div>

              <div className="delivery_address_info">
                <div className="delivery_address">
                  <img
                    className="delivery_segment_image"
                    alt="home"
                    src={home_icon}
                    style={{ width: "18px" }}
                  ></img>
                  <div className="address_info">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        className="del_subheader"
                        style={{ fontSize: "15px", color: "black" }}
                      >
                        <b>Home</b>
                      </span>
                      <span
                        className="del_subsubheader"
                        style={{
                          fontSize: "12px",
                          marginTop: "7px",
                          color: "#7e808c",
                          letterSpacing: ".5px",
                        }}
                      >
                        C/52 A, Bapuji Nagar, Jadavpur, Kolkata, West Bengal,
                        India
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        className="del_subsubheader"
                        style={{
                          fontSize: "13px",
                          color: "black",
                        }}
                      >
                        <b>34 MINS</b>
                      </span>
                      <button
                        className="delivery_btn "
                        onClick={() => {
                          const errorData = errorPayment();
                          setPayment(errorData);
                        }}
                      >
                        <b>DELIVER HERE</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="delivery_address">
                  <img
                    className="delivery_segment_image"
                    alt="home"
                    src={location_add_icon}
                    style={{ width: "21px" }}
                  ></img>
                  <div className="address_info">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        className="del_subheader"
                        style={{ fontSize: "15px", color: "black" }}
                      >
                        <b>Add New Address</b>
                      </span>
                      <span
                        className="del_subsubheader"
                        style={{
                          fontSize: "12px",
                          marginTop: "7px",
                          color: "#7e808c",
                          letterSpacing: ".5px",
                        }}
                      >
                        C/52 A, Bapuji Nagar, Jadavpur, Kolkata, West Bengal,
                        India
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        className="del_subsubheader"
                        style={{
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {address}
                      </span>
                      <button
                        className="addnew_btn"
                        onClick={() => {
                          const errorData = errorAddress();
                          setAddress(errorData);
                        }}
                      >
                        <b>ADD NEW</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment_option">
              <div className="delivery_heading">
                <span
                  className="del_header"
                  style={{ color: active ? "red" : "rgb(126, 128, 140)" }}
                >
                  {payment}
                </span>
              </div>
            </div>
          </div>

          <div className="right_cart_container">
            <div className="cart_container">
              {/* <div className="cart_subcontainer"> */}
              <div className="cart_restuarant_info">
                <Link
                  className="link"
                  to={"/restuarant/" + cartRestuarantInfo[0]?.id}
                >
                  <div className="cart_restuaran_image">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={IMG_URL + cartRestuarantInfo[0]?.cloudinaryImageId}
                    ></img>
                  </div>
                </Link>

                <div className="cart_restuaran_name">
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      letterSpacing: ".5px",
                      overflow: "hidden",
                      height: "22px",
                      width: "250px",
                    }}
                  >
                    <Link
                      className="link"
                      to={"/restuarant/" + cartRestuarantInfo[0]?.id}
                    >
                      <b>{cartRestuarantInfo[0]?.name}</b>
                    </Link>
                  </span>

                  <span
                    style={{
                      fontSize: "11px",
                      marginTop: "-12px",
                      color: "black",
                      letterSpacing: ".5px",
                    }}
                  >
                    <Link
                      className="link"
                      to={"/restuarant/" + cartRestuarantInfo[0]?.id}
                    >
                      {cartRestuarantInfo[0]?.areaName}
                    </Link>
                  </span>

                  <div className="underline"></div>
                </div>
              </div>
              <div className="cart_items_info">
                <div
                  style={{
                    width: "314.5px",
                  }}
                >
                  {cartItemInfo.map((menulist, index) => {
                    return (
                      <CartItemInfo
                        key={index}
                        // updateSum={updateSum}
                        {...menulist}
                      />
                    );
                  })}

                  {/* <div className="items_container">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      style={{ width: "15px", marginLeft: "-2.4px" }}
                      src={veg_icon}
                    ></img>
                    <span className="cart_item_name">
                      2 Double Down Burgers & Fries Mealatbdbwrywryb
                      wrbtwrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                    </span>

                    <div
                      id=""
                      className=""
                      style={{ display: "flex", border: "1px solid #e9e9eb" }}
                    >
                      <div className=" cart_decrease_qty">
                        <div className="minus"></div>
                      </div>
                      <div className="cart_item_qty">3</div>
                      <div className="cart_increase_qty ">
                        <b>+</b>
                      </div>
                    </div>

                    <span className="cart_total_price">&#8377; 679.05</span>
                  </div>
                </div> */}
                  <input
                    className="feedback w"
                    placeholder='" Any suggestions? We will pass it on ...'
                  ></input>

                  <div className="contactless_delivery w">
                    <input
                      onClick={() => {
                        const changeData = changeDescription();
                        setContactLess(changeData);
                      }}
                      type="checkbox"
                      className="checkbox"
                      style={{ width: "42px", height: "26px" }}
                    ></input>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          paddingLeft: "16px",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        Opt in for No-contact Delivery
                      </span>
                      <span
                        style={{
                          paddingLeft: "16px",
                          fontSize: "12px",
                          color: "#515151",
                        }}
                      >
                        {contactLess}
                      </span>
                    </div>
                  </div>
                  <div className="coupon w">
                    <div
                      onClick={() => {
                        const errorCoupon = noCoupon();
                        setCoupon(errorCoupon);
                      }}
                      style={{
                        width: "100%",
                        height: "26px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={offer_icon}
                        style={{
                          width: "20px",
                        }}
                      ></img>
                      <span
                        style={{
                          paddingLeft: "16px",
                          fontSize: "13px",
                          color: "black",
                        }}
                      >
                        Apply Coupon
                      </span>
                      <span
                        style={{
                          paddingLeft: "7px",
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {coupon}
                      </span>
                    </div>
                  </div>
                  <div className="bill_container w">
                    <span className="billHeader">
                      <b>Bill Details</b>
                    </span>
                    <div className="itemTotal s">
                      <span>Item Total</span>
                      <span>&#8377; {cartItemTotal / 100}</span>
                    </div>
                    <div className="deliveryFee s">
                      <span>Delivery Fee</span>
                      <span>
                        <strike>&#8377; 60</strike>
                        <b style={{ color: "#60b246" }}> FREE</b>
                      </span>
                    </div>
                    <div className="s">
                      <div
                        style={{
                          width: "100%",
                          borderBottom: "1px solid rgb(233, 233, 235)",
                        }}
                      ></div>
                    </div>
                    <div className="s">
                      <span>Delivery Tip</span>
                      <span style={{ color: "#ff6b6b", cursor: "pointer" }}>
                        Add Tip
                      </span>
                    </div>
                    <div className="s">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>Platform fee</span>
                        <img
                          style={{
                            width: "17px",
                            paddingLeft: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            feeToggle();
                          }}
                          src={info_icon}
                        ></img>
                      </div>
                      <span>
                        <strike>&#8377; 5</strike>
                        <b style={{ color: "#60b246" }}> FREE</b>
                      </span>
                    </div>
                    {!feeState ? (
                      <></>
                    ) : (
                      <div
                        className="s"
                        style={{
                          marginTop: "8px",
                          marginBottom: "8px",
                          color: "#afafaf",
                        }}
                      >
                        <div
                          style={{
                            // display: "flex",
                            // flexDirection: "column",
                            // alignItems: "flex-start",
                            width: "182px",
                            lineHeight: "13px",
                            fontSize: "11px",
                            textAlign: "justify",
                          }}
                        >
                          <span>
                            This fee helps us operate and improve our platform,
                            delivery and seemless app experience
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="s">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>GST and Restaurant Charges</span>
                        <img
                          style={{
                            width: "17px",
                            paddingLeft: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            infoToggle();
                          }}
                          src={info_icon}
                        ></img>
                      </div>
                      <span>
                        &#8377;{" "}
                        {(
                          (cartItemTotal / 100) * 0.18 +
                          cartItemTotal / 100
                        ).toFixed(2)}
                      </span>
                    </div>
                    {!infoState ? (
                      <></>
                    ) : (
                      <div
                        className="s"
                        style={{ marginTop: "2px", color: "#afafaf" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "182px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "11px",
                              width: "100%",
                            }}
                          >
                            <span>Restaurant Packaging</span>
                            <span>
                              <strike>&#8377; 7</strike>
                              <span style={{ color: "rgb(96, 178, 70)" }}>
                                {" "}
                                FREE
                              </span>
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "11px",
                              width: "100%",
                            }}
                          >
                            <span>Restaurant GST</span>
                            <span>
                              &#8377;{" "}
                              {((cartItemTotal / 100) * 0.18).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="cart_total_info cart_restuarant_info">
                <div className="cart_total_pay">
                  <span style={{ width: "50%", fontSize: "14px" }}>
                    <b>TO PAY</b>
                  </span>
                  <span
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "14px",
                    }}
                  >
                    <b>
                      &#8377;{" "}
                      {(
                        (cartItemTotal / 100) * 0.18 +
                        cartItemTotal / 100
                      ).toFixed(2)}
                    </b>
                  </span>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="cart_cancellation_container">
              <div
                style={{
                  width: "275px",
                  padding: "20px",
                  border: "1px solid #e9e9eb",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: "15px" }}>
                  <b>
                    Review your order and address details to avoid cancellations
                  </b>
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    lineHeight: "18px",
                    color: "rgb(79 79 79)",
                  }}
                >
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    Note:
                  </span>{" "}
                  If you cancel within 60 seconds of placing your order, a 100%
                  refund will be issued. No refund for cancellations made after
                  60 seconds.
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    marginTop: "23px",
                    color: "rgb(161 161 161)",
                  }}
                >
                  Avoid cancellation as it leads to food wastage.
                </span>
                <span
                  style={{
                    fontSize: "12.5px",
                    marginTop: "10px",
                    width: "142px",
                    height: "20px",
                    color: "red",
                    borderBottom: "1px solid #ff9e9e",
                    cursor: "pointer",
                  }}
                >
                  <b>Read cancellation policy</b>
                </span>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
