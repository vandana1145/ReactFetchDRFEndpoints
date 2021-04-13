import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import compAccess from './Component/compAccess/compAccess.js'
import compCloth from './Component/compCloth/compCloth.js'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      category: null
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/categories').then((response) => {
      response.json().then((data) => {
        let output = data.results;
        console.log(output);
        this.setState({category:output})
      })
    })
  }
  render() {
    return (
      <div>
        <h1>List of Categories</h1>
        {
          this.state.category ? 
          this.state.category.map((item, i)=>
          <div><p>
          {i+1}: {item.category}  
          </p></div>)
          :
          null
        }
      </div>
    )
  }
}
