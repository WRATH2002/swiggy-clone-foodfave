import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_URL } from "./config";
import veg_icon from "../assets/img/veg.png";
import non_veg_icon from "../assets/img/non_veg.png";
import rating_star from "../assets/img/rating_star.png";
import rupee_icon from "../assets/img/rupee_icon.png";
import clock_icon from "../assets/img/time.png";
import heart_icon from "../assets/img/heart.png";
import heart_pink_icon from "../assets/img/heart_2.png";
import search_icon from "../assets/img/search.png";
import RestuarantMenuShimmer from "./RetuarantMenuShimmer";
import no_photo_icon from "../assets/img/no-photo.png";
import {
  addItemName,
  totalAmount,
  addIsVeg,
  addPrice,
  removeItem,
  incQty,
  decQty,
  totalAmount,
  addRestuarantInfo,
  clearCart,
  uniqueItem,
  clearItemName,
  incFlag,
  decFlag,
} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItemName, addIsVeg, addPrice, qty } from "../utils/cartSlice";
import CartItemInfo from "./CartItemInfo";
import { useSelector } from "react-redux";
import cross_icon from "../assets/img/cross.png";

const MenuImageViewer = (props) => {
  return (
    <>
      <div className="photo_container">
        <div
          style={{
            width: "460px",
            height: "460px",
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div>
            {props.data.imageId === undefined ? (
              <img
                className=""
                src={no_photo_icon}
                style={{ cursor: "pointer" }}
                onClick={() => imageViewerToggler()}
              ></img>
            ) : (
              <img
                className=""
                src={IMG_URL + props.data.imageId}
                style={{
                  cursor: "pointer",
                  width: "460px",
                  height: "350px",
                  borderRadius: "15px",
                }}
                onClick={() => imageViewerToggler()}
              ></img>
            )}
          </div>
          <span>
            {props.data.isVeg === 1 ? (
              <img
                style={{ width: "20px", marginTop: "10px", marginLeft: "-2px" }}
                className=""
                src={veg_icon}
              ></img>
            ) : (
              <img
                style={{ width: "20px", marginTop: "10px", marginLeft: "-2px" }}
                className=""
                src={non_veg_icon}
              ></img>
            )}
          </span>
          <span style={{ width: "100%", height: "25px" }}>
            <b>{props.data.name}</b>
          </span>
          <span
            style={{
              width: "100%",
              height: "25px",
              marginTop: "3px",
              fontSize: "15px",
            }}
          >
            {props.data.price === undefined ? (
              <span className="">
                <span>&#x20b9;</span>
                {props.data.defaultPrice / 100}
              </span>
            ) : (
              <span className="">
                <span>&#x20b9;</span>
                {props.data.price / 100}
              </span>
            )}
          </span>
          <span
            style={{
              width: "100%",
              height: "20px",
              marginTop: "3px",
              fontSize: "13px",
              overflow: "hidden",
              color: "#787878",
            }}
          >
            {props.data.description}
          </span>
        </div>
        <div>
          <img src={cross_icon}></img>
        </div>
      </div>
    </>
  );
};

const MenuList = ({
  name,
  imageId,
  description,
  price,
  defaultPrice,
  isVeg,
  id,
}) => {
  // const restuarantName = name;
  // const restuarantAreaName = areaName;
  // const restuarantImage = cloudinaryImageId;

  // console.log(restuarantInfo.info.name);
  // console.log(restuarantInfo.info.areaName);
  // console.log(restuarantInfo.info.cloudinaryImageId);
  const cartItemInfo = useSelector((store) => store.cart.itemName);
  const cartItemTotal = useSelector((store) => store.cart.price);
  const flag = useSelector((store) => store.cart.flag);
  console.log(cartItemTotal);

  const dispatch = useDispatch();
  const [toggleAddBtn, setToggleAddBtn] = useState(false);
  const [qty, setQty] = useState(1);

  const [cartQty, setCartQty] = useState(1);
  const [imgViewer, setImgViewer] = useState(false);

  function toggleBtn() {
    const flag = !toggleAddBtn;
    setToggleAddBtn(flag);
  }

  function imageViewerToggler() {
    const flag = !imgViewer;
    setImgViewer(flag);
    console.log(imgViewer);
  }

  const handleAddItem = () => {
    dispatch(addItemName({ name, isVeg, price, qty, id }));

    console.log(id);
  };
  const handleRemoveItem = () => {
    dispatch(removeItem({ id }));
    // console.log(itemId);
  };

  function checkPrevMenu(id) {
    const itemidchecker = cartItemInfo;
    const temp = itemidchecker.filter((item) => item.id === id);
    console.log(temp);
    return temp;
  }

  function showAlert() {
    var x = document.getElementById("alreadyitemalerttext");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1500);
  }

  return (
    <>
      {imgViewer === false ? (
        <></>
      ) : (
        // <MenuImageViewer
        //   data={{ imageId, name, isVeg, description, price, defaultPrice }}
        // />
        <div className="photo_container">
          <div
            style={{
              width: "460px",
              height: "460px",
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {imageId === undefined ? (
                <img
                  className=""
                  src={no_photo_icon}
                  style={{ objectFit: "cover", width: "76%" }}
                ></img>
              ) : (
                <img
                  className=""
                  src={IMG_URL + imageId}
                  style={{
                    width: "460px",
                    height: "350px",
                    borderRadius: "15px",
                    objectFit: "cover",
                  }}
                ></img>
              )}
            </div>
            <span>
              {isVeg === 1 ? (
                <img
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    marginLeft: "-2px",
                  }}
                  className=""
                  src={veg_icon}
                ></img>
              ) : (
                <img
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    marginLeft: "-2px",
                  }}
                  className=""
                  src={non_veg_icon}
                ></img>
              )}
            </span>
            <span style={{ width: "100%", height: "25px" }}>
              <b>{name}</b>
            </span>
            <span
              style={{
                width: "100%",
                height: "25px",
                marginTop: "3px",
                fontSize: "15px",
              }}
            >
              {price === undefined ? (
                <span className="">
                  <span>&#x20b9;</span>
                  {defaultPrice / 100}
                </span>
              ) : (
                <span className="">
                  <span>&#x20b9;</span>
                  {price / 100}
                </span>
              )}
            </span>
            <span
              style={{
                width: "100%",
                height: "20px",
                marginTop: "3px",
                fontSize: "13px",
                overflow: "hidden",
                color: "#787878",
              }}
            >
              {description}
            </span>
          </div>
          <div
            onClick={() => imageViewerToggler()}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              marginTop: "20px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img style={{ width: "30px" }} src={cross_icon}></img>
          </div>
        </div>
      )}

      <div id="alreadyitemalert">
        <span id="alreadyitemalerttext">The Item is already in the Cart</span>
      </div>

      <div className="menu_container">
        <div className="menu_info">
          <p>
            {isVeg === 1 ? (
              <img className="is_veg_image" src={veg_icon}></img>
            ) : (
              <img className="is_veg_image" src={non_veg_icon}></img>
            )}
          </p>
          <p className="menu_name">
            <b>{name}</b>
          </p>

          {price === undefined ? (
            <p className="menu_price">
              <span>&#x20b9;</span>
              {defaultPrice / 100}
            </p>
          ) : (
            <p className="menu_price">
              <span>&#x20b9;</span>
              {price / 100}
            </p>
          )}

          {/* <p className="menu_price">
            <span>&#x20b9;</span>
            {price === null ? defaultPrice / 100 : price / 100}
          </p> */}
          <p className="menu_description">{description}</p>
        </div>
        <div className="menu_add">
          {imageId === undefined ? (
            <img
              className="menu_alt_image"
              src={no_photo_icon}
              style={{ cursor: "pointer" }}
              // onClick={() => imageViewerToggler()}
            ></img>
          ) : (
            <img
              className="menu_image"
              src={IMG_URL + imageId}
              style={{ cursor: "pointer" }}
              onClick={() => imageViewerToggler()}
            ></img>
          )}

          {!toggleAddBtn ? (
            <div
              id="add"
              className="menu_add_to_cart"
              onClick={() => {
                if (price === undefined) {
                  price = defaultPrice;
                }
                const tempp = checkPrevMenu(id);
                if (tempp.length === 0) {
                  if (flag[0] === 1) {
                    dispatch(decFlag());
                  } else {
                    var quantity = qty;
                    quantity += 1;
                    setQty(qty);
                    handleAddItem();
                    totalAmount();
                    toggleBtn();
                    console.log(qty);
                    console.log(cartItemInfo);
                    dispatch(uniqueItem());
                  }
                } else {
                  showAlert();
                }
              }}
            >
              <b>ADD</b>
            </div>
          ) : (
            // ) : checkPrevMenu(id) === 1 ? (
            //   <div id="add_qty" className="cart_add_button">
            //     <div
            //       className="btn decrease_qty"
            //       onClick={() => {
            //         console.log("clicked");
            //         var quantity = cartItemInfo.qty;
            //         if (quantity - 1 === 0) {
            //           handleRemoveItem();
            //           dispatch(totalAmount());
            //           toggleBtn();
            //         } else {
            //           quantity = quantity - 1;
            //           setCartQty(quantity);
            //           console.log(cartQty);
            //           dispatch(decQty(id));
            //           dispatch(totalAmount());
            //         }
            //       }}
            //     >
            //       <div className="decrease"></div>
            //     </div>
            //     <button className="qty">{cartItemInfo.qty}</button>
            //     <button
            //       className="btn increase_qty"
            //       onClick={() => {
            //         console.log("clicked");
            //         var quantity = cartItemInfo.qty;
            //         quantity = quantity + 1;
            //         setCartQty(quantity);
            //         console.log(cartQty);
            //         dispatch(incQty(id));
            //         dispatch(totalAmount());
            //       }}
            //     >
            //       +
            //     </button>
            //   </div>
            // ) :
            <div id="add_qty" className="cart_add_button">
              <div
                className="btn decrease_qty"
                onClick={() => {
                  console.log("clicked");
                  var quantity = cartQty;
                  if (quantity - 1 === 0) {
                    handleRemoveItem();
                    dispatch(totalAmount());
                    toggleBtn();
                  } else {
                    quantity = quantity - 1;
                    setCartQty(quantity);
                    console.log(cartQty);
                    dispatch(decQty(id));
                    dispatch(totalAmount());
                  }
                }}
              >
                <div className="decrease"></div>
              </div>
              <button className="qty">{cartQty}</button>
              <button
                className="btn increase_qty"
                onClick={() => {
                  console.log("clicked");
                  var quantity = cartQty;
                  quantity = quantity + 1;
                  setCartQty(quantity);
                  console.log(cartQty);
                  dispatch(incQty(id));
                  dispatch(totalAmount());
                }}
              >
                +
              </button>
            </div>
            // <div
            //   id="add"
            //   className="menu_add_to_cart"
            //   style={{ backgroundColor: "#60b246", color: "white" }}
            //   onClick={() => {
            //     // var quantity = qty;
            //     // quantity = quantity + 1;
            //     // setQty(quantity);
            //     // // handleAddItem();
            //     // // toggleBtn();
            //     // console.log(qty);
            //   }}
            // >
            //   <b>ADDED</b>
            // </div>
          )}

          {/* <div id="add_qty" className="cart_add_button">
            <div className="btn decrease_qty">
              <div className="decrease"></div>
            </div>
            <button className="qty">3</button>
            <button className="btn increase_qty">+</button>
          </div> */}
        </div>
      </div>
      <div className="line_holder">
        <div className="hr_line"></div>
      </div>
    </>
  );
};

