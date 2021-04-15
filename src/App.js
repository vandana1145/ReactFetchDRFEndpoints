import React, { Component } from 'react'
import CategoriesList from './Component/compCategory/CategoriesList.js'
import SingleCategory from './Component/compCategory/SingleCategory'
import ProductsList from './Component/compProduct/ProductsList.js'
import SingleProduct from './Component/compProduct/SingleProduct.js'

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
      <p><CategoriesList/></p>
      <br/>
      <p><SingleCategory/></p>
      <br/>
      <p><ProductsList/></p>
      <br/>
      <p><SingleProduct/></p>
    </div>
  )
}

export default App;

