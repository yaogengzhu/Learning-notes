

/*
 * @Author: yaogeng.zhu 
 * @Date: 2021-04-24 11:29:10 
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-04-24 12:12:30
 */

import React, { useState } from 'react'
import ErrorBoundary from '../component/errorBoundary'


const Comp = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1)
	}

	if (count === 5) {
		// Simulate a JS error
		throw new Error('I crashed!')
	}
	return (
		<h1 onClick={handleClick}>{count}</h1>
	)
}
const App = () => {

	return (
		<div>
			<div>hello</div>
			<ErrorBoundary>
				<Comp />
			</ErrorBoundary>
		</div>
	)
}

export default App
