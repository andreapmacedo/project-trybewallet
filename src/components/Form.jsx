import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  inputHandleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { addExpense, expenses } = this.props;
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            name="value"
            type="text"
            data-testid="value-input"
            value={ value }
            onChange={ this.inputHandleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            name="description"
            type="text"
            data-testid="description-input"
            value={ description }
            onChange={ this.inputHandleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            data-testid="currency-input"
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
            id="paymentMethod"
            data-testid="method-input"
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
            id="category"
            data-testid="tag-input"
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
          data-testid="login-submit-button"
          type="submit"
          // disabled={ !validPassword || !validEmail }
          // onClick={ this.userLogin }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => {
    dispatch(getCurrencies());
  },
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
  // email: PropTypes.string.isRequired,
  // addExpense: PropTypes.func.isRequired,
  // expenses: PropTypes.arrayOf.isRequired,
  // deleteExpense: PropTypes.func.isRequired,
  // changeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
