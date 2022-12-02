import React from 'react';
import map from '../images/map.png';
import restaurantData from '../data/restaurants.json';
import locationData from '../data/location.json';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      locationSearch: '',
      restaurantData: restaurantData,
      locationData: locationData
    }
  }

  handleLocationSearch = (e) => {
    e.preventDefault();
    this.setState({
      locationSearch: e.target.search.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div id="city-search">
        <form onSubmit={this.handleLocationSearch}>
          <label>Search for a location</label>
          <input type="text" name="search" placeholder="Enter City here"/>
          <button type="submit">Explore!</button>
        </form>
        {this.state.locationSearch && this.state.locationData
          ? <div id="map"><img src={map} alt="location map"/></div>
          : null
        }
        {this.state.locationSearch && this.state.restaurantData
          ? <ul>{this.state.restaurantData.map(place => <li>{place.restaurant}</li>)}</ul>
          : null
        }
      </div>
    )
  }
}

export default Search;
