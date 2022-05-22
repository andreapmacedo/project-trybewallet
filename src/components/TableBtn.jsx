import React from 'react';
import PropTypes from 'prop-types';

const TableBtn = (props) => {
  const { name, id, command } = props;
  return (
    <button
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
  command: PropTypes.func.isRequired,
};

export default TableBtn;
