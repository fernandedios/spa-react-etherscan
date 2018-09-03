import { combineReducers } from 'redux';
import { REHYDRATE } from 'redux-persist';
import { FETCH_TRANSACTIONS, FETCH_BALANCE } from './SearchConstants';

const transactionReducer = function(state = null, action) {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return action.payload || false;
        
        case REHYDRATE:
            if (!action.payload) {
                return false;
            }

            return action.payload.transactions || false;

        default:
            return state;
    }
}

const balanceReducer = function(state = null, action) {
    switch (action.type) {
        case FETCH_BALANCE:
            return action.payload || false;

        case REHYDRATE:
            if (!action.payload) {
                return false;
            }
            return action.payload.balance || false;

        default:
            return state;
    }
}

export default combineReducers({
    transactions: transactionReducer,
    balance: balanceReducer
});