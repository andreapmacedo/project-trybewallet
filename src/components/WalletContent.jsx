import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, setExpense } from '../actions/walletActions';
import WalletTable from './WalletTable';
import './WalletContent.css';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletContent extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  inputHandleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  balance = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    const total = expenses
      .map(({ value, currency, exchangeRates }) => (
        value * exchangeRates[currency].ask
      ))
      .reduce((acc, curr) => acc + curr);
    return total.toFixed(2);
  };

  submit = () => {
    const { addExpense, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = expenses.length;
    const expense = { id, value, description, currency, method, tag };
    addExpense(expense);
    this.setState(INITIAL_STATE);
  }

  // const modifyExpense = (selectedExpense, index) => {
  //   const { value, description, currency, method, tag } = props;
  //   const { changeExpense } = props;
  //   console.log(selectedExpense, index);
  //   const editedExpense = {
  //     id: selectedExpense.id,
  //     value,
  //     description,
  //     currency,
  //     method,
  //     tag,
  //   };
  //   console.log(editedExpense.value);
  //   changeExpense(editedExpense, index, expenses);
  // };

  render() {
    const { currencies, email } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <>
        <header className="header">
          <div className="header-left">
            Trybewallet
          </div>
          <div className="header-right">
            <p data-testid="email-field">{`Email: ${email}`}</p>
            <section className="total-field">
              <p data-testid="total-field">{ this.balance() }</p>
              <p data-testid="header-currency-field">BRL</p>
            </section>
          </div>
        </header>
        <form className="form-content">
          <label htmlFor="value">
            Valor:
            <input
              className="form-input value"
              data-testid="value-input"
              id="value"
              name="value"
              type="text"
              value={ value }
              onChange={ this.inputHandleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              className="form-input description"
              data-testid="description-input"
              id="description"
              name="description"
              type="text"
              value={ description }
              onChange={ this.inputHandleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              className="form-input"
              data-testid="currency-input"
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.inputHandleChange }
            >
              { currencies.map((currencyList) => (
                <option
                  key={ currencyList }
                  value={ currencyList }
                >
                  { currencyList }
                </option>))}
            </select>
          </label>

          <label htmlFor="paymentMethod">
            Método de Pagamento:
            <select
              className="form-input"
              data-testid="method-input"
              id="paymentMethod"
              name="method"
              value={ method }
              onChange={ this.inputHandleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Categoria:
            <select
              className="form-input"
              data-testid="tag-input"
              id="category"
              name="tag"
              value={ tag }
              onChange={ this.inputHandleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            className="add-expense-btn"
            type="button"
            // disabled={  }
            onClick={ this.submit }
          >
            Adicionar Despesa
          </button>
        </form>
        <WalletTable />
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   addCurrencies: () => {
//     dispatch(getCurrencies());
//   },
//   addExpense: (state) => {
//     dispatch(setExpense(state));
//   },
// });

const mapDispatchToProps = (dispatch) => ({
  addCurrencies() {
    const action = getCurrencies();
    dispatch(action);
  },
  addExpense(state) {
    const action = setExpense(state);
    dispatch(action);
  },
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

WalletContent.propTypes = {
  email: PropTypes.string.isRequired,
  addCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
  // deleteExpense: PropTypes.func.isRequired,
  // changeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletContent);
