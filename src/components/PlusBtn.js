import React from 'react';
import PropTypes from 'prop-types';

function PlusBtn({ onClick }) {
  return <button onClick={onClick}>+</button>;
}

PlusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlusBtn;
