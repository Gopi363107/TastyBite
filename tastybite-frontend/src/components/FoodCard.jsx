function FoodCard(props){

    function handleAddToCart(){
        props.addToCart(props.food);
    }

    return (
        <div className="food-card">
            <img src={props.food.image} alt={props.food.name} className="food-image" />

            <h4>{props.food.name}</h4>
            <p className="food-price">₹ {props.food.price}</p>

            <button 
                onClick={handleAddToCart} 
                className="add-cart-btn"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default FoodCard;