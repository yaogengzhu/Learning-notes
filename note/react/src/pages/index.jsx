/*
 * @Author: yaogeng.zhu 
 * @Date: 2021-04-24 13:30:24 
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-05-08 13:13:54
 */
import React, { useEffect } from 'react'
import jsonp from 'jsonp'
import Singer from '../utils'

const App = () => {
	useEffect(() => {
		getData()
		const list = []
		const singer = new Singer({name: 'zs', age: 12})
		const singer1 = new Singer({name: 'ls', age: 32})
		list.push(singer)
		list.push(singer1)
		const enw = list.map( item => item.name)
		console.log( enw, '???')
	}, [])

	const  getData = async () => {
		const url = 'https://u.y.qq.com/cgi-bin/musics.fcg?-=getUCGI27221538482173435&g_tk=5381&sign=zza1hcb4ned455pzp02f3fef04bda3a286eeb40136f6b80f4a&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D'
	 	jsonp(url, null, (err, data) => {
			const { singerlist } = data.singerList.data
			console.log(singerlist, '??')
		})
		
	}
	return (
		<div>测试</div>
	)
}

export default App
