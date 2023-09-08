import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo";
import NavList from "./NavList";
import cross_icon from "../assets/img/cross.png";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import search_icon from "../assets/img/search_icon.png";
import offer_icon from "../assets/img/offer_icon.png";
import help_icon from "../assets/img/help_icon.png";
import account_icon from "../assets/img/account_icon.png";
import cart_icon from "../assets/img/cart_icon.png";
import { useSelector } from "react-redux";

// const DarkLightToggle = () => {
//   return (
//     <div>
//       <input type="checkbox" className="checkbox" id="checkbox"></input>
//       <label for="checkbox" className="checkbox-label">
//         <i className="fas fa-moon"></i>
//         <i className="fas fa-sun"></i>
//         <span className="ball"></span>
//       </label>
//     </div>
//   );
// };

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.itemName);
  const [toggle, setToggle] = useState(false);
  const [toggleSignIn, setToggleSignIn] = useState(false);

  function togglesignin() {
    const flag = !toggle;
    setToggle(flag);
  }

  function togglein() {
    const flag = !toggleSignIn;
    setToggleSignIn(flag);
  }
  return (
    <>
      <div className="navbar">
        <Logo />
        {/* <NavList /> */}
        <ul>
          {/* <div className="navlist"> */}
          <Link className="navlist" to="/search">
            <img
              className=" search_icon"
              alt="search_icon"
              src={search_icon}
            ></img>
            <li className="list">Search</li>
          </Link>
          {/* </div> */}
          <div className="navlist">
            <img
              className=" offer_icon"
              alt="offer_icon"
              src={offer_icon}
            ></img>
            <li className="list">Offers</li>
          </div>
          {/* <div className="navlist"> */}
          <Link className="navlist" to="/help">
            <img className=" help_icon" alt="help_icon" src={help_icon}></img>
            <li className="list">Help</li>
          </Link>
          {/* </div> */}
          <div className="navlist" onClick={() => togglesignin()}>
            <img
              className=" account_icon"
              alt="account_icon"
              src={account_icon}
            ></img>
            <li className="list">Sign In</li>
          </div>
          <Link className="navlist" to="/cart">
            {cartItems.length === 0 ? (
              <span
                className="itemLength"
                style={{ backgroundColor: "transparent" }}
              ></span>
            ) : (
              <span className="itemLength">
                <b>{cartItems.length}</b>
              </span>
            )}
            <img className=" cart_icon" alt="cart_icon" src={cart_icon}></img>
            <li className="list">Cart</li>
          </Link>
        </ul>
        {/* <DarkLightToggle /> */}
      </div>
      {toggle === false ? (
        <></>
      ) : (
        <div
          style={{
            display: "flex",
            zIndex: "10",
            marginTop: "-80px",
            justifyContent: "flex-end",
            width: "100%",
            position: "fixed",
            background: " #0000007a",
          }}
        >
          <div
            id="right_cont"
            style={{
              backgroundColor: "white",
              width: "535px",
              height: "100vh",
              zIndex: "10",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "355px",
                height: "calc(100vh - 80px)",
                marginLeft: "40px",
                // backgroundColor: "gray",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                className="cross_login"
                src={cross_icon}
                onClick={() => togglesignin()}
              ></img>
              {toggleSignIn === false ? (
                <>
                  <span className="login">
                    <b>Login</b>
                  </span>
                  <span className="switch_login">
                    or{" "}
                    <span
                      style={{ color: " #fc8019" }}
                      onClick={() => togglein()}
                    >
                      create an account
                    </span>
                  </span>
                  <spna className="underline_login"></spna>
                  <input
                    className="phonenumber_login"
                    placeholder="Phone Number"
                  ></input>

                  {/* <span className="placeholder_login">Phone Number</span> */}
                  <button className="btn_login">
                    <b>LOGIN</b>
                  </button>
                  <span
                    className="switch_login"
                    style={{ fontSize: "12px", color: "#707070" }}
                  >
                    By clicking on Login, I accept the{" "}
                    <span style={{ color: "black", cursor: "pointer" }}>
                      Terms & Conditions & Privacy Policy
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="login">
                    <b>Sign Up</b>
                  </span>
                  <span className="switch_login">
                    or{" "}
                    <span
                      style={{ color: " #fc8019" }}
                      onClick={() => togglein()}
                    >
                      login to your account
                    </span>
                  </span>
                  <spna className="underline_login"></spna>
                  <input
                    className="phonenumber_login"
                    placeholder="Phone Number"
                  ></input>
                  <input
                    className="phonenumber_login"
                    placeholder="Name"
                    style={{ marginTop: "0px" }}
                  ></input>
                  <input
                    className="phonenumber_login"
                    placeholder="Email"
                    style={{ marginTop: "0px" }}
                  ></input>
                  <span className="switch_login">
                    <span
                      style={{ color: " #5d8ed5", marginTop: "10px" }}
                      onClick={() => togglein()}
                    >
                      Have a referral code ?
                    </span>
                  </span>

                  {/* <span className="placeholder_login">Phone Number</span> */}
                  <button className="btn_login">
                    <b>CONTINUE</b>
                  </button>
                  <span
                    className="switch_login"
                    style={{ fontSize: "12px", color: "#707070" }}
                  >
                    By clicking on Login, I accept the{" "}
                    <span style={{ color: "black", cursor: "pointer" }}>
                      Terms & Conditions & Privacy Policy
                    </span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
