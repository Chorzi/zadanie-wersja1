import React, { Component } from 'react';
import App from './index';
import { unstable_batchedUpdates } from 'react-dom';


class Data extends Component {
    constructor(props) {
      super(props);
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
      
        //names in array
        let listaimion = [];

        for (let index = 0; index < data.length; index++) {
          listaimion.push(data[index].name)
         }
      
        
    
      this.setState( 
        {names : listaimion}
      )
      

      }
    )
    }

     
     render () {
       
       return (
         <div className = "Data">
        <App  names = {this.state.names} /> 
        </div>

       
       )
     }


    }
    
export default Data;





