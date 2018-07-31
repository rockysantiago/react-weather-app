import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'components/Chart';
import GoogleMap from 'components/GoogleMap';

function mapStateToProps({ weather }) {
  return { weather };
}

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperature = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temperature} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="green" units="hpA" />
        </td>
        <td>
          <Chart data={humidity} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WeatherList);
