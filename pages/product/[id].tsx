import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
      .catch((err) => console.error(err.message));
  }, []);

  return <div>ProductItemId es: {product?.name} </div>;
};

export default ProductItem;
