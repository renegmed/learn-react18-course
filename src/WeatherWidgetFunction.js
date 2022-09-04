import { useState, useEffect } from 'react';

function WeatherWidget({location}) {
    const [data, setData] = useState(null);
 
  
    useEffect(() => {
        if (location){  
            console.log('request made'); // called whenever location changes and not blank
            fetch(`http://api.weatherstack.com/current?access_key=xxxxxxxxxxxx&query=${location}&units=f`)
            .then(res => res.json())
            .then(obj => setData(obj));
        }
    },[location]);  // without location, useEffect will always be executed

    // console.log('render occurred.');

    console.log("...data:\n", data);

    if (!data) {
        console.log("...no data");
        return <></>;
    }

    if (!data.success) {
        console.log(data.error.type, "\n", data.error.info);
        return <></>;
    }

    return (
         <div className="card"> 
            <img src={data.current.weather_icons[0]}/>
            <div className="card-body">
                <h5 className="card-title">
                    {data.location.name}
                </h5>                
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Temp: {data.current.temperature}</li>
                <li className="list-group-item">{data.current.weather_description[0]}</li> 
                <li className="list-group-item">Wind: {data.current.wind_speed} {data.current.wind_dir}</li>
                <li className="list-group-item">Humidity: {data.current.humidity}</li>
            </ul>
         </div>
    );    
}

export default WeatherWidget
