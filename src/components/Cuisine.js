import { BestCuisines } from "./config";

const Cuisine = ({ text }) => {
  return (
    <div className="restuarant_near_me">
      <h1>{text}</h1>
    </div>
  );
};

const BestCuisine = () => {
  return (
    <div className="restuarant_near_me_container">
      {BestCuisines.map((cuisine, index) => {
        return <Cuisine key={index} {...cuisine} />;
      })}
    </div>
  );
};

export default BestCuisine;
