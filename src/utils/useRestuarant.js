import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const useTopRestuarant = () => {
  const [topRestuarants, setTopRestuarants] = useState([]);

  useEffect(() => {
    getrestuarants();
  }, []);

  async function getrestuarants() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4875917&lng=88.3711233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setTopRestuarants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return topRestuarants;
};

export const useFilteredRestuarants = () => {
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  useEffect(() => {
    getrestuarants();
  }, []);

  async function getrestuarants() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4875917&lng=88.3711233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return filteredRestuarants;
};

export const useAllRestuarants = () => {
  const [allRestuarants, setAllRestuarants] = useState([]);

  useEffect(() => {
    getrestuarants();
  }, []);

  async function getrestuarants() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4875917&lng=88.3711233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestuarants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return allRestuarants;
};

export const useSortConfig = () => {
  const [sortConfig, setSortConfig] = useState([]);

  useEffect(() => {
    getrestuarants();
  }, []);

  async function getrestuarants() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4875917&lng=88.3711233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setSortConfig(json?.data?.cards[4]?.card?.card?.sortConfigs);
  }
  return sortConfig;
};

export const usePopularCuisines = () => {
  const [popularCuisines, setPopularCuisines] = useState([]);

  useEffect(() => {
    getrestuarants();
  }, []);

  async function getrestuarants() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=22.4875917&lng=88.3711233"
    );
    const json = await data.json();
    console.log(json);
    setPopularCuisines(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  }
  return popularCuisines;
};
