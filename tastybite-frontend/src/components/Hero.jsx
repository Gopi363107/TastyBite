function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">

                <p className="hero-small">
                    Welcome to TastyBite
                </p>

                <h1>
                    It's not just
                    <br />
                    food , it's an 
                    <br />
                    <span>experience.</span>
                </h1>

                <p className="hero-description">
                    Fresh ingrdients. 
                    <br />
                    Bold flavors. 
                    <br />
                    Delivered fast to your door!
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        View menu
                    </button>
                    <button className="secondary-btn">
                        Order now
                    </button>
                </div>

            </div>

            <div className="hero-food">

                <img src = "src\assets\image.png"
                     alt= "Sushi"
                />

            </div>
        </section>
    );
}

export default Hero;