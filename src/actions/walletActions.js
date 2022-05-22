const URL = 'https://economia.awesomeapi.com.br/json/all';

const addCurrencies = (payload) => ({
  type: 'ADD_CURRENCIES',
  payload,
});

const addExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});

export const removeExpense = (payload) => ({
  type: 'REMOVE_EXPENSE',
  payload,
});

export const editExpense = (expense, index, expenses) => {
  expenses[index] = expense;
  return {
    type: 'EDIT_EXPENSE',
    payload: expenses,
  };
};

// asyncs
export const getCurrencies = () => async (dispatch) => {
  const response = await fetch(URL);
  const result = await response.json();
  const filteredCurrencies = Object.keys(result)
    .filter((currency) => currency !== 'USDT');
  dispatch(addCurrencies(filteredCurrencies));
};

export const setExpense = (walletState) => async (dispatch) => {
  const response = await fetch(URL);
  const result = await response.json();
  // console.log(result);
  const payload = { ...walletState, exchangeRates: { ...result } };
  dispatch(addExpense(payload));
};

// export const walletValue = (payload) => ({
//   type: 'ADD_WALLET_VALUE',
//   payload,
// });

// export const walletDescription = (payload) => ({
//   type: 'ADD_WALLET_DESCRIPTION',
//   payload,
// });

// export const walletCurrency = (payload) => ({
//   type: 'ADD_WALLET_CURRENCY',
//   payload,
// });

// export const walletMethod = (payload) => ({
//   type: 'ADD_WALLET_METHOD',
//   payload,
// });

// export const walletTag = (payload) => ({
//   type: 'ADD_WALLET_TAG',
//   payload,
// });
