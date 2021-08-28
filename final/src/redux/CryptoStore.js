import { createStore } from "redux";
import CryptoReducer from "./CryptoReducer";

const store = createStore(CryptoReducer)

export default store;