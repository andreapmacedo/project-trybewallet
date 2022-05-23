import React from 'react';
import PropTypes from 'prop-types';
import './TableBtn.css';

const TableBtn = (props) => {
  const { name, id, command, color } = props;

  const btnStyle = {
    backgroundColor: color || '#F00',
    borderColor: color || '#F00',
  };

  return (
    <button
      style={ btnStyle }
      className="table-btn"
      type="button"
      data-testid={ id }
      onClick={ command }
    >
      { name }
    </button>
  );
};

TableBtn.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  command: PropTypes.func.isRequired,
};

export default TableBtn;
