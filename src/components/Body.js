import RestaurantCardList from "./RestuarantCard";
import BestCuisine from "./Cuisine";

const Body = () => {
  return (
    <>
      <RestaurantCardList />
      <div className="separation_line">
        <div className="line"></div>
      </div>
      <BestCuisine />
    </>
  );
};

export default Body;
