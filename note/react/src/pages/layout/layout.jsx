import GridLayout from 'react-grid-layout';
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
                    i: '图片',
                    x: 0,
                    y: 0,
                    w: 12,
                    h: 1,
                }
            },
            {
                id: 2,
                name: '卡片',
                grid: {
                    i: '卡片',
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
                    i: '内容',
                    x: 4,
                    y: 0,
                    w: 12,
                    h: 3,
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

    onDrag(e) {
        console.log(e)
        return () => {
            //
        }
    }

    render() {
      return (
        <GridLayout
            className="layout"
            cols={12}
            rowHeight={30}
            width={this.vh}
            onDragStart={(e) => {
                this.onDragStart(e)
            }}
            onDragStop={(e) => {
                this.onDragStop(e)
            }}
            onDrag={(e) => {
                this.onDrag(e)
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

        </GridLayout>
      )
    }
}

export default MyFirstGrid