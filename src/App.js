import './App.css';
import Home from './components/Home';
import MangerTabs from './components/MangerTabs';
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import AllPreOrders from './components/AllPreOrders';
import Search from "./components/search/Search"
import Buys from './components/Buys';
import { Component } from 'react';

class  App extends Component {
  constructor(){
    super();
    this.state = {
      products:[
        {
          id:0,
          name:"شيبسى حجم  كبير",
          kal:"200",
          price:7.50,
          image:"chep.jpg",
          storeCount:7,
          category:"تسالى",
          count:0,
        },
        {
          id:1,
          name:"عصير خل التفاخ 250 مل  ",
          kal:"200",
          price:7.50,
          image:"juce.jpg",
          storeCount:7,
          category:"تسالى",
          count:0,
        },
        {
          id:2,
          name:"شيكولاته ",
          kal:"200",
          price:7.50,
          image:"mandm.jpg",
          storeCount:7,
          category:"تسالى",
          count:0,
        },
        {
          id:3,
          name:"عصير خل التفاح 250 مل",
          kal:"200",
          price:7.50,
          image:"chep.jpg",
          storeCount:7,
          category:"بيتزا",
          count:0,
        },
        {
          id:4,
          name:"عصير خل التفاخ",
          kal:"200",
          price:7.50,
          image:"kemy.jpg",
          storeCount:7,
          category:"مشروبات",
          count:0,
        },
        {
          id:5,
          name:"عصير خل التفاخ",
          kal:"200",
          price:7.50,
          image:"mandm.jpg",
          storeCount:7,
          category:"تسالى",
          count:0,
        },
        {
          id:6,
          name:"شيبسى  حجم كبير",
          kal:"200",
          price:7.50,
          image:"chep.jpg",
          storeCount:7,
          category:"تسالى",
          count:0,
        },
        {
          id:7,
          name:"شيبسى حجم كبيى",
          kal:"200",
          price:7.50,
          image:"chep.jpg",
          storeCount:7,
          category:"تسالى",
          count:0,

        },
      ],
      cart:[{
        id:5,
        name:"عصير خل التفاخ",
        kal:"200",
        price:7.50,
        image:"mandm.jpg",
        storeCount:7,
        category:"تسالى",
        count:0,
      },
      {
        id:6,
        name:"شيبسى  حجم كبير",
        kal:"200",
        price:7.50,
        image:"chep.jpg",
        storeCount:7,
        category:"تسالى",
        count:0,
      },
      {
        id:7,
        name:"شيبسى حجم كبيى",
        kal:"200",
        price:7.50,
        image:"chep.jpg",
        storeCount:7,
        category:"تسالى",
        count:0,

      },],
    }
  }
  addToCart = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-product-id");
    const product =this.state.products[id];
    const cart = this.state.cart.slice();
    
    cart[cart.length] = product;
    this.setState(
      {
        cart:this.state.cart.concat(product),
      }
    )
    e.target.disabled = true;



  }
  render(){
  return (
    <div className="container-xxl">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home  products={this.state.products} cart={this.state.cart} onclick={this.addToCart}/>}/>
          <Route path="/allpre" element={<AllPreOrders/>}/>
          <Route path="/search" element={<Search products={this.state.products} cart={this.state.cart} onclick={() => this.addToCart()}/>}/>
          <Route path="/buys" element={<Buys/>}/>
            
          

        </Routes>
        <div className="manger ">
          <MangerTabs/>
        </div>
      </BrowserRouter>
      
      
    </div>
  )};
}

export default App;
