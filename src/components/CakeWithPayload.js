import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./../redux/cake/cakeActions";

const CakeWithPayload = (props) => {
  const [number, setNumber] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>buy cake</button>
    </div>
  );
};
export default CakeWithPayload;
