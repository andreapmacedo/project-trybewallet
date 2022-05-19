export const addEmail = (name) => ({
  type: 'ADD_EMAIL',
  payload: name,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const filteredData = Object.keys(data)
    .filter((currency) => currency !== 'USDT');
  dispatch(addCurrencies(filteredData));
};
