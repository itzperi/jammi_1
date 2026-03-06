import React from 'react';
import { MOCK_PRODUCTS } from '../../../../constants';
import { notFound } from 'next/navigation';
import ProductTemplate from './ProductTemplate';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found - Jammi Pharmaceuticals',
    };
  }

  return {
    title: `${product.name} - Jammi Pharmaceuticals`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductTemplate product={product} />;
}
