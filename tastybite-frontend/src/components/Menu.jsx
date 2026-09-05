import FoodCard from "./FoodCard";
import CB from "../assets/CB.png";
import burger from "../assets/burger.png";
import chicken65 from "../assets/chicken65.png";
import kparotta from "../assets/kparotta.png";
import muttonbiriyani from "../assets/muttonbiriyani.png";
import muttonmasala from "../assets/muttonmasala.png";
import parotta from "../assets/parotta.png";
import pizza from "../assets/pizza.png";
import porichhaparotta from "../assets/porichhaparotta.png";
import veechu from "../assets/veechu.png";

const foods  =[
    {
        id : 1,
        name : "Chicken biriyani",
        price :  199,
        image : CB
    },
    {
        id : 2,
        name : "Burger",
        price :  99,
        image : burger
    },
    {
        id : 3,
        name : "Pizza" ,
        price : 149,
        image : pizza
    },
    {
        id : 4,
        name : "Chicken 65",
        price :  249,
        image : chicken65
    },
    {
        id : 5,
        name : "Mutton biriyani",
        price :  499,
        image : muttonbiriyani
    },
    {
        id : 6 ,
        name : "Parotta",
        price : 25,
        image : parotta
    },
    {
        id : 7,
        name : "Kothu Parotta",
        price : 100,
        image : kparotta
    },
    {
        id : 8,
        name : "Veechu Parotta",
        price : 145,
        image : veechu
    },
    {
        id : 9 ,
        name : "Fried Parotta",
        price : 125,
        image : porichhaparotta
    },
    {
        id : 10 ,
        name : "Mutton Masala",
        price : 300,
        image : muttonmasala
    }
]

function Menu(props) {

    const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(props.search.toLowerCase())
    );

    return(
        <section className="menu-section">
            <h2>
                Explore Our <span>Menu</span>
            </h2>

            <p className="menu-subtitle">
                Delicious food made fresh for you
            </p>
            
            <div className="search-wrapper">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search your favorite food..."
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                />
            </div>

            <div className="food-grid">

                {filteredFoods.map((food) => (
                    <FoodCard
                        key={food.id}
                        food={food}
                        addToCart={props.addToCart}
                    />
                ))}

            </div>


        </section>
    );
}

export default Menu;