import React from 'react';
import { connect } from 'react-redux';
import './WalletTable.css';
import PropTypes from 'prop-types';

function WalletTable(props) {
  const { expenses } = props;
  console.log(expenses);
  function geRows() {
    return expenses.map((expense, i) => (
      <tr key={ expense.id } className={ i % 2 === 0 ? 'Even' : 'Odd' }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value.replace('.', ',')}</td>
        <td>{expense.currency}</td>
        <td>{expense.tag}</td>
        <td>{expense.tag}</td>
        <td>{expense.tag}</td>
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

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(WalletTable);
