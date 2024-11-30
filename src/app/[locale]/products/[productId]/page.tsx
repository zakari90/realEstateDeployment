import { useTranslations } from 'next-intl';
import React from 'react';
import ProductsDetails from './productDetails';
import NotFound from '@/app/not-found';
import AllProductPage from '../allProductPage';

interface Product {
  id: number;
  name: string;
  description: string;
  pictures: string[];
}

function ProductsDetailsPage({ params: { productId, locale } }: { params: { productId: string, locale: string } }) {
  const productsSection = useTranslations('productsSection');
  const title = productsSection("title")
  const products: Product[] = productsSection.raw('productsList');

  const product = products.find((product) => product.id.toString() === productId);


  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      {/* <h1>{product.name}</h1> */}
      <ProductsDetails product={product} />
      <AllProductPage title={productsSection("title")} locale= {locale} products={productsSection.raw('productsList')}/>
    </>
  );
}

export default ProductsDetailsPage;
