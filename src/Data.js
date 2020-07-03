import React, { Component } from 'react';
import './App.css';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : " "
    };
  }


updatedSearch(event) {
  this.setState(
    {search : event.target.value.substr(0,15)}
    )
}

  render () {

    console.log(this.props.names)
    let filterednames = this.props.names.filter(
      (name) => {
        return name.toLowerCase().indexOf(this.state.
          search.toLowerCase()) !== -1;
      }
    );
    return (  
        <div>
        <p className = "header"> Users list </p>
        <input  type = "text" 
          placeholder = "Search by user name" 
          value = {this.state.search}
          onChange = {this.updatedSearch.bind(this)}
        />
        <ol>
            {filterednames.map(name => (
            <li key={name}>{name}</li>
            ))}
        </ol>
        </div>
    )
    
    }
}

export default Data;








