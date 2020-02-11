import React, { Component } from "react"
import FeedbackOption from "../FeedbackOption/FeedbackOption"
import StatisticItem from "../StatisticItem/StatisticItem"

import options from "../../utils/options"


export default class Statistic extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    posPersent: 100
  };

  hendleIncrement = ({ target }) => {
    const { name } = target

    this.setState(state => {
      return {
        [name]: Number([state[name]]) + 1
      }
    })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => { return { total: good + neutral + bad } })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      return { posPersent: Math.round(((good / total) * 100)) }
    })
  }

  render() {
    const { good, neutral, bad, total, posPersent } = this.state
    return (
      <>
        <h2>Pelase leave feedback</h2>
        <FeedbackOption options={Object.values(options)} onLeaveFeedback={this.hendleIncrement} />
        <h2>Statistic</h2>
        {total !== 0 ? < StatisticItem good={good} neutral={neutral} bad={bad} total={total} posPersent={posPersent} /> : <div>No feedback fiven</div>}
      </>
    )
  }
}