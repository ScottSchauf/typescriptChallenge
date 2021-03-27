// Class Component

import React from 'react';

type Data = {
    lat: number;
    lon: number;
    desc: string;
    temp: number;
    humid: number;
    feel: number;
}

type AcceptedProps = {};

export default class Weather extends React.Component<AcceptedProps, Data> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            desc: '',
            temp: 0,
            humid: 0,
            feel: 0,
        }
    }

    saveLocation = (position: any) => {
        this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        })
        console.log(this.state.lat, this.state.lon);
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.saveLocation)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=e34a7b2ea52d8bb998c46caee5a33d6e`)
            .then(res => res.json())
            .then(data => (
                console.log(data),
                this.setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    humid: data.main.humidity,
                    feel: data.main.feels_like,
                })
                ))
    }

    render(){
        return(
            <div>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.lon}</p>
                <p>Description: {this.state.desc}</p>
                <p>Temperature: {this.state.temp} K</p>
                <p>Humidity: {this.state.humid}</p>
                <p>Feels Like: {this.state.feel} K</p>
            </div>
        )
    }
}