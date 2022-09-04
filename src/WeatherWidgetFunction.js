import { useState, useEffect } from 'react';

function WeatherWidget({location}) {
    const [data, setData] = useState(null);
 
  
    useEffect(() => {
        if (location){  
            console.log('request made'); // called whenever location changes and not blank
        }
    },[location]);  // without location, useEffect will always be executed

    console.log('render occurred.');

    return (
        <>
          
        </>
    );
    
}

export default WeatherWidget
