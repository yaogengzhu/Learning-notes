/*
 * @Author: yaogeng.zhu 
 * @Date: 2021-04-24 11:52:48 
 * @Last Modified by: yaogeng.zhu
 * @Last Modified time: 2021-04-24 12:12:18
 */

import React, { ErrorInfo } from 'react'
interface IProps {}
interface IState {
    errorInfo: null | ErrorInfo
}
class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            errorInfo: null
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(errorInfo, 'errorInfo')
        this.setState({
            errorInfo
        })
    }

    render() {
        const { errorInfo } = this.state
        if (errorInfo) {
            return <h1>组件内部错误{ errorInfo.componentStack }</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary