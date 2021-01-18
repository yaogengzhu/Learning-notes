import React, { useEffect } from 'react'

export default () => {
	useEffect(() => {
		console.log("%c hello", "background:#fff; color: red" )
		console.warn("%c 希望盗链的大佬手下留情 ","background:#24272A; color:#ffffff","","https://cangshui.net/");
	}, [])
	return (
		<div>
			{
				Array(3000).fill('').map((_, i) => (
					<div key={i}>{ i }</div>
				))
			}
		</div>
	)
}