const MenuCuisine = ({ cuisines }) => {
  return (
    <>
      <span className="menu_restuarant_areaname menu_restuarant_cusine">
        {/* {cuisines.join(", ")} */}
      </span>
    </>
  );
};

const RestuarantDeliveryDistance = ({ lastMileTravelString }) => {
  return <span>{lastMileTravelString}</span>;
};

const RestuarantDeliveryTime = ({ slaString }) => {
  return (
    <span className="time_info">
      <img className="time_icon" src={clock_icon}></img>
      <b>{slaString}</b>
    </span>
  );
};

const MenuInfo = ({
  name,
  areaName,
  avgRating,
  totalRatingsString,
  costForTwoMessage,
  cuisines,
  cloudinaryImageId,
}) => {
  const [restuarantInfo, setRestuarantInfo] = useState([]);
  const [restuarantCuisines, setRestuarantCuisines] = useState([]);
  const [idcheck, setIdcheck] = useState(0);
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  // dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));

  const resInfo = useSelector((store) => store.cart.restuarantInfo);
  const itemInfo = useSelector((store) => store.cart.itemName);
  const flag = useSelector((store) => store.cart.flag);

  useEffect(() => {
    getrestuarantInfo();
    if (itemInfo.length === 0) {
      dispatch(clearCart());
      dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
    }
  }, [1]);

  async function getrestuarantInfo() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4875917&lng=88.3711233&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestuarantInfo(json?.data?.cards[0]?.card?.card?.info?.sla);

    setRestuarantCuisines(json?.data?.cards[0]?.card?.card?.info);
    // console.log("resturannt info : " + restuarantInfo);
    // console.log("resturannt cuisine : " + restuarantCuisines);
  }

  // const dispatch = useDispatch();
  // // dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));

  // const resInfo = useSelector((store) => store.cart.restuarantInfo);
  // const itemInfo = useSelector((store) => store.cart.itemName);
  // if (itemInfo === undefined) {
  //   dispatch(clearCart());
  //   dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  // }
  // else if (itemInfo !== undefined){

  // }
  // if (resInfo.length === 0 || itemInfo === undefined) {
  //   dispatch(clearCart());
  //   dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  // }

  // if (resInfo.length === 0 ) {
  //   dispatch(clearCart());
  //   dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  //   if (itemInfo.length === 0) {
  //     dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  //   }
  //   // dispatch(clearCart());
  //   // dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  // }

  // if (itemInfo.length === 0) {
  //   dispatch(clearCart());
  //   dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  //   if (resInfo.length === 0) {
  //     dispatch(clearCart());
  //     dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  //   }

  // if (itemInfo.length === 0) {
  //   dispatch(clearCart());
  //   dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  // }
  // dispatch(clearCart());
  // dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  // }
  // dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  // if (itemInfo.length === 0 && resInfo.length !== 0) {
  //   dispatch(clearCart());
  //   dispatch(addRestuarantInfo({ name, areaName, cloudinaryImageId, id }));
  //   console.log(areaName);
  // }
  if (resInfo[0]?.id === id) {
    dispatch(decFlag());
  }
  console.log("res info : ");
  console.log(resInfo);
  console.log("Item Info : ");
  console.log(itemInfo);

  return (
    <>
      {resInfo[0]?.id === id || itemInfo.length === 0 || flag[0] === 1 ? (
        <></>
      ) : (
        <div
          className="alert_container"
          // style={{
          //   width: "100%",
          //   height: "200px",
          //   position: "fixed",
          //   // backgroundColor: "#80808026",
          //   marginTop: "-140px",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   marginBottom: "20px",
          //   bottom: "0",
          // }}
        >
          <div style={{}} className="alertcontainer">
            <span style={{ fontSize: "15px" }}>
              <b>Items already in cart</b>
            </span>
            <span style={{ marginTop: "4px", fontSize: "13px" }}>
              Your cart contains items from other restaurant. Would you like to
              reset your cart for adding items from this restaurant?
            </span>
            <div className="alertbtn">
              <button
                style={{ color: "#60b246", backgroundColor: "white" }}
                onClick={() => {
                  dispatch(incFlag());
                }}
              >
                NO
              </button>
              <button
                style={{ color: "white", backgroundColor: "#60b246" }}
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(clearItemName());
                  dispatch(
                    addRestuarantInfo({ name, areaName, cloudinaryImageId, id })
                  );
                }}
              >
                YES, START AFRESH
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="menu_restuarant_info_container">
        <div className="menu_restuarant_info">
          <span className="menu_restuarant_name">
            <b>{name}</b>
          </span>
          {/* <MenuCuisine {...restuarantCuisines} /> */}
          <span className="menu_restuarant_areaname menu_restuarant_cusine">
            {cuisines.join(", ")}
          </span>

          <div>
            <span className="menu_restuarant_areaname">
              {areaName}, <RestuarantDeliveryDistance {...restuarantInfo} />
            </span>
            {/* <h1>{sla.lastMileTravelString}</h1> */}
          </div>
        </div>
        <div className="menu_restuarant_rating_container">
          <div className="rating_container">
            <img
              className="menu_restuarant_rating_image"
              src={rating_star}
            ></img>
            <span className="menu_restuarant_rating">
              <b>{avgRating}</b>
            </span>
          </div>
          <span className="menu_restuarant_total_rating">
            {totalRatingsString}
          </span>
        </div>
      </div>
      <div className="menu_restuarant_info_container">
        <div className="delivery_info">
          <RestuarantDeliveryTime {...restuarantInfo} />
          <span className="rupee_info">
            <img className="rupee_icon" src={rupee_icon}></img>
            <b>{costForTwoMessage}</b>
          </span>
        </div>
      </div>

      {/* <h1>{sla.deliveryTime}</h1> */}
      {/* <RestuarantDeliveryTime {...restuarantInfo} />
      <h1>{costForTwoMessage}</h1> */}
    </>
  );
};

