import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo";
import NavList from "./NavList";

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
  return (
    <>
      <div className="navbar">
        <Logo />
        <NavList />
        {/* <DarkLightToggle /> */}
      </div>
    </>
  );
};

export default Header;
