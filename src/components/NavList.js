import { Link } from "react-router-dom";
import search_icon from "../assets/img/search_icon.png";
import offer_icon from "../assets/img/offer_icon.png";
import help_icon from "../assets/img/help_icon.png";
import account_icon from "../assets/img/account_icon.png";
import cart_icon from "../assets/img/cart_icon.png";
import { useSelector } from "react-redux";

const NavList = () => {
  const cartItems = useSelector((store) => store.cart.itemName);

  return (
    <ul>
      {/* <div className="navlist"> */}
      <Link className="navlist" to="/search">
        <img className=" search_icon" alt="search_icon" src={search_icon}></img>
        <li className="list">Search</li>
      </Link>
      {/* </div> */}
      <div className="navlist">
        <img className=" offer_icon" alt="offer_icon" src={offer_icon}></img>
        <li className="list">Offers</li>
      </div>
      {/* <div className="navlist"> */}
      <Link className="navlist" to="/help">
        <img className=" help_icon" alt="help_icon" src={help_icon}></img>
        <li className="list">Help</li>
      </Link>
      {/* </div> */}
      <div className="navlist">
        <img
          className=" account_icon"
          alt="account_icon"
          src={account_icon}
        ></img>
        <li className="list">Sign In</li>
      </div>
      <Link className="navlist" to="/cart">
        <span className="itemLength">
          <b>{cartItems.length}</b>
        </span>
        <img className=" cart_icon" alt="cart_icon" src={cart_icon}></img>
        <li className="list">Cart</li>
      </Link>
    </ul>
  );
};

export default NavList;
