import React, { Component } from "react"
import FeedbackOption from "../FeedbackOption/FeedbackOption"
import StatisticItem from "../StatisticItem/StatisticItem"

import options from "../../utils/options"

export default class Statistic extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  hendleIncrement = ({ target }) => {
    const { name } = target

    this.setState(state => {
      return {
        [name]: Number([state[name]]) + 1
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + bad + neutral
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return Math.round(((good / this.countTotalFeedback()) * 100))
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <>
        <h2>Pelase leave feedback</h2>
        <FeedbackOption options={Object.values(options)} onLeaveFeedback={this.hendleIncrement} />
        <h2>Statistic</h2>
        {good || neutral || bad
          ? < StatisticItem good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} posPersent={this.countPositiveFeedbackPercentage()} />
          : <div>No feedback fiven</div>}
      </>
    )
  }
}