import React from "react"
import PropTypes from 'prop-types';
import styles from "./styles.module.css"

const StatisticItem = ({ good, neutral, bad, total, posPersent }) => {
  return (
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {posPersent}%</li>
    </ul>
  )
}


StatisticItem.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  posPersent: PropTypes.number
}

export default StatisticItem
