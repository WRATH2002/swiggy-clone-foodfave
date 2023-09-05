import { useState } from "react";

const TotalToPay = (props) => {
  const [itemprice, setItemPrice] = useState(0);
  setItemPrice(props.data);
  //   console.log("price : " + props.data);
  return (
    <>
      <div style={{ width: "200px", height: "50px", backgroundColor: "beige" }}>
        {props.data / 100}
      </div>
    </>
  );
};

export default TotalToPay;
