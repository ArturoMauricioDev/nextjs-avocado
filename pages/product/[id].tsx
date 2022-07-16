import React from "react";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
  const response = await fetch("https://nextjs-avocado.vercel.app/api/avo");
  const { data: productList }: TAPIAvoResponse = await response.json();

  const paths = productList.map(({ id }) => ({
    params: { id },
  }));
  return {
    paths,
    fallback: false, //incremental static generation, 404 for everything else.
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(
    `https://nextjs-avocado.vercel.app/api/avo/${id}`
  );
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  };
};

const ProductItem = ({ product }: { product: TProduct }) => {
  return <div>ProductItemId es: {product?.name} </div>;
};

export default ProductItem;
