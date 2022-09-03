import ListItem from './ListItem';
import PropTypes from 'prop-types';

function List(props) {
    // let tempItems = props.items || []; one way to provide default value
    
    let items = props.items.map((item) => <ListItem key={item} text={item}/>);  //<li>{item}</li>); 
    let css = `bg-${props.background}`;
    return (
        <>
            <h3 className={css}>{props.title}</h3>
            <ul>
                {items}
            </ul>
        </>
    );
}

List.defaultProps = {
    items: [],
    background: 'primary'
};

// description of List props parameter
List.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.oneOf([
        'primary',
        'secondary'
    ]),
    specialProp: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })
            
};

export default List;