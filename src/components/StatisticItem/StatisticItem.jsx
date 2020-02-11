import React from "react"
import PropTypes from 'prop-types';

const StatisticItem = ({ good = 0, neutral = 0, bad = 0, total = 0, posPersent = 100 }) => (
  <>
    <div>Good: {good}</div>
    <div>Neutral: {neutral}</div>
    <div>Bad: {bad}</div>
    <div>Total: {total}</div>
    <div>Positive feedback: {posPersent}%</div>
  </>
)

StatisticItem.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  posPersent: PropTypes.number
}



export default StatisticItem