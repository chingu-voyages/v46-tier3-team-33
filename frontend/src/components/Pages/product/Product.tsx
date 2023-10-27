import React, { useState,useEffect } from 'react';
import './product.css'
import productimage from './productImageExample.jpg'
const Product:React.FC = () => {

// hardcoded data 
//  interface Farmer {
//     username: string;
//     city: string;
//     address: string;
//   }
  
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
    }
  }
  
  // const farmerFakeApi: Farmer[] = [{
  //   username: 'Tom Cruise',
  //   city: 'London',
  //   address: 'Great Russell St, London WC1B 3DG, United Kingdom'
  // },{
  //   username: 'Harry Potter',
  //   city: 'London',
  //   address: '4 Privet Drive, Warner Bros. Studio Tour, Studio Tour Dr, Leavesden, Watford WD25 7LR, United Kingdom '
  // }];
  
  const productFakeApi: Product[] = [{
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
      address: 'Great Russell St, London WC1B 3DG, United Kingdom'
    }
  },
  {
    productName: 'Bitter Cheddar',
    productUnitPrice: 18, 
    productImage:productimage,
    productWeight: 100,
    productWeightUnit: 'gram',
    productExpiryDate: '2025-10-29',
    productDescription: 'You cannot miss it ',
    productStock:5,
    farmer:{
      username: 'Harry Potter',
      city: 'London',
      address: '4 Privet Drive, Warner Bros. Studio Tour, Studio Tour Dr, Leavesden, Watford WD25 7LR, United Kingdom',
    }

  }];

  // const [farmer, setFarmer] =  useState<Farmer[] | null>(null);
  const [product, setProduct] = useState<Product[] | null>(null);

  useEffect(()=>{
    // setFarmer(farmerFakeApi)
    setProduct(productFakeApi)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (<>
    <h1>Product Listing</h1>
     <div className='container-prooduct-list' data-testid='container-product-list'>
      {product?.map((product, index) => {
          const {productName,productImage,productUnitPrice,productDescription,productExpiryDate}=product;
          const {username,city} = product.farmer
          return (
            <div key={index} className='container-product-card'>
              
              <div>
              <img className="product-image" src={productImage} alt={productName}/>
              </div>

              <div className='container-product-info'>
                <p> Farmer: {username}</p>
                <h2>{productName}</h2>
                
                <div>
                  <p>{productDescription}</p>
                  <p>£ {productUnitPrice} </p>
                </div>
              </div>
               
              <div> 
              <p>City:</p>
                <p>{city}</p>
              </div>             
                
              <div>
                <p>ExpiryDate:</p>
                <p>{productExpiryDate}</p>
              </div>

          </div>)
      })}
      </div>

</>)
}

export default Product