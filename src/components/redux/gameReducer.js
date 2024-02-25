import { PICK_COINS } from "./actions";

const initialState = {
  coinsLeft: 21,
};

const gameReducer = (state = initialState, action) => {
  if (action.type == "PICK_COINS") {
    const newCoinsLeft = Math.max(state.coinsLeft - action.payload, 0);

    return {
      ...state,
      coinsLeft: newCoinsLeft === 0 ? 21 : newCoinsLeft,
    };
  } else {
    return state;
  }
  // due to some issue with switch case, I have used the if else block
  //   switch (action.type) {
  //     case PICK_COINS:
  //       console.log("Entering PICK_COINS case");
  //       return {
  //         ...state,
  //         coinsLeft: state.coinsLeft - action.payload,
  //       };
  //     default:
  //       console.log("Entering default case");
  //       return state;
  //   }
};

export default gameReducer;
