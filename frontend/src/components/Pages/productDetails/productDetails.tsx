import React, { useState, useEffect } from "react";
import "./productDetails.css";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
    };

    fetchProduct().catch(console.error);
  }, []);

  return (
    <>
      <h1>Product Listing (Details)</h1>
      <div
        className="container-prooduct-list"
        data-testid="container-product-list"
      >
        {products?.map((product) => {
          const { id, title, image, price, description } = product;

          return (
           
            <div>
              <li key={id}>
              
                <div className="container-product-card">
                  <div>
                    <img className="product-image" src={image} alt={title} />
                  </div>

                  <div className="container-product-info">
                    <h2>{title}</h2>

                    <div>
                      <p>{description}</p>
                      <p>£ {price} </p>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetails;
