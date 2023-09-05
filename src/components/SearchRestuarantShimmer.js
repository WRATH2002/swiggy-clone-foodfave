const SearchRestuarantShimmer = () => {
  return (
    <>
      <div className="search_container">
        <div className="search_subcontainer">
          <input type="text" className="search_input_shimmer"></input>
          <button className="search_btn_shimmer"></button>
        </div>
      </div>

      <div
        className="popular_cuisines_container"
        style={{ marginBottom: "60px" }}
      >
        <span
          className="popular_cuisines_heading_shimmer"
          style={{ fontSize: "20px" }}
        >
          <span className="cuisine_heading_shimmer"></span>
        </span>

        <div className="recent_search_history">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="search_icon_btn_shimmer"></div>
            <span
              className="history_shimmer"
              style={{ marginLeft: "15px" }}
              key="01"
            ></span>
          </div>

          {/* {Array(9)
            .fill("")
            .map((e, index) => {
              return (
                <>
                  <div className="popular_cuisines_container">
                    <div className="search_history_separate"> </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="search_icon_btn_shimmer"></div>
                    <span
                      className="history_shimmer"
                      style={{ marginLeft: "15px" }}
                    >
      
                    </span>
                  </div>
                </>
              );
            })} */}
        </div>
      </div>

      <div className="popular_cuisines_container">
        <span
          className="popular_cuisines_heading_shimmer"
          style={{ fontSize: "20px" }}
        >
          <span className="cuisine_heading_shimmer"></span>
        </span>
        <div className="popular_cuisines_image_container_shimmer">
          {Array(12)
            .fill("")
            .map((e, index) => {
              return <div className="popular_cuisines_image_shimmer"></div>;
            })}
        </div>
      </div>
    </>
  );
};

export default SearchRestuarantShimmer;
