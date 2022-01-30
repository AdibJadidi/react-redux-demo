import { BUY_ICECREAM } from "./iceCreamTypes";
const initialValues = {
  numOfIceCream: 10,
};
const iceCreamReducer = (state = initialValues, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };

    default:
      return state;
  }
};

export default iceCreamReducer;
