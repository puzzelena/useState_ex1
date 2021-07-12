import React from 'react'

const Anecdote = ({ title, anecdote, numVotes }) => (
    <div>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>Has {numVotes} votes</div>
    </div>
  );

  export default Anecdote;