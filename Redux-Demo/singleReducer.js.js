// Import the redux library and extract the createStore function
const redux = require("redux");
const createStore = redux.createStore;

// Declare an action type as a constant
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Define an action creator - a function that returns an action object
function buyCake() {
  return {
    type: BUY_CAKE, // The type property specifies the type of action being performed
    info: "First redux action", // Additional information about the action
  };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}

// Define the initial state of the application
const initialState = {
  numOfCakes: 10, // The initial number of cakes available for sale
  numOfIceCreams: 20
};

// Define a reducer function that takes in the current state and an action as arguments
const reducer = (state = initialState, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // If the action type is BUY_CAKE, update the state to decrease the number of cakes by 1
    case BUY_CAKE:
      return {
        ...state, // Spread operator to create a copy of the current state object
        numOfCakes: state.numOfCakes - 1, // Decrement the numOfCakes property by 1
      }

      case BUY_ICECREAM:
      return {
        ...state, 
        numOfIceCreams: state.numOfIceCreams - 1, 
      }
    // If the action type is not recognized, return the current state unchanged
    default:
      return state;
  }
};

// Create a Redux store by passing in the reducer function as an argument
const store = createStore(reducer);

// Log the initial state of the store to the console
console.log("Initial State", store.getState());

// Subscribe to changes in the store and log the updated state to the console whenever it changes
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

// Dispatch four buyCake actions to the store
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());

// Unsubscribe from changes in the store by removing the callback function so it never runs again
unsubscribe();
console.log("unsubscribed");
