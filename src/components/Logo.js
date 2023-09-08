import { Link } from "react-router-dom";
import salad from "../assets/img/salad.png";
import hamburger from "../assets/img/hamburger.png";
import food_icon from "../assets/img/food.png";
import down_icon from "../assets/img/down.png";

const Logo = () => {
  return (
    <>
      <Link className="logo" to="/">
        {/* <h1 className="logo"> */}
        <img className="logo_image" alt="logo" src={food_icon}></img>
        {/* <h1>FOODFAVES</h1> */}
        <span style={{ display: "flex", alignItems: "center" }}>
          Bapuji Nagar, Jadavpur, Kolkata, West...{" "}
          <img
            style={{ width: "20px", marginLeft: "6px" }}
            src={down_icon}
          ></img>
        </span>
        {/* </h1> */}
      </Link>
    </>
  );
};

export default Logo;
