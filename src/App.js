import React from 'react'
import CategoriesList from './Component/compCategory/CategoriesList.js'
import SingleCategory from './Component/compCategory/SingleCategory'
import ProductsList from './Component/compProduct/ProductsList.js'
import SingleProduct from './Component/compProduct/SingleProduct.js'
import SingleUser from './Component/compUser/SingleUser.js'
import UserList from './Component/compUser/UserList.js'
import CartList from './Component/compCart/CartList.js'
import SingleCart from './Component/compCart/SingleCart'

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
      <CategoriesList/>
      <br/>
      <SingleCategory/>
      <br/>
      <ProductsList/>
      <br/>
      <SingleProduct/>
      <br/>
      <UserList/>
      <br/>
      <SingleUser/>
      <br/>
      <CartList/>
      <br/>
      <SingleCart/>
    </div>
  )
}

export default App;

