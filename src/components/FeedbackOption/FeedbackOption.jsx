import React from "react"
import PropTypes from 'prop-types';

const FeedbackOption = ({ options, onLeaveFeedback }) => (


  <form onClick={onLeaveFeedback}>
    {options.map(option => <button key={option} type="button" name={option}>{option.toUpperCase()}</button>)}
  </form >
)

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOption;