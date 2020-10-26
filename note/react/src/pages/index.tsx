import React, { useState } from 'react'
import styles from './index.less'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Counter>
        {({ count, setCount }) => (
          <div>
            <h3>{ count }</h3>
            <button onClick={() => setCount(count + 1)}>加1</button>
          </div>
        )}
      </Counter>
    </div>
  )
}

interface IProps {
  children: (option: {
    count: number,
    setCount: (value: React.SetStateAction<number>) => void
  }) => React.ReactNode
}
const Counter: React.FC<IProps> = (props) => {
  const [count, setCount] = useState(0)
  return(
    <div>{ props.children({ count, setCount}) }</div>
  )
}