function ListItem(props) {
    const makerStyles = {
        prs: {color: 'gray', backgroundColor: 'yellow'},
        fender: {color: 'red', backgroundColor: 'black'},
        gibson: {color: 'white', backgroundColor: 'navy'}
    };

    let maker = props.item.text && props.item.text.toLowerCase();

    return (
        <li style={maker && makerStyles[maker]}>
            <h5>{props.item.title}</h5>
            {props.item.text} 
        </li>
    )
}

export default ListItem;
