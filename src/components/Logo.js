import { Link } from "react-router-dom";
import salad from "../assets/img/salad.png";
import hamburger from "../assets/img/hamburger.png";

const Logo = () => {
  return (
    <>
      <Link className="logo" to="/">
        {/* <h1 className="logo"> */}
        <img className="logo_image" alt="logo" src={hamburger}></img>
        <h1>FOODFAVES</h1>
        {/* </h1> */}
      </Link>
    </>
  );
};

export default Logo;
