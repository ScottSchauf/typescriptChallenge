import React from 'react';

type passProps = {
    lat: number;
    lon: number;
    desc: string;
    temp: number;
    humid: number;
    feel: number;
}

const Display: React.FunctionComponent<{obj: passProps}> = (props) => {
  console.log(props);
    return (
    <div className="App">
      <div className="verticalCenter">
                <p>Latitude: {props.obj.lat}</p>
                <p>Longitude: {props.obj.lon}</p>
                <p>Description: {props.obj.desc}</p>
                <p>Temperature: {props.obj.temp} K</p>
                <p>Humidity: {props.obj.humid}</p>
                <p>Feels Like: {props.obj.feel} K</p>
      </div>
    </div>
  );
}

export default Display;
