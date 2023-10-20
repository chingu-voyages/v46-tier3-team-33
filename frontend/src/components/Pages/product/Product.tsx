import React, { useState,useEffect } from 'react';
// import './product.css'
const Product:React.FC = () => {

// hardcoded data 
//  interface Farmer {
//     firstName: string;
//     lastName: string;
//     district: string;
//     address: string;
//   }
  
  interface Product {
    farmerFirstName: string;
    farmerLastName:string;
    productName: string;
    productWeight: number;
    productWeightUnit: string;
    productImage: string;
    productUnitPrice: number; 
    productUnitPriceUnit: string;
    productDescription: string;
    expiryDate: string;
  }
  
  // const farmerFakeApi: Farmer[] = [{
  //   firstName: 'Tom',
  //   lastName: 'Cruise',
  //   district: 'London',
  //   address: 'Great Russell St, London WC1B 3DG, United Kingdom'
  // },{
  //   firstName: 'Harry',
  //   lastName: 'Potter',
  //   district: 'London',
  //   address: '4 Privet Drive, Warner Bros. Studio Tour, Studio Tour Dr, Leavesden, Watford WD25 7LR, United Kingdom '
  // }];
  
  const productFakeApi: Product[] = [{
    farmerFirstName: 'Tom',
    farmerLastName:'Cruise',
    productName: 'Flaming Heart Hot & Spicy Cheddar',
    productWeight: 40,
    productWeightUnit: 'g',
    productImage: './productImageExample.jpg',
    productUnitPrice: 8, 
    productUnitPriceUnit: 'Pound',
    productDescription: 'Too hot to forget',
    expiryDate: '2025-10-20'
  },{
    farmerFirstName: 'Harry',
    farmerLastName:'Potter',
    productName: 'Bitter Cheddar',
    productWeight: 100,
    productWeightUnit: 'g',
    productImage:'./productImageExample.jpg',
    productUnitPrice: 18, 
    productUnitPriceUnit: 'Pound',
    productDescription: 'You cannot miss it ',
    expiryDate: '2025-10-29'
  }];

  // const [farmer, setFarmer] =  useState<Farmer[] | null>(null);
  const [product, setProduct] = useState<Product[] | null>(null);

  useEffect(()=>{
    // setFarmer(farmerFakeApi)
    setProduct(productFakeApi)
  },[])

  


  return (<>

     <div className='container-prooduct-list'>
      {product?.map((product, index) => {
          const {productName,productImage,productUnitPrice,productUnitPriceUnit}=product;
          return (
            <div key={index} className='container-product-card'  data-testid='container-product-card'>
              <div>
              <img className="product-image" src={productImage} alt={productName}/>
              </div>
              <div>
              <h2>{productName}</h2>
              <p>Price: {productUnitPrice} {productUnitPriceUnit}</p>
              <p>To be discussed: how to link farmer - product location</p>
              </div>
   
          </div>
          )
        }  
      )}
    </div>
  </>)
  


}

export default Product