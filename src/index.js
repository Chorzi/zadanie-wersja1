import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';

class App extends Component {
  constructor() {
    super();
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
        <div className = "App">
        <h1> Users list </h1>
        <Data />
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

ReactDOM.render(<App/>,document.getElementById('root'));



export default App;