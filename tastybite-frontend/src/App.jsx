import { useState } from "react";

import "./App.css"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
function App(){

    const[cart , setCart] = useState([]);
    const [search, setSearch] = useState("");
    function addToCart(food){
      const existingFood = cart.find((item) => item.name === food.name);

      if(existingFood){
        const updatedCart = cart.map((item) => {
          if(item.name === food.name){
            return {
              ...item,
              quantity : item.quantity + 1
            };
          }
          return item;
        });
        setCart(updatedCart);

      } else{
        setCart([
          ...cart,
          {
            ...food,
            quantity : 1
          }
        ]);
      }
    }
    
    function increaseQuantity(index){
      const updatedCart = cart.map((item , i) => {
        if(i === index){
          return {
            ...item,
            quantity : item.quantity + 1
          };
        }
        return item;
      });

      setCart(updatedCart);
    }

    function decreaseQuantity(index){

      const updatedCart = cart.map((item , i) => {
        if(i === index && item.quantity > 1){
          return{
            ...item,
            quantity : item.quantity - 1
          };
        }
        return item;
      });
      setCart(updatedCart);
    }

    function removeFromCart(index){
      const newCart = cart.filter((food , i) => i !== index);
      setCart(newCart);
    }

    return (
      <div>
        <Navbar />
      
        <Hero />

        <Menu 
          search={search}
          setSearch={setSearch}
          addToCart = {addToCart}
        />
        
        <Cart 
          cart = {cart}
          increaseQuantity = {increaseQuantity}
          decreaseQuantity = {decreaseQuantity}
          removeFromCart = {removeFromCart}
        />

        <Footer />
      </div>
    );
}

export default App;