function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                Tasty<span>Bite</span>
            </div>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About</a>
                <a href="#">Offers</a>
                <a href="#">Contact</a>
            </div>

            <button className="cart-btn">
                🛒
            </button>
        </nav>
    );
}

export default Navbar;