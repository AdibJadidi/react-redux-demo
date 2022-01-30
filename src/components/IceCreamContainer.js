import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

function IceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of iceream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
    </div>
  );
}

export default IceCreamContainer;
