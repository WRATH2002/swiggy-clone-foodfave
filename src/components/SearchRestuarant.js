import { useState, useEffect } from "react";
import { IMG_URL } from "./config";
import search_icon from "../assets/img/search.png";
import {
  useFilteredRestuarants,
  usePopularCuisines,
} from "../utils/useRestuarant";
import { RestaurantCard } from "./RestuarantCard";
import SearchRestuarantShimmer from "./SearchRestuarantShimmer";

function filterData(
  searchInputText,
  filteredRestuarants,
  allRestuarants,
  setRecentSearches,
  recentSearches
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
    const filteredData = allRestuarants.filter((restuarant) =>
      restuarant.info.name.toLowerCase().includes(lowerSearchInputText)
    );
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

  // useEffect(() => {
  //   getrestuarants();
  // }, []);

  // async function getrestuarants() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=22.4875917&lng=88.3711233"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setPopularCuisines(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
  //   );
  // }

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
    setAllRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

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
                  recentSearches
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
              return (
                // <Link className="link" to={"/restuarant/" + restuarant.info.id}>
                <RestaurantCard key={index} {...restuarant.info} />
                // </Link>
              );
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
