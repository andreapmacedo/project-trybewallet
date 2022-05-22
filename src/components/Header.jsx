import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';

class Header extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     expenses: 0,
  //   };
  // }

  // componentDidMount() {
  //   const { addCurrencies } = this.props;
  //   addCurrencies();
  // }

  resume = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    const total = expenses
      .map(({ value, currency, exchangeRates }) => (
        Number(value) * Number(exchangeRates[currency].ask)
      ))
      .reduce((acc, curr) => acc + curr);
    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    // const { expenses } = this.state;
    return (
      <header className="main-header">
        {/* <a href="/#/" className="logo">
          <span className="logo-mini">Menu</span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href className="sidebar-toggle" data-toggle="offcanvas"> </a>
        </nav> */}
        <div>
          <span>
            <h3 data-testid="email-field">{`Email: ${email}`}</h3>
            <p data-testid="total-field">{` Despesa Total: R$ ${this.resume()}`}</p>
            <p data-testid="header-currency-field">BRL</p>
          </span>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => {
    dispatch(getCurrencies());
  },
});

// const mapDispatchToProps = (dispatch) => ({
//   populateCurrencies() {
//     const action = getCurrencies();
//     dispatch(action);
//   },
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     populateCurrencies() {
//       const action = getCurrencies();
//       dispatch(action);
//     },
//   };
// }

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
  // addCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
