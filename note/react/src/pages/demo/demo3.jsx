import { useEffect, useState } from "react"


const useToggle = () => {
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        console.log('组件显示')
        return () => {
            console.log('组件销毁')
        }
    })
    return {
        flag,
        setFlag
    }
}

const App =  () => {
    const { flag, setFlag} = useToggle()

    return (
        <div>
            {flag && <div>测试隐藏</div>}
            <div onClick={() => {
                setFlag(!flag)
            }}>我是测试按钮</div>
        </div>
    )
}
export default App