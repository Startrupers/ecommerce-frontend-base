"use client";

import "./Popular.css";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/services/client";
import { PRODUCTS } from "@/services/routes";
import routes from "@/config/routes";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

export const Popular = (): ReactElement => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.get(`${PRODUCTS}?limit=4`);
      setData(response);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>{error ?? "Error..."}</p>;

  return (
    <section className="products-list__container">
      {data?.map(({ id, title, image, price }: Product) => (
        <Link className="product-card" href={routes.productDetail(id)} key={id}>
          <Image src={image} alt={title} width={100} height={100} />
          <h5 className="product-title">{title}</h5>
          <p className="product-price">${price}</p>
        </Link>
      ))}
    </section>
  );
};
