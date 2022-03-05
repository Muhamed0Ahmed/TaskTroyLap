// import { faTurkishLira } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import "./Home.css"
import Products from './Products'
import ScrollCategories from './ScrollCategories'
import SideBar from './SideBar'

export const products = [
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
]
export default class Home extends Component {
    

  
  render() {
    return (
      <div>
      <div className="container-home">
        <div className="scroll-categories">
          <ScrollCategories/>
          
        </div>
        <div className="sidebar-container">
          <SideBar/>
        </div>
        <div className="main-product">
          <Products products={this.props.products} onclick={this.props.onclick}/>
        </div>
           
      </div>
      
      </div>
    )
  }
}
