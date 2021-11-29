import { Component } from "react";
import "./App.css";

import data from './data/productData';
import formatPrice from "./helpers/formatPrice";

class App extends Component{
  constructor(){
    super();
    this.state = {
      cartArr: [],
      subTotal: 0,
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: ""
    }
  }

  handleAddToCart=(product)=>{
    this.setState({
      cartArr: [ ...this.state.cartArr, product ],
      subTotal: this.state.subTotal + product.price
    })
  }

  handleFirstNameChange=(e)=>{
    this.setState({
      firstName: e.target.value
    })
  }

  validateInputs=()=>{
    if(this.state.firstName.length < 3){
      return "The name field is too short";
    } else {
      return "Purchase complete";
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let message = this.validateInputs();
    alert(message);
  }

  render(){
    let productDataElArr = data.map((product)=>{
      let { id, name, price, description, img } = product;

      return (
        // Product
        <div key={ id }>
          <h3>{ name }</h3>
          <div>Price: { formatPrice(price) }</div>
          <button onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
          <div>
            <img 
              alt="Product image" 
              src={ img }
            />
          </div>
          <div>
            { description }
          </div>
        </div>
      )
    });

    let cartElArr = this.state.cartArr.map((product)=>{
      let { name, price } = product;
      // Cart Item
      return <li>{ name }: ${ price }</li>
    })

    return (
      <div id="app">
        {/* // AllProducts */}
        <div id="products-container">
          <h1>My Garage Sale</h1>
          <div className="products">
            { productDataElArr }
          </div>
        </div>

        <div>
          {/* // Cart */}
          <h1>Cart</h1>
          <ul>
            { cartElArr }
          </ul>
          <h2>Subtotal: { formatPrice(this.state.subTotal) }</h2>
          <h2>Tax: { formatPrice(this.state.subTotal*.05) }</h2>
          <h2>Total: { formatPrice(this.state.subTotal*1.05) }</h2>

          {/* // Checkout */}
          <h1>Checkout</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="input-container">
              <label htmlFor="first-name">First Name</label>
              <br />
              <input 
                type="text" 
                id="first-name"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="last-name">Last Name</label>
              <br />
              <input type="text" id="last-name" />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email</label>
              <br />
              <input type="text" id="email" />
            </div>

            <div className="input-container">
              <label htmlFor="credit-card">Credit Card</label>
              <br />
              <input type="text" id="credit-card" />
            </div>

            <div className="input-container">
              <label htmlFor="zip-code">Zip Code</label>
              <br />
              <input type="text" id="zip-code" />
            </div>
            
            <button type="submit">Buy Now</button>
          </form>
        </div>
      </div>
    )
  }
};

export default App;
