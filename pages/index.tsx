import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <p>Home</p>
      {productList.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <a>
            <div>{product.name}</div>
            <img src={product.image} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Home;
