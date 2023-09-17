import { RestaurantList } from "./config";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { IMG_URL } from "./config";
import star_icon from "../assets/img/star.png";
import { Link } from "react-router-dom";
import left_arrow_icon from "../assets/img/left-arrow.png";
import right_arrow_icon from "../assets/img/right-arrow.png";
import filter_icon from "../assets/img/filter.png";
import RestaurantCardShimmer from "./RestuarantCardShimmer";
import {
  useTopRestuarant,
  useFilteredRestuarants,
  useAllRestuarants,
  useSortConfig,
} from "../utils/useRestuarant";

// function filterData(searchInputText, filteredRestuarants, allRestuarants) {
//   if (searchInputText === "") {
//     return allRestuarants;
//   } else {
//     const lowerSearchInputText = searchInputText.toLowerCase();
//     const filteredData = allRestuarants.filter((restuarant) =>
//       restuarant.info.name.toLowerCase().includes(lowerSearchInputText)
//     );
//     return filteredData;
//   }
//   // const searchText = searchInputText.replace(
//   //   /^./,
//   //   searchInputText[0].toUpperCase()
//   // );
//   // console.log(searchText);
//   // const RestauranNewtList = restuarants.slice();
// }

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRatingString,
  cuisines,
  locality,
}) => {
  return (
    <>
      <div className="subcard">
        <div className="card">
          <div className="restuarant_image">
            <img
              className="restuarant_image"
              alt="restuarant_image"
              src={IMG_URL + cloudinaryImageId}
            ></img>
          </div>
          <div className="restuarant_info">
            <h1 className="restuarant_name">
              <b>{name}</b>
            </h1>
            <span className="restuarant_rating">
              <img className="star_icon" alt="star_icon" src={star_icon}></img>
              <h1 className="rating">{avgRatingString}</h1>
            </span>
            <h1 className="restuarant_cuisine">{cuisines.join(", ")}</h1>

            <h1 className="restuarant_locality">{locality}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const SortConfigs = ({ title }) => {
  return (
    <>
      <span className="sort">{title}</span>
    </>
  );
};

// const MenuList = ({ name }) => {
//   return (
//     <>
//       <h1>{name}</h1>
//     </>
//   );
// };

// function slide() {
//   const buttonRight = document.getElementById("slideRight");
//   const buttonLeft = document.getElementById("slideLeft");

//   buttonRight.onclick = function () {
//     document.getElementById("card_container_carousel").scrollLeft += 20;
//   };
//   buttonLeft.onclick = function () {
//     document.getElementById("card_container_carousel").scrollLeft -= 20;
//   };
// }

function scrollLeft1() {
  document.getElementById("img_carousel").scrollLeft -= 820;
}
function scrollRight1() {
  document.getElementById("img_carousel").scrollLeft += 820;
}
function scrollLeft2() {
  document.getElementById("card_carousel").scrollLeft -= 920;
}
function scrollRight2() {
  document.getElementById("card_carousel").scrollLeft += 835;
}

const ImgCarousel = ({ imageId }) => {
  return (
    <>
      <img style={{ width: "420px" }} src={IMG_URL + imageId}></img>
    </>
  );
};

const RestaurantCardList = () => {
  // const topRestuarants = useTopRestuarant();
  // const filteredRestuarants = useFilteredRestuarants();
  // const allRestuarants = useAllRestuarants();
  // const sortConfig = useSortConfig();
  const [topRestuarants, setTopRestuarants] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [allRestuarants, setAllRestuarants] = useState([]);
  const [sortConfig, setSortConfig] = useState([]);
  const [imgCarousel, setImgCarousel] = useState([]);

  useEffect(() => {
    getrestuarants();
    // console.log(topRestuarants);
  }, []);

  async function getrestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4875917&lng=88.3711233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setImgCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setFilteredRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSortConfig(json?.data?.cards[4]?.card?.card?.sortConfigs);
  }
  console.log(filteredRestuarants);
  console.log(topRestuarants);
  console.log(imgCarousel);
  if (!allRestuarants) return <h1>Failed to Fetch Retaurants</h1>;

  function filterRating() {
    const update = filteredRestuarants.sort(
      (a, b) => b.info.avgRating - a.info.avgRating
    );
    setFilteredRestuarants(update);
    const falseUpdate = filteredRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  function filterDeliveryTime() {
    const update = filteredRestuarants.sort(
      (a, b) => b.info.sla.deliveryTime - a.info.sla.deliveryTime
    );
    setFilteredRestuarants(update);
    const falseUpdate = filteredRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  function filterCostHtL() {
    const update = filteredRestuarants.sort(
      (a, b) => b.info.feeDetails.totalFee - a.info.feeDetails.totalFee
    );
    setFilteredRestuarants(update);
    const falseUpdate = filteredRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  function filterCostLtH() {
    const update = filteredRestuarants.sort(
      (a, b) => a.info.feeDetails.totalFee - b.info.feeDetails.totalFee
    );
    setFilteredRestuarants(update);
    const falseUpdate = filteredRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  function filterRelevance() {
    setFilteredRestuarants(allRestuarants);
    const falseUpdate = allRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  function filterVeg() {
    const update = filteredRestuarants.sort(
      (a, b) => a.info.feeDetails.totalFee - b.info.feeDetails.totalFee
    );
    setFilteredRestuarants(update);
    const falseUpdate = filteredRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  function filterNonVeg() {
    const update = filteredRestuarants.sort(
      (a, b) => a.info.feeDetails.totalFee - b.info.feeDetails.totalFee
    );
    setFilteredRestuarants(update);
    const falseUpdate = filteredRestuarants.filter(
      (item) => item.info.avgRating > 0
    );
    setFilteredRestuarants(falseUpdate);
  }

  return filteredRestuarants?.length === 0 ? (
    <RestaurantCardShimmer />
  ) : (
    <>
      {/* <input
        type="text"
        className="searchinput"
        placeholder="Search Foods or Restuarants"
        value={searchInputText}
        onChange={(e) => {
          setSearchInputText(e.target.value);
          console.log(searchInputText);
        }}
      ></input>
      <button
        onClick={() => {
          const filteredData = filterData(
            searchInputText,
            filteredRestuarants,
            allRestuarants
          );
          setFilteredRestuarants(filteredData);
        }}
      >
        Search
      </button> */}
      {/* <h1>Restaurants with online food delivery in Kolkata</h1> */}
      <div className="card_list_container">
        <div className="card_list_subcontainer">
          <div className="scroll_btn">
            <span style={{ fontSize: "20px", marginLeft: "16px" }}>
              <b>Top restaurant chains in Kolkata</b>
            </span>
            <div style={{ display: "flex" }}>
              <button
                id="slideLeft"
                className="slide"
                onClick={() => scrollLeft1()}
              >
                <img className="left_arrow" src={left_arrow_icon}></img>
              </button>
              <button
                id="slideRight"
                className="right_arrow"
                onClick={() => scrollRight1()}
              >
                <img className="right_arrow" src={right_arrow_icon}></img>
              </button>
            </div>
          </div>
          <div id="img_carousel" className="card_carousel">
            {imgCarousel.map((restuarant, index) => {
              return (
                <Link
                  className="link"
                  style={{ margin: "9px 17px" }}
                  to={"/restuarant/" + restuarant.entityId}
                >
                  <ImgCarousel key={index} {...restuarant} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="card_list_subcontainer">
          <div className="scroll_btn">
            <span style={{ fontSize: "20px", marginLeft: "16px" }}>
              <b>Top restaurant chains in Kolkata</b>
            </span>
            <div style={{ display: "flex" }}>
              <button
                id="slideLeft2"
                className=" slideL"
                onClick={() => scrollLeft2()}
              >
                <img className="left_arrow " src={left_arrow_icon}></img>
              </button>
              <button
                id="slideRight"
                className="right_arrow "
                onClick={() => scrollRight2()}
              >
                <img className="right_arrow" src={right_arrow_icon}></img>
              </button>
            </div>
          </div>
          <div id="card_carousel" className="card_carousel">
            {topRestuarants.map((restuarant, index) => {
              return (
                <Link
                  className="link"
                  style={{ margin: "9px 17px" }}
                  to={"/restuarant/" + restuarant.info.id}
                >
                  <RestaurantCard key={index} {...restuarant.info} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <div className="separation_line">
        <div className="line"></div>
      </div>
      <br></br>
      <div className="card_container">
        <span className="sort" style={{ cursor: "initial" }}>
          Filter{" "}
          <img
            style={{ margin: "0px 5px", width: "13px" }}
            src={filter_icon}
          ></img>
        </span>
        {/* {sortConfig.map((config, index) => {
          return <SortConfigs key={index} {...config} />;
        })} */}
        <span className="sort" onClick={() => filterRelevance()}>
          Relevance
        </span>
        <span className="sort" onClick={() => filterDeliveryTime()}>
          Delivery Time
        </span>
        <span className="sort" onClick={() => filterRating()}>
          Rating
        </span>
        <span className="sort" onClick={() => filterCostLtH()}>
          Cost: Low to High
        </span>
        <span className="sort" onClick={() => filterCostHtL()}>
          Cost: High to Low
        </span>
      </div>
      <br></br>
      <div className="card_list_container">
        <div className="card_list_subcontainer">
          <span style={{ fontSize: "20px", marginLeft: "16px" }}>
            Restaurants with online food delivery in Kolkata
          </span>
          <div className="card_container">
            {filteredRestuarants?.length === 0 ? (
              <h1>No Match Found</h1>
            ) : (
              filteredRestuarants.map((restuarant, index) => {
                return (
                  <Link
                    className="link"
                    style={{ margin: "9px 17px" }}
                    to={"/restuarant/" + restuarant.info.id}
                  >
                    <RestaurantCard key={index} {...restuarant.info} />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCardList;
