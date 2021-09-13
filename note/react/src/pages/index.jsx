import React, { useState } from 'react'


const Spin = (props) => {
	const [loading, setLoading] = useState(true)
	return (
		<div>
			<div onClick={() => setLoading(true)}>{loading ? '进行中' : '加载ok'}</div>
			{props.children && props.children(loading, setLoading)}
		</div>
	)
}
const App = () => {
	return (
		<div>
			<Spin>
				{(loading, setLoading) => <span onClick={() => {
					setLoading(false);
				}}>这是按钮</span>}
			</Spin>
		</div>
	)
}

export default App