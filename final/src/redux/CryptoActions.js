import { ADD_CRYPTO_TO_STORE, MODIFY_WISHLIST ,ADD_INTERVAL, ADD_CHECKOUT_CRYPTO_TO_STORE, ADD_PAYMENTCARD_TO_STORE, ADD_INPUT_AMOUNT_TO_STORE, ADD_TOTAL_NUMBER_OF_CRYPTO_CARDS, ADD_CRYPTO_CARDS_TO_STORE, ADD_CHECKOUT_CURRENCY_TO_STORE, ADD_CHECKOUT_TRANSACTION_TYPE_TO_STORE, ADD_CRYPTO_BALANCE__TO_STORE, ADD_USERID } from "./CryptoTypes"

export const modifyWishlist = (type) => {
    return {
        type: MODIFY_WISHLIST,
        payload:type
    }
}
export const addCryptoToStore = (data) => {
    return {
        type: ADD_CRYPTO_TO_STORE,
        payload:data
    }
}
export const addCheckoutCryptoToStore = (data) => {
    return {
        type: ADD_CHECKOUT_CRYPTO_TO_STORE,
        payload:data
    }
}
export const addPaymentCardToStore = (data) => {
    return {
        type: ADD_PAYMENTCARD_TO_STORE,
        payload:data
    }
}
export const addInputAmountToStore = (data) => {
    return {
        type: ADD_INPUT_AMOUNT_TO_STORE,
        payload:data
    }
}

export const addInterval = (interval) => {
    return {
        type: ADD_INTERVAL,
        payload:interval
    }
}

export const addCryptoCardsToStore = (data) => {
  
    return {
        type: ADD_CRYPTO_CARDS_TO_STORE,
        payload:data
    }
}
export const addChekoutCurrencyToStore = (data) => {
  
    return {
        type: ADD_CHECKOUT_CURRENCY_TO_STORE,
        payload:data
    }
}
export const addCheckoutTransactionType = (data) => {
  
    return {
        type: ADD_CHECKOUT_TRANSACTION_TYPE_TO_STORE,
        payload:data
    }
}
export const addCryptoBalanceToStore = (data) => {
  
    return {
        type: ADD_CRYPTO_BALANCE__TO_STORE,
        payload:data
    }
}
export const addUserId = (data) => {
  
    return {
        type: ADD_USERID,
        payload:data
    }
}




