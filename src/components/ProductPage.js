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
import FrequentProduct1 from "../images/product1.jpeg";
import FrequentProduct2 from "../images/product3.jpeg";

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
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed((prev) => !prev); // Toggle between red and white
  };

  const similarProducts = [
    {
      id: 1,
      image: SimilarProduct1,
      name: "Similar Product 1",
      originalPrice: 180,
      offerPrice: 89,
    },
    {
      id: 2,
      image: SimilarProduct2,
      name: "Similar Product 2",
      originalPrice: 200,
      offerPrice: 99,
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

  const frequentlyBoughtProducts = [
    {
      id: 1,
      image: FrequentProduct2,
      name: "Combo Product 1",
      originalPrice: 180,
      offerPrice: 79,
    },
    {
      id: 2,
      image: FrequentProduct1,
      name: "Combo Product 2",
      originalPrice: 200,
      offerPrice: 99,
    },
  ];

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
          <button
            className="absolute top-0 right-0"
            onClick={handleClick}
            style={{
              backgroundColor: isRed ? "white" : "white",
              border: "none",

              padding: "10px",
              cursor: "pointer",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={isRed ? "red" : "white"} // Icon color
              stroke="black" // Outline color
              strokeWidth="1" // Thickness of the outline
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(-40deg)" }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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
      {/* frequently bought together */}
      <div>
        <div className="md:p-10 p-3 pb-10">
          <h3 className="text-lg font-semibold mb-4">
            Frequently Bought Together
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {frequentlyBoughtProducts.map((product) => {
              const offerPercentage = Math.round(
                ((product.originalPrice - product.offerPrice) /
                  product.originalPrice) *
                  100
              );
              return (
                <Link to="/" className="block">
                  <div
                    key={product.id}
                    className="border p-4 rounded-lg shadow-md relative"
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
                      <p className="md:text-lg text-sm font-medium">
                        Rs.{product.offerPrice}
                      </p>
                      <p className="text-yellow-600 text-xs md:font-medium font-normal">
                        {offerPercentage}% OFF
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
            <button
              onClick={handleAddToCart}
              className="bg-[#D9D9D9] text-black w-full py-3 mb-5 h-14 rounded col-span-2 place-self-center md:col-span-1 hover:bg-black hover:text-white "
            >
              BUY ALL
            </button>
          </div>
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
                      <p className="md:text-lg text-sm font-medium">
                        Rs.{product.offerPrice}
                      </p>
                      <p className="text-yellow-600 text-xs md:font-medium font-normal">
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
