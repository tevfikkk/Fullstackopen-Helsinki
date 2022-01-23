import React, { useState } from 'react'
import { map, filter } from 'ramda'

const Button = ({ onClick, text }) => {
	return (
		<>
			<button onClick={onClick}> {text} </button>
		</>
	)
}

const StatisticLine = ({ text, value }) => {
	return (
		<div>
			<p>
				<b>{text}</b> {value}
			</p>
		</div>
	)
}

const Statistics = ({ good, neutral, bad, total, mean, positive }) => {
	return (
		<div>
			<StatisticLine text="Good" value={good} />
			<StatisticLine text="Neutral" value={neutral} />
			<StatisticLine text="Bad" value={bad} />
			<StatisticLine text="Total" value={total} />
			<StatisticLine text="Mean" value={mean} />
			<StatisticLine text="Positive" value={positive} />
		</div>
	)
}

const App = () => {

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const total = good + neutral + bad
	const mean = (good + neutral + -bad) / total  // This part is messy, I made it up
	const positive = ((good + neutral + -bad) * 100) / good + neutral

	const setToGood = () => setGood(good + 1)
	const setToNeutral = () => setNeutral(neutral + 1)
	const setToBad = () => setBad(bad + 1)

	const isStatGiven = (x, y, z, a, b) => (x || y || z ? a : b)

	return (
		<div>
			<h1>Give us feedback</h1>
			<Button onClick={setToGood} text="Good" />
			<Button onClick={setToNeutral} text="Neutral" />
			<Button onClick={setToBad} text="Bad" />
			<br />
			<h2>Statistics</h2>
			{isStatGiven(
				good,
				neutral,
				bad,
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					mean={mean}
					positive={positive}
				/>,
				<div>no stats given</div>
			)}
		</div>
	)
}

export default App
