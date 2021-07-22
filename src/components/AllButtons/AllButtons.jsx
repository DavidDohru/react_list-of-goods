import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';

const AllButtons = (
  {
    isReset,
    isReversed,
    isSortedAlphabetically,
    isSortedByLength,
  },
) => (
  <>
    <Buttons
      callback={isReversed}
      name="Reverse"
    />
    <Buttons
      callback={isSortedAlphabetically}
      name="Sort alphabetically"
    />
    <Buttons
      callback={isReset}
      name="Reset"
    />
    <Buttons
      callback={isSortedByLength}
      name="Sort by length"
    />
  </>
);

AllButtons.propTypes = {
  isSortedByLength: PropTypes.func.isRequired,
  isReversed: PropTypes.func.isRequired,
  isSortedAlphabetically: PropTypes.func.isRequired,
  isReset: PropTypes.func.isRequired,
};

export default AllButtons;