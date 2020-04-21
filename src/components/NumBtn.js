import React from 'react';
import PropTypes from 'prop-types';

function NumBtn({ n, onClick }) {
  return <button onClick={onClick}>{n}</button>;
}

NumBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NumBtn;
