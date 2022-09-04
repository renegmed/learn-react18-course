import {Component} from 'react';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        //console.log('this.props.location', this.props.location);

        if (this.props.location) {
            console.log("request made in componentDidMount()")
        }    
    }

    componentDidUpdate(prevProps, prevState) { //}, snapshot {
        if (prevProps.location !== this.props.location) {
            console.log('request made in componentDidUpdate()');
        }
    }

    render() {
        console.log("render occurred")
        return (
            <>
              
            </>
        );
    }
}

export default WeatherWidget
