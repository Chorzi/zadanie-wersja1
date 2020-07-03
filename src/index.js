import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';



   class App extends Component {
   constructor() {
    super() 
      this.state = {
        names : [],
      }
   }

  
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          //Response
        .then(response => response.json())
        .then(output => {
        let data = output;
        let listaimion = [];
        for (let index = 0; index < data.length; index++) {
          listaimion.push(data[index].name)
        }      
        this.setState({names : listaimion});
      });
    }

     
     render () {
       return (
         <div className = "Data">
          <Data  names = {this.state.names} /> 
         </div>       
       )
     }
    }


ReactDOM.render(<App/>,document.getElementById('root'));
export default App;