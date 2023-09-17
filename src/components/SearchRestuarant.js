import { useState, useEffect } from "react";
import { IMG_URL } from "./config";
import search_icon from "../assets/img/search.png";
import {
  useFilteredRestuarants,
  usePopularCuisines,
} from "../utils/useRestuarant";
import star_icon from "../assets/img/star.png";
import { IMG_URL } from "./config";
import { Link } from "react-router-dom";
// import { RestaurantCard } from "./RestuarantCard";
import SearchRestuarantShimmer from "./SearchRestuarantShimmer";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRatingString,
  cuisines,
  locality,
  id,
}) => {
  return (
    <>
      <div
        style={{
          // backgroundColor: "gray",
          height: "100px",
          width: "70%",
          margin: "20px",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <Link
          className="link"
          to={"/restuarant/" + id}
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <div
            style={{
              width: "14%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
              // marginRight: "20px",
            }}
          >
            <img
              src={IMG_URL + cloudinaryImageId}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: " 0 15px 40px -20px #282c3f26",
              }}
            ></img>
          </div>
          <div
            style={{
              width: "86%",
              height: "100%",
              backgroundColor: "white",
              fontFamily: "   Noto Sans Multani, sans-serif",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ fontSize: "16px" }}>
                <b>{name}</b>
              </span>
              <span className="restuarant_rating" style={{ marginTop: "5px" }}>
                <img
                  className="star_icon"
                  alt="star_icon"
                  src={star_icon}
                  style={{ marginTop: "0px" }}
                ></img>
                <span style={{ fontSize: "14px", marginLeft: "7px" }}>
                  {avgRatingString}
                </span>
              </span>
              <span
                style={{ fontSize: "12px", color: "#898989", marginTop: "5px" }}
              >
                {cuisines.join(", ")}
              </span>

              <span
                style={{ fontSize: "12px", color: "#898989", marginTop: "5px" }}
              >
                {locality}
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* <div className="subcard">
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
      </div> */}
    </>
  );
};

function filterData(
  searchInputText,
  filteredRestuarants,
  allRestuarants,
  setRecentSearches,
  recentSearches,
  topRestuarants
) {
  console.log(allRestuarants);
  if (searchInputText === "") {
    const lowerSearchInputText = "//";
    const filteredData = allRestuarants.filter((restuarant) =>
      restuarant.info.name.toLowerCase().includes(lowerSearchInputText)
    );
    return filteredData;
  } else {
    const isSearchRepeat = recentSearches.filter((searches) =>
      searches.toLowerCase().includes(searchInputText.toLowerCase())
    );
    if (
      isSearchRepeat.length != 0 ||
      searchInputText.toLowerCase() === "aminia"
    ) {
      console.log("Repeat");
    } else {
      setRecentSearches((current) => [...current, searchInputText]);
    }

    const lowerSearchInputText = searchInputText.toLowerCase();
    const filteredData =
      (allRestuarants.filter((restuarant) =>
        restuarant.info.name.toLowerCase().includes(lowerSearchInputText)
      ),
      topRestuarants.filter((restuarant) =>
        restuarant.info.name.toLowerCase().includes(lowerSearchInputText)
      ));

    return filteredData;
  }
}

const PopularCuisines = (imageId, entityType) => {
  return (
    <>
      <img src={IMG_URL + imageId}></img>
      <span>{imageId}</span>
      {/* {console.log(imageId)} */}
    </>
  );
};

const RecentSearchHistory = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img className="search_icon_btn" src={search_icon}></img>
      <span style={{ marginLeft: "15px" }} key="01">
        Aminia
      </span>
    </div>
  );
};

const SearchRestuarant = () => {
  const popularCuisines = usePopularCuisines();
  // const [popularCuisines, setPopularCuisines] = useState([]);

  const [searchInputText, setSearchInputText] = useState("");
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [allRestuarants, setAllRestuarants] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [topRestuarants, setTopRestuarants] = useState([]);
  const [totalRes, setTotalRes] = useState([]);

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
    // setFilteredRestuarants(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setTopRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // setTotalRes(topRestuarants);
  // console.log(totalRes);

  // setAllRestuarants((res) => [...res, topRestuarants]);

  console.log(popularCuisines);
  return allRestuarants?.length === 0 ? (
    // <h1>Loading</h1>
    <SearchRestuarantShimmer />
  ) : (
    <>
      <div style={{ width: "100%", height: "calc(100vh - 100px)" }}>
        <div className="search_container">
          <div className="search_subcontainer">
            <input
              type="text"
              className="search_input"
              placeholder="Search Food or Restuarant"
              value={searchInputText}
              onChange={(e) => {
                setSearchInputText(e.target.value);
                console.log(searchInputText);
              }}
            ></input>
            <button
              className="search_btn"
              onClick={() => {
                // setRecentSearches(searchInputText);
                // console.log(recentSearches);
                const filteredData = filterData(
                  searchInputText,
                  filteredRestuarants,
                  allRestuarants,
                  setRecentSearches,
                  recentSearches,
                  topRestuarants
                );
                setFilteredRestuarants(filteredData);
              }}
            >
              <img className="search_icon_btn" src={search_icon}></img>
            </button>
          </div>
        </div>

        {/* <div className="card_list_container">
        <div className="card_list_subcontainer">
          <div className="card_container"> */}
        <div
          className="popular_cuisines_container"
          style={{ marginBottom: "60px" }}
        >
          {filteredRestuarants?.length === 0 ? (
            <>
              <span
                className="popular_cuisines_heading"
                style={{ fontSize: "20px" }}
              >
                <b>Recent Searches</b>
              </span>
              <div className="recent_search_history">
                <RecentSearchHistory />
                {recentSearches.map((history, index) => {
                  return (
                    <>
                      <div className="popular_cuisines_container">
                        <div className="search_history_separate"> </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          className="search_icon_btn"
                          src={search_icon}
                        ></img>
                        <span style={{ marginLeft: "15px" }} key={index}>
                          {history}
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            filteredRestuarants.map((restuarant, index) => {
              return <RestaurantCard key={index} {...restuarant.info} />;
            })
          )}
        </div>
        {/* </div>
        </div>
      </div> */}

        <div className="popular_cuisines_container">
          <span className="popular_cuisines_heading">
            <b>Popular Cuisines</b>
          </span>
          <div className="popular_cuisines_image_container">
            {popularCuisines.map(({ imageId, index }) => {
              return (
                <img
                  className="popular_cuisines_image"
                  key={index}
                  src={IMG_URL + imageId}
                ></img>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchRestuarant;
