/*
 * @Author: yaogeng.zhu
 * @Date: 2021-04-13 15:17:26
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-04-13 16:09:31
 */

import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import './index.less'

const reorder = (list, startIndex, endIndex) => {
    console.log(list, 'list')
    const result = Array.from(list)
    console.log(result, 'result')
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}


const initData = [
    {
        id: uuid(),
        items: [{ id: uuid(), label: "Item 1" }, { id: uuid(), label: "Item 2" }]
    },
    {
        id: uuid(),
        items: [{ id: uuid(), label: "Item 3" }, { id: uuid(), label: "Item 4" }]
    }
]

const Item = ({ id, index, label }) => (
    <Draggable draggableId={id} index={index}>
        {(draggableProvided, snapshot) => (
            <>
                <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    style={draggableProvided.draggableProps.style}
                    className="item"
                >
                    {label}
                </div>
                {snapshot.isDragging && <div className="item copy">{label}</div>}
            </>
        )}
    </Draggable>
)

const Column = ({ id, index, items }) => (
    <Droppable droppableId={id} isDropDisabled={index === 0}>
        {({ innerRef, placeholder }) => (
            <div ref={innerRef} className="column">
                {items.map((item, i) => (
                    <Item key={item.id} id={item.id} index={i} label={item.label} />
                ))}
                {placeholder}
            </div>
        )}
    </Droppable>
)

const App = () => {
    const [list, setList] = useState(initData)

    const onDragEnd = (result) => {
        console.log(result)
        if (!result.destination) {
            return
        }
        const newItems = reorder(
            list,
            result.source.index,
            result.destination.index
        )
        // newItems.push(result)
        setList([...newItems])
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="columns-container">
                {list.map((column, index) => (
                    <Column
                        key={column.id}
                        id={column.id}
                        index={index}
                        items={column.items}
                    />
                ))}
            </div>
        </DragDropContext>
    )
}

export default App
