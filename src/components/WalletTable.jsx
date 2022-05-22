import React from 'react';
import { connect } from 'react-redux';
import './WalletTable.css';
import PropTypes from 'prop-types';
import TableBtn from './TableBtn';
import { removeExpense } from '../actions/walletActions';

function WalletTable(props) {
  const { expenses } = props;
  // console.log(expenses);

  const editExpense = (selectedExpense, index) => {
    console.log(selectedExpense, index);
  };

  function geRows() {
    const ask = (expense) => Number(expense.exchangeRates[expense.currency].ask);
    return expenses.map((expense, i) => (
      <tr key={ expense.id } className={ i % 2 === 0 ? 'Even' : 'Odd' }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{Number(expense.value).toFixed(2)}</td>
        <td>{expense.exchangeRates[expense.currency].name}</td>
        <td>{ask(expense).toFixed(2)}</td>
        <td>{(ask(expense) * Number(expense.value)).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <TableBtn
            name="Editar"
            id="edit-btn"
            command={ () => editExpense(expense, expense.id) }
          />
          <TableBtn
            name="Excluir"
            id="delete-btn"
            command={ () => props.deleteExpense(expense) }
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="WalletTable">
      {/* <table border="1"> */}
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {geRows()}
        </tbody>
      </table>

    </div>
  );
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => {
    dispatch(removeExpense(expense));
  },
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
