import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  //   const id = router.query.id;
  return <div>ProductItemId es: {id} </div>;
};

export default ProductItem;
