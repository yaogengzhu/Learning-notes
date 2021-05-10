import {WidthProvider, Responsive} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive)
// import GridLayout from 'react-grid-layout';
import './layout.less'

class MyFirstGrid extends React.Component {
    static data = []
    static vh = null
    constructor(props) {
        super(props)
        this.data = [
            {
                id: 1,
                name: '图片',
                grid: {
                    x: 0,
                    y: 0,
                    w: 12,
                    h: 1,
                    i: Math.random() + '',
                }
            },
            {
                id: 2,
                name: '卡片',
                grid: {
                    i: Math.random() + '',
                    x: 1,
                    y: 0,
                    w: 12,
                    h: 2,
                    minW: 2,
                    maxW: 4
                }
            },
            {
                id: 3,
                name: '内容',
              
                grid: {
                    x: 4,
                    y: 0,
                    w: 12,
                    h: 3,
                    a: 'x',
                    i: Math.random() + '',
                }
            }
        ]

        this.vh = document.body.offsetWidth
    }

    onDragStart(e) {
        // console.log(e, '?start??')
        return (layout, oldItem, newItem, placeholder, e, element) => {
            console.log(layout, oldItem, newItem, '??')
            //
        }
    }

    onDragStop(e) {
        console.log(e, '???xxx')   
        return (layout, oldItem, newItem, placeholder, e, element) => {
            console.log(layout, oldItem, newItem, '??')
            //
        }
    }

    render() {
      return (
        <ResponsiveReactGridLayout
            className="layout"
            rowHeight={30}
            width={this.vh}
            onDragStart={(e) => {
                this.onDragStart(e)
            }}
            onDragStop={(e) => {
                this.onDragStop(e)
            }}
        >
            {
                this.data.map( item => (
                    <div
                        key={item.id}
                        data-grid={{...item.grid}}
                        className='demo'
                    >{ item.name }</div>
                ))
            }

        </ResponsiveReactGridLayout>
      )
    }
}

export default MyFirstGrid