import { useDrop } from 'react-dnd'
const ItemTypes = {
    BOX: 'box'
}
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}
export const Dustbin = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'blue';
    }
    else if (canDrop) {
        backgroundColor = 'red';
    }
    return (<div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
			{/* {isActive ? 'Release to drop' : 'Drag a box here'} */}
		</div>);
};
