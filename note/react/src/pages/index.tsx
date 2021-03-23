import React,{ useEffect } from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer"
import './index.less'
import axios from 'axios'
import { json } from '@/config/color'
export default () => {

    useEffect(() => {
        console.log("%c 一起进步 ","background:#14cc9b; color:#ffffff","","https://github.com/yaogengzhu")

    },[])

    const getList = () => {
        axios.post('http://zhongguose.com/colors.json')
            .then(res => {
                console.log(res)
            })
    }
    const Row = ({ index,style }) => {
        const currentList = json[ index ]
        return (<div style={ { backgroundColor: currentList.hex,color: '#fff',marginBottom: '10px',...style } } className='item' key={ currentList.name } >
            <span>{ currentList.name }</span>
            <span>这是啥</span>
        </div>)
    }

    const Example = () => (
        <AutoSizer>
            {({ height,width }) => (
                <List
                    height={ height }
                    itemCount={ json.length }
                    itemSize={ 100 }
                    width={ width }
                >
                    { Row }
                </List>
            ) }
        </AutoSizer>

    )

    return (
        <div>
            <h1>虚拟列表</h1>
            <div className='box'>
                <Example />
            </div>
        </div>
    )
}