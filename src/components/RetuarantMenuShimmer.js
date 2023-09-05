const MenuList = () => {
  return (
    <div className="menulist_container">
      <div className="menu_container">
        <div className="menu_info">
          <p>
            <div className="is_veg_image_shimmer"></div>
          </p>
          <p className="menu_name_shimmer"></p>
          <p className="menu_price_shimmer"></p>
          <p className="menu_description_shimmer"></p>
        </div>
        <div className="menu_add">
          <img className="menu_image_shimmer"></img>
          <div className="menu_add_to_cart_shimmer">{/* <b>ADD</b> */}</div>
          {/* <div className="cart_add_button">
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
    </div>
  );
};

const RestuarantMenuShimmer = () => {
  return (
    <div>
      {/* <h1>id : {id}</h1> */}
      <div className="menu_restuarant_info_container">
        <div className="icon_container">
          <div></div>
          <div></div>
          {/* <img src={heart_icon}></img> */}
          {/* <img src={search_icon}></img> */}
        </div>
      </div>
      <div className="menu_restuarant_info_container">
        <div className="menu_restuarant_info">
          <span className="menu_restuarant_name_shimmer"></span>
          <span className="menu_restuarant_areaname_shimmer menu_restuarant_cusine_shimmer"></span>

          <span className="menu_restuarant_areaname_shimmer">
            {/* {areaName}, <RestuarantDeliveryDistance {...restuarantInfo} /> */}
          </span>
        </div>
        <div className="menu_restuarant_rating_container">
          <div className="rating_container_shimmer">
            {/* <img className="menu_restuarant_rating_image"></img> */}
            {/* <span className="menu_restuarant_rating"> */}
            {/* <b>{avgRating}</b> */}
            {/* </span> */}
          </div>
          <span className="menu_restuarant_total_rating_shimmer">
            {/* {totalRatingsString} */}
          </span>
        </div>
      </div>
      <div className="menu_restuarant_info_container">
        <div className="delivery_info">
          <span className="time_info_shimmer"></span>
          <span className="time_info_shimmer"></span>
        </div>
      </div>
      <div className="recomended_menu">
        {/* <span>Recomended</span> */}
        {Array(9)
          .fill("")
          .map((e, index) => {
            return (
              <div key={index}>
                <MenuList />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestuarantMenuShimmer;
