import { makerStyles } from './guitarStyles';
import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        
        this.guitarName = React.createRef(null);  // for text input field
        this.guitarMaker = React.createRef(null); // for select input field

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(e) {
        e.preventDefault();

        let title = this.guitarName.current.value;
        let text = this.guitarMaker.current.value;
        this.props.onSubmit({
            title,
            text
        });

        this.guitarName.current.value = '';
        this.guitarMaker.current.value = '';
        this.guitarName.current.focus();

        // TODO: add text to the array
    }

    
    render() {
   
        return (
            <>
                <div className="pt-3 pb-2">
                    <form>
                        <div className="mb-3">                       
                            <input 
                                type="text" 
                                className="form-control-inline"
                                ref={this.guitarName}                            
                            />
                        </div>
                        <div className="mb-3">
                            {/* NOTE: style not working in Firefox */}
                            <select ref={this.guitarMaker}>
                                <option value=''></option>
                                <option style={makerStyles.prs} value='PRS'>PRS</option>
                                <option style={makerStyles.fender} value='Fender'>Fender</option>
                                <option style={makerStyles.gibson} value='Gibson'>Gibson</option>
                            </select>
                        </div>
                        <button 
                            className="btn btn-primary boldYellowText"
                            onClick={this.handleClick}
                            
                        >
                           {this.props.buttonText}
                        </button>
                    </form>
                </div>               
            </>
        );
    }
}

export default AddItem;