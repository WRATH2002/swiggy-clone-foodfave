const ImgCarousel = () => {
  return (
    <>
      <div
        style={{
          margin: "9px 17px",
          width: "420px",
          height: "250px",
          backgroundColor: "#cecece",
          borderRadius: "23px",
        }}
      ></div>
    </>
  );
};

export const RestaurantCard = () => {
  return (
    <>
      <div className="subcard">
        <div className="card" style={{ marginTop: "33px" }}>
          <div className="restuarant_image">
            <div
              className="restuarant_image"
              style={{ boxShadow: "none", backgroundColor: "#cecece" }}
            ></div>
          </div>
          <div className="restuarant_info">
            <h1
              className="restuarant_name"
              style={{
                fontSize: "20px",

                height: "23px",
                width: "190px",
                backgroundColor: "#cecece",
                marginTop: "14px",
              }}
            ></h1>
            <span
              className="restuarant_rating"
              style={{
                fontSize: "20px",

                height: "18px",
                width: "30px",
                backgroundColor: "#cecece",
                marginTop: "3px",
              }}
            ></span>
            <h1
              className="restuarant_cuisine"
              style={{
                fontSize: "20px",

                height: "18px",
                width: "60px",
                backgroundColor: "#cecece",
                marginTop: "3px",
              }}
            ></h1>

            <h1
              className="restuarant_locality"
              style={{
                fontSize: "20px",
                marginLeft: "16px",
                height: "18px",
                width: "130px",
                backgroundColor: "#cecece",
                margin: "3px 0px",
              }}
            ></h1>
          </div>
        </div>
      </div>
    </>
  );
};

const RestaurantCardShimmer = () => {
  return (
    <>
      <div className="card_list_container">
        <div className="card_list_subcontainer" style={{ overflow: "hidden" }}>
          <div className="scroll_btn" style={{ overflow: "hidden" }}>
            <span
              style={{
                fontSize: "20px",
                marginLeft: "16px",
                height: "30px",
                width: "350px",
                backgroundColor: "#cecece",
              }}
            ></span>
            <div style={{ display: "flex" }}>
              <button
                id="slideLeft"
                className="slide"
                style={{ backgroundColor: "#cecece" }}
              ></button>
              <button
                id="slideRight"
                className="right_arrow"
                style={{ backgroundColor: "#cecece" }}
              ></button>
            </div>
          </div>
          <div
            id="img_carousel"
            className="card_carousel"
            style={{ overflow: "hidden" }}
          >
            {Array(5)
              .fill("")
              .map((e, index) => {
                return (
                  <div key={index}>
                    <ImgCarousel />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="card_list_subcontainer">
          <div className="scroll_btn">
            <span
              style={{
                fontSize: "20px",
                marginLeft: "16px",
                height: "30px",
                width: "350px",
                backgroundColor: "#cecece",
              }}
            ></span>
            <div style={{ display: "flex" }}>
              <button
                id="slideLeft2"
                className=" slideL"
                style={{ backgroundColor: "#cecece" }}
              ></button>
              <button
                id="slideRight"
                className="right_arrow "
                style={{ backgroundColor: "#cecece" }}
              ></button>
            </div>
          </div>
          <div
            id="card_carousel"
            className="card_carousel"
            style={{ overflow: "hidden" }}
          >
            {Array(5)
              .fill("")
              .map((e, index) => {
                return (
                  <div key={index}>
                    <RestaurantCard key={index} />
                  </div>
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
        <span
          className="sort"
          style={{ backgroundColor: "#cecece", width: "80px", height: "18px" }}
        ></span>

        <span
          className="sort"
          style={{ backgroundColor: "#cecece", width: "80px", height: "18px" }}
        ></span>
        <span
          className="sort"
          style={{ backgroundColor: "#cecece", width: "80px", height: "18px" }}
        ></span>
        <span
          className="sort"
          style={{ backgroundColor: "#cecece", width: "80px", height: "18px" }}
        ></span>
        <span
          className="sort"
          style={{ backgroundColor: "#cecece", width: "80px", height: "18px" }}
        ></span>
        <span
          className="sort"
          style={{ backgroundColor: "#cecece", width: "80px", height: "18px" }}
        ></span>
      </div>
      <br></br>
      <div className="card_list_container">
        <div className="card_list_subcontainer">
          <span
            style={{
              fontSize: "20px",
              marginLeft: "16px",
              height: "30px",
              width: "350px",
              backgroundColor: "#cecece",
            }}
          ></span>
          <div className="card_container">
            {Array(9)
              .fill("")
              .map((e, index) => {
                return (
                  <div key={index}>
                    <RestaurantCard key={index} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
// {
//   Array(9)
//     .fill("")
//     .map((e, index) => {
//       return (
//         <div key={index}>
//           <MenuList />
//         </div>
//       );
//     });
// }

export default RestaurantCardShimmer;