const MenuTitle = ({ title }) => {
  return (
    <>
      <span>{title}</span>
    </>
  );
};

function toggleImage() {
  var x = document.getElementById("heart");
  var y = document.getElementById("heart_full");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
const RestaurantMenu = () => {
  const [restuarantInfo, setRestuarantInfo] = useState([]);
  const [restuarantMenu, setRestuarantMenu] = useState([]);
  const [restuarantMenuTemp, setRestuarantMenuTemp] = useState([]);
  const [altRestuarantMenu, setAltRestuarantMenu] = useState([]);
  const [menuCuisine, setMenuCuisine] = useState([]);
  const [menuTitle, setMenuTitle] = useState([]);

  const [btn, setBtn] = useState(true);
  function toggleBtn() {
    setBtn((btn) => !btn);
    // console.log("clicked");
  }

  let toggleClass = btn ? "active" : "deactive";

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
    getrestuarantInfo();
  }, []);

  async function getrestuarantInfo() {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4875917&lng=88.3711233&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestuarantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestuarantMenuTemp(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setAltRestuarantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setRestuarantInfo(json?.data?.cards[0]?.card?.card);

    setMenuCuisine(json?.data?.cards[0]?.card?.card?.info);
    // console.log(menuCuisine);
    setMenuTitle(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );

    // if (restuarantMenu.length === 0) {
    //   setRestuarantMenu(
    //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //       ?.card?.itemCards
    //   );
    // }
  }

  const [vegS, setVegS] = useState(true);
  // console.log("info : " + { restuarantInfo });
  // const restuarantName = restuarantInfo.info.name;
  // const restuarantAreaName = restuarantInfo.info.areaName;
  // const restuarantImage = restuarantInfo.info.cloudinaryImageId;

  // console.log(restuarantInfo.info.name);
  // console.log(restuarantInfo.info.areaName);
  // console.log(restuarantInfo.info.cloudinaryImageId);

  // console.log(menuTitle);
  function showVeg() {
    var x = document.getElementById("showvegbtn");
    var y = document.getElementById("bgcolor");
    setVegS(!vegS);
    console.log(vegS);
    if (vegS === true) {
      const temp = restuarantMenuTemp;
      const update = temp.filter((tem) => tem.card.info.isVeg === 1);
      setRestuarantMenu(update);
      x.className = "vegShow";
      y.className = "bggreen";
    } else {
      x.className = "vegHide";
      y.className = "bgwhite";
      setRestuarantMenu(restuarantMenuTempnpm);
    }

    // setTimeout(function () {
    //   x.className = x.className.replace("show", "");
    // }, 1500);
  }

  return restuarantMenu?.length === 0 ? (
    <RestuarantMenuShimmer />
  ) : (
    <div className="fullmenubodycontainer">
      {/* <h1>id : {id}</h1> */}
      <div className="menu_restuarant_info_container">
        <div className="icon_container">
          <img id="heart" onClick={() => toggleImage()} src={heart_icon}></img>
          <img
            id="heart_full"
            onClick={() => toggleImage()}
            src={heart_pink_icon}
          ></img>

          <img src={search_icon}></img>
        </div>
      </div>
      <MenuInfo {...restuarantInfo.info} />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <div className="vegslider">
          <span style={{}}>
            <b>Veg Only</b>
          </span>
          <div
            id="bgcolor"
            className="bgwhite"
            style={{
              width: "41px",
              height: "22px",
              borderRadius: "3px",
              marginLeft: "15px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => showVeg()}
          >
            <div
              id="showvegbtn"
              className="vegHide"
              // style={{
              //   width: "20px",
              //   height: "20px",
              //   background: "white",
              //   borderRadius: "5px",
              //   marginLeft: "3px",
              // }}
            ></div>
          </div>
        </div>
      </div>
      <div className="line_holder">
        <div className="hr_line"></div>
      </div>
      <div className="recomended_menu">
        {/* <span>Recomended</span> */}
        <div className="menulist_container">
          {/* {!restuarantMenu.length === 0 ? (
{restuarantMenu.map((menulist, index) => {
            return <MenuList key={index} {...menulist.card.info} />;
            // const restuarantName = restuarantInfo.info.name;
            // const restuarantAreaName = restuarantInfo.info.areaName;
            // const restuarantImage = restuarantInfo.info.cloudinaryImageId;
          })}) : (
            {altRestuarantMenu.map((menulist, index) => {
            return <MenuList key={index} {...menulist.card.info} />;
            // const restuarantName = restuarantInfo.info.name;
            // const restuarantAreaName = restuarantInfo.info.areaName;
            // const restuarantImage = restuarantInfo.info.cloudinaryImageId;
          })}
          )} */}
          {/* altRestuarantMenu */}

          {restuarantMenu === undefined ? (
            altRestuarantMenu === undefined ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "calc(100vh - 80px)",
                  color: "red",
                }}
              >
                <span>Failed to load Menu for this Restuarant</span>
              </div>
            ) : (
              altRestuarantMenu?.map((menulist, index) => {
                return <MenuList key={index} {...menulist.card.info} />;
              })
            )
          ) : (
            restuarantMenu.map((menulist, index) => {
              return <MenuList key={index} {...menulist.card.info} />;
            })
          )}
          {/* {restuarantMenu.map((menulist, index) => {
            return <MenuList key={index} {...menulist.card.info} />;
            // const restuarantName = restuarantInfo.info.name;
            // const restuarantAreaName = restuarantInfo.info.areaName;
            // const restuarantImage = restuarantInfo.info.cloudinaryImageId;
          })} */}
        </div>
        <div className="">
          {menuTitle.map((menutitle, index) => {
            return (
              <>
                <MenuTitle key={index} {...menutitle?.card?.card} />
                {/*  */}

                {/* <div className="menulist_container">
                  {restuarantMenu.map((menulist, index) => {
                    return (
                      <>
                        <MenuList key={index} {...menulist.card.info} />
                        {console.log(index)}
                      </>
                    );
                  })}
                </div> */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
