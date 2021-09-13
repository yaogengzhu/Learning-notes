import React, { useRef, useState } from 'react'

const Tab = ({ children, onChange }) => {
    const activeIndex = useRef(null)
    const [, forceUpdate] = useState(null)
    const tabList = [] // tabs
    let renderChildren = null

    React.Children.forEach(children, (item) => {
        // 验证是否是element 
        if (React.isValidElement(item) && item.type.displayName === 'tabItem') {
            const { props } = item
            const { name, label } = props
            const tabItem = {
                name,
                label,
                active: name === activeIndex.current,
                component: item
            }
            if (name === activeIndex.current) renderChildren = item
            tabList.push(tabItem)
        }
    })

    if (!renderChildren && tabList.length > 0) {
        const firstChildren = tabList[0]
        renderChildren = firstChildren.component
        activeIndex.current = firstChildren.component.props.name
        firstChildren.active = true
    }

    /* 切换tab */
    const changeTab = (name) => {
        activeIndex.current = name
        forceUpdate({})
        onChange && onChange(name)
    }
    console.log(renderChildren)
    return <div>
        <div className="header">
            {
                tabList.map((tab, index) => (
                    <div key={index} onClick={() => changeTab(tab.name)} >
                        <div className={'text'}  >{tab.label}</div>
                        {tab.active && <div></div>}
                    </div>
                ))
            }
        </div>
        <div>{renderChildren}</div>
    </div>

}
Tab.displayName = 'tab'
export default Tab
