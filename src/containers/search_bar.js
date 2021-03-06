import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit  = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

    // Fetch weather data here
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
   return (
     <form onSubmit={this.onFormSubmit} className="input-group">
       <input
         placeholder="Get a 5-day forecast in the entered city"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}
         autoFocus
       />
       <span className="input-group-btn">
         <button type="submit" className="btn btn-secondary"> Search </button>
       </span>
     </form>
    )
  }
}

// Everytime an action is called and returned, it ensure the action result flows trought the middleware and then to all reducers
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
