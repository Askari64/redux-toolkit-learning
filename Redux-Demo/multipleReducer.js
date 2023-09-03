const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamsState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamsReducer = (state = initialIceCreamsState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//combining reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamsReducer,
});
const store = createStore(rootReducer);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());

unsubscribe();
console.log("unsubscribed");
