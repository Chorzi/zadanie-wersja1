import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';



   class App extends Component {
   constructor() {
    super() 
      this.state = {
        persons  : []
      }
   }

  
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          //Response
        .then(response => response.json())
        .then(output => {
        let data = output;
        this.setState({persons : data})
      });
    }

     
     render () {
       return (
         <div className = "Data">
          <Data  persons = {this.state.persons} /> 
         </div>       
       )
     }
    }


ReactDOM.render(<App/>,document.getElementById('root'));
export default App;
