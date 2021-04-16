import React, { useEffect } from 'react'
import { render } from 'react-dom'


const timerWrapper = (Comp) => {
    return class extends React.Component {
        timerId = null
        constructor(props) {
            super(props)
            this.state = {
                date: new Date()
            }
            this.tick = this.tick.bind(this);
        }    
        componentDidMount() {
            this.timerId = setInterval(this.tick, 1000);
        }
        componentWillUnmount() {
            clearInterval(this.timerId)
        }
        tick() {
            this.setState({
                date: new Date()
            })
        }
        render() {
            return <Comp date={this.state.date}></Comp>
        }
    }
}

const App = (props) => {
    return (
        <div>
            <h1>{props.date.toLocaleString()}</h1>
        </div>
    )
}

export default timerWrapper(App)