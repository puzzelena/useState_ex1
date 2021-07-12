import React, { useState } from 'react'
import Button from '../src/components/Button'
import Statistics from '../src/components/Statistics'

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  
    const handleGoodVote = () => setGood(good + 1);
  
    const handleNeutralVote = () => setNeutral(neutral + 1);
  
    const handleBadVote = () => setBad(bad + 1);
  
    return (
      <>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodVote} text="Good" />
        <Button handleClick={handleNeutralVote} text="Neutral" />
        <Button handleClick={handleBadVote} text="Bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    );
  };

  export default App;