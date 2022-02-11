import React from "react";

function Home(props) {
  console.log("home", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+7+plus+128gb&mobile_device_color=silver" />
        </div>
        <div className="text-wrapper item">
          <span>iPhone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 2000, name: "iPhone 14" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
