import { useReducer } from 'react'

// 强制刷新页面
const useForceUpdate = () => {
    const [, forceUpdate] = useReducer((x) => x + 1, 1)
    return { forceUpdate }
}

export { useForceUpdate }
