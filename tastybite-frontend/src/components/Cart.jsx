function Cart(props){

    const total = props.cart.reduce((sum , food) => {
        return sum + food.price * food.quantity;
    }, 0);

    return (
        <section>
            <h2>Your Cart</h2>
            {props.cart.length == 0 ? (
                <div className="empty-cart">
                    <h2>🛒 Your Cart</h2>
                    <p>Your cart is empty</p>
                    <p>Add some delicious food to get started!</p>
                </div>
                ) : (
                    <>

                        {props.cart.map((food , index) => (
                            <div key = {index}>

                                <h3> {food.name}</h3>

                                <p> ₹ {food.price}</p>

                                <button onClick={()  => props.decreaseQuantity(index)}>
                                    -
                                </button>

                                <span>{food.quantity}</span>

                                <button onClick={() => props.increaseQuantity(index)}>
                                    +
                                </button>

                                <p>
                                    subtotal : ₹{food.price * food.quantity}
                                </p>

                                <button onClick={ () => props.removeFromCart(index) }>
                                    Remove
                                </button>

                            </div>
                        ))}

                        <h3>Total : ₹{total} </h3>
                    </>
                )}
        </section>
    );
}

export default Cart;