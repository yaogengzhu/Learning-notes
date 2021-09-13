import React from 'react'
import Tab from './component/Tab/Tab'
import TabItem from './component/Tab/TabItem'

const App = () => {
	return (
		<div>
			<Tab>
				<TabItem name='姓名' label='姓名'>1</TabItem>
				<TabItem name='年龄' label='年龄'>2</TabItem>
				<TabItem name='学历' label='学历'>3</TabItem>
			</Tab>
		</div>
	)
}

export default App