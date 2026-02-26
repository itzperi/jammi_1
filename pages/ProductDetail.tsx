import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import ProductTemplate from '../components/ProductTemplate';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">inventory_2</span>
        <h2 className="text-2xl font-serif text-slate-800">Product not found</h2>
        <p className="text-slate-500 mt-2">We couldn't find the heritage remedy you're looking for.</p>
      </div>
    );
  }

  return <ProductTemplate product={product} />;
};

export default ProductDetail;
