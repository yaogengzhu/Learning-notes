import React, { useEffect, useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { convertToObject } from 'typescript'
import './container.less'

const Box = ({ item, onChange, style }) => {

    const [{ isDragging }, drag ] = useDrag(() => ({
        type: 'box',
        item: {item},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                onChange(item)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        })
    }))
    const color = isDragging ? 'red' : '#000';
    return (
        <div ref={drag} className='box' style={{...style, color, cursor: 'pointer'}}>
            { item.name }
        </div>
    )
}

const Target = ({ list }) => {
    const [material, setMaterial] = useState([])

    useEffect(() => {
        setMaterial(list)
    }, [list])
    const [{isOver, canDrop}, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => ({name: 'Target'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver;
    let border = '1px solid palegreen';
    if (isActive) {
        border = '1px solid red';
    }
    else if (canDrop) {
        border = '1px solid palegreen';
    }

    return (
        <div
            ref={drop} 
            role={'Target'}
            className='target'
            style={{border}}
        >
            {
                material.map( item => (
                    <Box
                        item={item}
                        key={Math.random()}
                        style={{ flexShrink: 0}}
                        onChange={(item) => {
                            console.log(item, 'o')
                        }}
                    />
                ))
            }
        </div>
    )
}

const Container = () => {
    const [list, setList] = useState([])
    const lists = [
        {
            id: 1,
            name: '图片'
        },
        {
            id: 2,
            name: '视频'
        },
        {
            id: 3,
            name: '素材'
        }
    ]
    return (
        <div className='container'>
            <div className='left'>
                {
                    lists.map( item => (
                        <Box item={item} key={Math.random()} onChange={(item) => {
                            list.push(item.item)
                            setList([...list])
                        }} />
                    ))
                }
              
            </div>
            <div className='right'>
                <Target list={list} />
            </div>
        </div>
    )
}

export default Container
