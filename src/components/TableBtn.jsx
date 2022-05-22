import React from 'react';
import PropTypes from 'prop-types';

const TableBtn = (props) => {
  const { name, id, myFunction } = props;
  return (
    <button
      type="button"
      data-testid={ id }
      onClick={ myFunction() }
    >
      { name }
    </button>
  );
};

TableBtn.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default TableBtn;
