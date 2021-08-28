import { AssignmentReturn } from "@material-ui/icons";
import {
  ADD_CHECKOUT_CRYPTO_TO_STORE,
  ADD_CHECKOUT_CURRENCY_TO_STORE,
  ADD_CHECKOUT_TRANSACTION_TYPE_TO_STORE,
  ADD_CRYPTO_BALANCE__TO_STORE,
  ADD_CRYPTO_CARDS_TO_STORE,
  ADD_CRYPTO_TO_STORE,
  ADD_INPUT_AMOUNT_TO_STORE,
  ADD_INTERVAL,
  ADD_PAYMENTCARD_TO_STORE,
  ADD_TOTAL_NUMBER_OF_CRYPTO_CARDS,
  ADD_USERID,
  MODIFY_WISHLIST,
} from "./CryptoTypes";

const initialState = {
  wishlist: [],
  crypto: {},
  checkoutCrypto: {
    id: "",
    logo_url: "",
    name: "",
    price: "",
    market_cap: "",
  },
  interval: "1m",
  paymentCard: "",
  inputAmount: 0,
  cryptoCards: [],
  chekoutCurrency:'',
  chekoutTransactionType:'',
  cryptoBalance:0,
  serverURL:'http://104.154.192.241:3000',
  //userId:'3c471242-6d8c-4a5b-a171-57df8647ab73',
  userId:'',
};
const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_WISHLIST: {
      const wishlist = state.wishlist;
      const index = wishlist.indexOf(action.payload);
      // console.log("index="+index);
      if (index > -1) {
        return {
          ...state,
          wishlist: [
            ...state.wishlist.slice(0, index),
            ...state.wishlist.slice(index + 1),
          ],
        };
      } else {
        const wishlist = state.wishlist.concat(action.payload);
        // console.log("gk2"+wishlist);
        return { ...state, wishlist };
      }
      // console.log("after adding books",wishlist);
    }
    case ADD_CRYPTO_TO_STORE: {
      // const cryto = action.data;
      // console.log("gk******************",action.payload);
      return { ...state, crypto: action.payload };
    }
    case ADD_CHECKOUT_CRYPTO_TO_STORE: {
      // const cryto = action.data;
      //  console.log("gk******************",action.payload);
      return { ...state, checkoutCrypto: action.payload };
    }
    case ADD_PAYMENTCARD_TO_STORE: {
      // const cryto = action.data;
      //  console.log("gk******************",action.payload);
      return { ...state, paymentCard: action.payload };
    }
    case ADD_INPUT_AMOUNT_TO_STORE: {
      // const cryto = action.data;
      //  console.log("gk******************",action.payload);
      return { ...state, inputAmount: action.payload };
    }
    case ADD_CRYPTO_CARDS_TO_STORE: {
      return { ...state, cryptoCards: action.payload };
    }
    case ADD_INTERVAL: {
      return { ...state, interval: action.payload };
    }
    case ADD_CHECKOUT_CURRENCY_TO_STORE: {
        return { ...state, chekoutCurrency: action.payload };
      }
      case ADD_CHECKOUT_TRANSACTION_TYPE_TO_STORE: {
        return { ...state, chekoutTransactionType: action.payload };
      }
      case ADD_CRYPTO_BALANCE__TO_STORE: {
        return { ...state, cryptoBalance: action.payload };
      }
      case ADD_USERID: {
        console.log("in reducer before state="+state);
        console.log("in reducer action payload="+action.payload);
        return { ...state, userId: action.payload };
        
      }
    default:
      return state;
  }
};
export default CryptoReducer;
