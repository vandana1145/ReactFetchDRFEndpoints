import React from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import CategoriesList from './Component/compCategory/CategoriesList.js'
import SingleCategory from './Component/compCategory/SingleCategory'
import ProductsList from './Component/compProduct/ProductsList.js'
import SingleProduct from './Component/compProduct/SingleProduct.js'
import SingleUser from './Component/compUser/SingleUser.js'
import UserList from './Component/compUser/UserList.js'
import CartList from './Component/compCart/CartList.js'
import SingleCart from './Component/compCart/SingleCart'
import CartItems from './Component/compCartItem/CartItems.js'
import InvalidPath from './Component/notFound/NotFound.js'

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
    <>
      <nav>
        <h2>Welcome</h2>
        <ul>
          <li><Link to="/">CategoriesList</Link></li>
          <li><NavLink to="/category" activeClassName="active">SingleCategory</NavLink></li>
          <li><NavLink to="/productslist" activeClassName="active">ProductsList</NavLink></li>
          <li><NavLink to="/product" activeClassName="active">SingleProduct</NavLink></li>
          <li><NavLink to="/userslist" activeClassName="active">UserList</NavLink></li>
          <li><NavLink to="/user" activeClassName="active">SingleUser</NavLink></li>
          <li><NavLink to="/cartlist" activeClassName="active">CartList</NavLink></li>
          <li><NavLink to="/cart" activeClassName="active">SingleCart</NavLink></li>
          <li><NavLink to="/cartitems" activeClassName="active">CartItems</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={CategoriesList}></Route>
          <Route path="/category" component={SingleCategory}></Route>
          <Route path="/productslist" component={ProductsList}></Route>
          <Route path="/product" component={SingleProduct}></Route>
          <Route path="/userslist" component={UserList}></Route>
          <Route path="/user" component={SingleUser}></Route>
          <Route path="/cartlist" component={CartList}></Route>
          <Route path="/cart" component={SingleCart}></Route>
          <Route path="/cartitems" component={CartItems}></Route>
          <Route component={InvalidPath}></Route>
        </Switch>
      </nav>
    </>
  )
}

export default App;

