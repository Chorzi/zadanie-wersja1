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

    let filteredPersons = this.props.persons.filter(
      (persons) => {
        return persons.name.toString().toLowerCase().indexOf(this.state.
          search.toLowerCase()) !== -1;
      }
    );
    return (  
          <div>
          <div className = "outer">
            <p className = "header"> Users list </p>
          <div className = "inner"> 
           <input  type = "text" 
          placeholder = "Search by user name" 
          value = {this.state.search}
          onChange = {this.updatedSearch.bind(this)}
        />
          </div>
         </div>
        <ol>
            {filteredPersons.map(person => (
            <li key={person.id}><span class = "names">{person.name} </span> <span className = "username"> @{person.username} </span> </li>
            ))}
        </ol>
        </div>
    )
    
    }
}

export default Data;








