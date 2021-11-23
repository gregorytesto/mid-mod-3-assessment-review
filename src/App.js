import { Component } from "react";
import "./App.css";

import data from './data/productData';

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }



  render(){
    let productDataElArr = data.map((product)=>{
      return (
        <div>
          <h3>Baseball Glove</h3>
          <div>Price: $19.99</div>
          <button>Add To Cart</button>
          <img 
            alt="Product image" 
            src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove"
          />
          <div>
            This glove has a mark on it that's either a famous player's autograph or a ketchup stain.
          </div>
        </div>
      )
    })

    return (
      <div>
        <h1>My Garage Sale</h1>
        { productDataElArr }
      </div>
    )
  }
};

export default App;
