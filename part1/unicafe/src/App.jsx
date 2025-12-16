import { useState } from 'react'

// Reusable button component (1.10)
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

// Single statistic line (1.10, 1.11)
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

// Statistics component (1.8–1.11)
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    // 1.9: show this when there is no feedback yet
    return <p>No feedback given</p>
  }

  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positive = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1) + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // 1.6: state for each feedback type
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      {/* 1.6 + 1.10: use Button component */}
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
