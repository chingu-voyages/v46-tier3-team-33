import React from 'react';
import './productDetails.css'
import productimage from './productImageExample.jpg'
 

//need to pass props here
const ProductDetails: React.FC = () => {
  interface Product {
    productName: string;
    productUnitPrice: number; 
    productImage: string;
    productWeight: number;
    productWeightUnit: string;
    productExpiryDate: string;
    productDescription: string;
    productStock:number;
    farmer:{
      username: string;
      city: string;
      address: string;
      phone:number;
      postcode:string;
      business_hour: string;
    }
  }
  
  // hardcoded data as props
  const productExample: Product = {
    productName: 'Flaming Heart Hot & Spicy Cheddar',
    productUnitPrice: 8, 
    productImage: productimage,
    productWeight: 40,
    productWeightUnit: 'gram',
    productExpiryDate: '2025-10-20',
    productDescription: 'Too hot to forget',
    productStock:10,
    farmer:{
      username: 'Tom Cruise',
      city: 'London',
      address: 'Great Russell St, London WC1B 3DG, United Kingdom',
      phone: 12345678,
      postcode:'WC1B 3DG',
      business_hour: '10am-12am',
    }
  }
  
  const {
    productName,
    productImage,
    productUnitPrice,
    productDescription,
    productExpiryDate,
    productStock,
  } = productExample;
  const { username, city,address,phone,postcode,business_hour } = productExample.farmer;

  return (<>
  
     <div className='container-prooduct-list' data-testid='container-product-list'>

        <div className="container-farmer-info">
          <p> Farmer: {username}</p>
          <p> City: {city}</p>
          <p> Address: {address}</p>
          <p> Business hour: {business_hour}</p>
          <p> Phone: {phone}</p>
          <p> Postcode: {postcode}</p>
        </div>

        <div className='container-product-info'>

          <div>
            <img className="product-image" src={productImage} alt={productName}/>
          </div>

        
          <h2>{productName}</h2>
                
          <div>
            <p>{productDescription}</p>
            <p>£ {productUnitPrice} </p>
            <p>ExpiryDate:</p>
            <p>{productExpiryDate}</p>
          </div>

          <div>
            <p>Available Stock:{productStock}</p>
            
          </div>


       </div>
    </div>
    </>)
}

export default ProductDetails