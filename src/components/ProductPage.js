import React, { useState } from "react";
import Mainproductimg from "../images/mainproduct.jpeg";
import Slide2img from "../images/slide2.jpeg";
import Slide3img from "../images/slide3.jpeg";
import Slide4img from "../images/slide4.jpeg";
import Slide5img from "../images/slide5.jpeg";
import SimilarProduct1 from "../images/imgproduct2.jpeg"; // Add images for similar products
import SimilarProduct2 from "../images/imgproduct4.jpeg";
import SimilarProduct3 from "../images/imgproduct5.jpeg";
import SimilarProduct4 from "../images/imgproduct6.jpeg";
import { Link } from "react-router-dom";

const ProductPage = ({ setCartCount, cartCount }) => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const colors = [
    "#D9D9D9",
    "#A9A9A9",
    "black",
    "#FFFFFF",
    "#A6D6CA",
    "#B9C1E8",
  ];
  const availableColors = ["#D9D9D9", "black", "#A6D6CA"]; // Example available colors

  const sizes = ["XS", "S", "M", "L", "XL", "2X"];
  const availableSizes = ["S", "M", "L", "XL"];
  const originalPrice = 150; // Original price
  const offerPrice = 99; // Offer price
  const offerPercentage = Math.round(
    ((originalPrice - offerPrice) / originalPrice) * 100
  );
  const stock = 6;
  const imagesgrid = [
    Mainproductimg,
    Slide2img,
    Slide3img,
    Slide4img,
    Slide5img,
  ];
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Toggle the clicked state when the button is clicked
    setClicked(!clicked);
  };
  const similarProducts = [
    {
      id: 1,
      image: SimilarProduct1,
      name: "Similar Product 1",
      originalPrice: 180,
      offerPrice: 129,
    },
    {
      id: 2,
      image: SimilarProduct2,
      name: "Similar Product 2",
      originalPrice: 200,
      offerPrice: 149,
    },
    {
      id: 3,
      image: SimilarProduct3,
      name: "Similar Product 3",
      originalPrice: 160,
      offerPrice: 119,
    },
    {
      id: 4,
      image: SimilarProduct4,
      name: "Similar Product 4",
      originalPrice: 170,
      offerPrice: 139,
    },
  ];
  const starRating = 3.3;

  return (
    <>
      <div className="md:flex items-center justify-center lg:px-32 p-4 pt-10">
        <div className="grid grid-cols-5 gap-4 max-w-4xl md:w-1/2 max-h-[600px] md:p-4 pb-4">
          <div className="col-span-4">
            <img
              src={imagesgrid[selectedImage]}
              alt="Main Product"
              className="w-full h-[560px] object-cover"
            />
          </div>

          <div className="flex flex-col space-y-4">
            {imagesgrid.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-[100px] object-cover border border-gray-200 cursor-pointer ${
                  selectedImage === index ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="lg:max-w-[380px] md:w-1/2 px-10 border-2 relative">
          <button className="absolute right-0 p-0" onClick={handleClick}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.66">
                <rect width="34" height="34" fill="white" fillOpacity="0.88" />
                <path
                  d="M19.2792 20.4917L19.2577 20.1424L19.2792 20.4917ZM16.1681 14.8814L16.1417 15.2304C16.2366 15.2376 16.3303 15.2058 16.4013 15.1425C16.4722 15.0791 16.5143 14.9895 16.5178 14.8944L16.1681 14.8814ZM21.3934 18.603L21.7382 18.6636L21.3934 18.603ZM19.2577 20.1424C18.3589 20.1978 17.4196 20.3069 16.502 20.2005C15.6023 20.0961 14.763 19.7863 14.08 19.0218L13.558 19.4881C14.3865 20.4156 15.405 20.7779 16.4213 20.8958C17.4197 21.0117 18.4548 20.8932 19.3007 20.8411L19.2577 20.1424ZM14.08 19.0218C13.4115 18.2734 13.2737 17.2681 13.6152 16.4886C13.947 15.7314 14.7611 15.1262 16.1417 15.2304L16.1944 14.5324C14.5562 14.4087 13.44 15.1442 12.9741 16.2077C12.5179 17.249 12.715 18.5445 13.558 19.4881L14.08 19.0218ZM19.3007 20.8411C19.6045 20.8224 19.9296 20.8013 20.2248 20.7414C20.5197 20.6815 20.8232 20.5759 21.0634 20.3613L20.5971 19.8393C20.4894 19.9355 20.3251 20.0067 20.0855 20.0553C19.846 20.104 19.5696 20.1232 19.2577 20.1424L19.3007 20.8411ZM21.7382 18.6636C21.885 17.8289 22.1189 16.8137 22.116 15.8086C22.113 14.7854 21.8673 13.7327 21.0388 12.8053L20.5168 13.2716C21.1997 14.0362 21.4133 14.905 21.416 15.8107C21.4187 16.7344 21.2047 17.6555 21.0487 18.5424L21.7382 18.6636ZM21.0388 12.8053C20.1958 11.8616 18.9307 11.5203 17.8447 11.8566C16.7356 12.2002 15.8794 13.2267 15.8183 14.8684L16.5178 14.8944C16.5693 13.5109 17.2621 12.7699 18.0519 12.5253C18.8648 12.2735 19.8482 12.5233 20.5168 13.2716L21.0388 12.8053ZM21.0487 18.5424C20.9946 18.8502 20.9445 19.1226 20.8693 19.3552C20.794 19.5878 20.7048 19.7431 20.5971 19.8393L21.0634 20.3613C21.3037 20.1467 21.4426 19.857 21.5353 19.5706C21.628 19.2841 21.6854 18.9633 21.7382 18.6636L21.0487 18.5424Z"
                  fill={clicked ? "#DC143C" : "#1E1E1E"} // Change color to red if clicked
                />
              </g>
            </svg>
          </button>
          <h2 className="md:text-2xl text-xl font-semibold pt-10">
            ABSTRACT PRINT SHIRT
          </h2>
          <div className="flex items-center space-x-2">
            <p className="text-sm line-through text-gray-500">
              Rs.{originalPrice}
            </p>
            <p className="text-lg font-bold">Rs.{offerPrice}</p>

            <p className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 inline-block rounded-full">
              {offerPercentage}% OFF
            </p>
            <div className="flex">
              {starRating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500" // Adjusted size to 20px (w-5 h-5) and color to yellow
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>

          {/* Stock Indication */}
          {stock < 9 && (
            <p className="text-sm text-red-600 pt-2">
              <strong>Hurry! Only {stock} left in stock.</strong>
            </p>
          )}

          <p className="text-sm text-gray-500">MRP incl. of all taxes</p>

          <p className="text-xs font-medium text-gray-600 md:pt-10 md:pb-14 py-3">
            Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
          </p>

          <div className="mb-6">
            <h3 className="text-xs font-light text-gray-600 mb-2">Color</h3>
            <div className="flex space-x-2">
              {colors
                .filter((color) => availableColors.includes(color)) // Display only available colors
                .map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-9 h-9 cursor-pointer border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-light text-gray-600 mb-2">Size</h3>
            <div className="grid grid-cols-3 gap-5 md:grid-cols-6 md:gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    availableSizes.includes(size) && setSelectedSize(size)
                  }
                  disabled={!availableSizes.includes(size)}
                  className={`py-2 border ${
                    availableSizes.includes(size)
                      ? selectedSize === size
                        ? "border-black"
                        : "border-gray-300"
                      : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                  } hover:border-black ${
                    !availableSizes.includes(size)
                      ? "hover:border-gray-300"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 pb-3 underline">
            <Link to="/SizeChart">FIND YOUR SIZE | MEASUREMENT GUIDE</Link>
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#D9D9D9] text-black w-full py-3 mb-5 hover:bg-black hover:text-white"
          >
            ADD
          </button>
        </div>
      </div>
      {/* products you may like */}

      <div>
        <div className="md:p-10 p-3 pb-10 ">
          <h3 className="text-lg font-semibold mb-4">Products You May Like</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {similarProducts.map((product) => {
              const offerPercentage = Math.round(
                ((product.originalPrice - product.offerPrice) /
                  product.originalPrice) *
                  100
              );
              return (
                <Link to="/" className="block">
                  <div
                    key={product.id}
                    className="border p-4 rounded-lg shadow-md"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h4 className="text-sm font-medium">{product.name}</h4>
                    <div className="flex items-center space-x-2 mt-2">
                      <p className="text-xs line-through text-gray-500">
                        Rs.{product.originalPrice}
                      </p>
                      <p className="text-lg font-medium">
                        Rs.{product.offerPrice}
                      </p>
                      <p className="text-yellow-600 text-xs font-medium">
                        {offerPercentage}% OFF
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
