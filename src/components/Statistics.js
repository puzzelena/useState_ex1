import React from 'react'
import Statistic from '../components/Statistic'

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = good * 1 + neutral * 0 + bad * -1; // Good = 1, neutral = 0, bad = -1
    const positivePercent = `${(good / total) * 100}%`;
  
    if (good > 0 || neutral > 0 || bad > 0) {
      return (
        <div>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <Statistic text="Good" value={good} />
              <Statistic text="Neutral" value={neutral} />
              <Statistic text="Bad" value={bad} />
              <Statistic text="All" value={total} />
              <Statistic text="Average" value={average} />
              <Statistic text="Positive" value={positivePercent} />
            </tbody>
          </table>
        </div>
      );
    }
  
    return <p>No feedback given</p>;
  };

  export default Statistics;