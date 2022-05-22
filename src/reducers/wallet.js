const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletRecuder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case 'ADD_WALLET_VALUE':
  //   return {
  //     ...state,
  //     value: action.payload,
  //   };
  // case 'ADD_WALLET_DESCRIPTION':
  //   return {
  //     ...state,
  //     description: action.payload,
  //   };
  // case 'ADD_WALLET_CURRENCY':
  //   return {
  //     ...state,
  //     currency: action.payload,
  //   };
  // case 'ADD_WALLET_METHOD':
  //   return {
  //     ...state,
  //     method: action.payload,
  //   };
  // case 'ADD_WALLET_TAG':
  //   return {
  //     ...state,
  //     tag: action.payload,
  //   };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  // case 'REMOVE_EXPENSE':
  //   return {
  //     ...state,
  //     expenses: [...state.expenses.filter((expense) => expense !== action.payload)],
  //   };
  // case 'EDIT_EXPENSE':
  //   return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default walletRecuder;
