import axios from 'axios';

import { FETCH_TRANSACTIONS, FETCH_BALANCE, API } from './SearchConstants';

export const fetchTransactions = ({ address, page, offset, sort }) => async dispatch => {
    const start = 0; 
    const end = 9999999;
    const res = await axios.get(`${API}&module=account&action=txlist&sort=${sort}&address=${address}&startblock=${start}&endblock=${end}&page=${page}&offset=${offset}`);
    dispatch({ type: FETCH_TRANSACTIONS, payload: { sort, address, ...res.data } });
};

export const fetchBalance = ({ address }) => async dispatch => {
    const res = await axios.get(`${API}&module=account&action=balance&address=${address}&tag=latest`);
    dispatch({ type: FETCH_BALANCE, payload: { address, ...res.data} });
};

