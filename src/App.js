import React, { Component } from 'react'
import CompCategory from './Component/compCategory/compCategory.js'
import CompProduct from './Component/compProduct/compProduct.js'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       category: null
//     }
//   }

//   componentDidMount(){
//     fetch('http://127.0.0.1:8000/api/categories').then((response) => {
//       response.json().then((data) => {
//         let output = data.results;
//         console.log(output);
//         this.setState({category:output})
//       })
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>List of Categories</h1>
//         {
//           this.state.category ? 
//           this.state.category.map((item, i)=>
//           <div><p>
//           {i+1}: {item.category}  
//           </p></div>)
//           :
//           null
//         }
//       </div>
//     )
//   }
// }


const App = () => {
  return (
    <div>
      <h3><CompCategory/></h3>
      <br/>
      <h3><CompProduct/></h3>
    </div>
  )
}

export default App;

