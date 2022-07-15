import React, { useEffect, useState } from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://nextjs-avocado.vercel.app/api/avo");
  const { data }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList: data,
    },
  };
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setProductList] = useState<TProduct[]>([]);

  // useEffect(() => {//client
  //   window
  //     .fetch("/api/avo")
  //     .then((response) => response.json())
  //     .then(({ data, length }) => setProductList(data));
  // }, []);

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
