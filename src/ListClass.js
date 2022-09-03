/*

This component violates the Single Responsibility principle.
Not only responsible for listing items, it also responsible 
for inputting and adding new items to the list.

We need to remove the input feature and move to another component.

*/
import { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newGuitar: '',
            items: [...props.items]  // fill items with values from props
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let newGuitar = this.state.newGuitar

        // append newGuitar to items array
        this.setState({
            items: [...this.state.items, newGuitar],
            newGuitar: ''
        }); 
    }

    
    handleChange(e) {
        this.setState({newGuitar: e.target.value});
        console.log(this.state.newGuitar);
    }
    render() {

        let items = this.state.items.map((item) => <ListItem key={item} text={item}/>);  //<li>{item}</li>); 
       
        return (
            <>
                <div className="pt-3 pb-2">
                    <form>
                        <input type="text" 
                            className="form-control-inline" 
                            value={this.state.newGuitar}
                            onChange={this.handleChange}
                        />
                        <button 
                            className="btn btn-primary"
                            onClick={this.handleClick}
                            
                        >
                            Add Guitar
                        </button>
                    </form>
                </div>
                <h3>{this.props.title}</h3>
                <ul>
                    {items}
                </ul>
            </>
        );
    }
}

export default List;