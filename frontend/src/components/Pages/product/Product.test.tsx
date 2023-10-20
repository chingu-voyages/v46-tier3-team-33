import { render, screen } from '@testing-library/react';
import Product from './Product'; 
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

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

const productFakeApi: Product[] = [{
  farmerFirstName: 'Tom',
  farmerLastName:'Cruise',
  productName: 'Cheese',
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


describe('<Product />', () => {

  it('renders Product', () => {
    render(<Product />);
  });

  it('renders correct number of product cards', () => {
    const { container } = render(<Product />);
    const productCards = container.querySelectorAll('container-product-card');
    expect(productCards.length).toBe(productFakeApi.length);
  });

  it('renders product name', () => {
    const productNameElement = screen.getByText(productFakeApi[0].productName);
    expect(productNameElement).toBeInTheDocument();
  });

});
