"use client";

import { useCallback, useEffect, useState } from "react";
import client from "@/services/client";
import Image from "next/image";

interface ProductData {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

export default function Products() {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getFakeData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.get("/products");
      setData(response);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getFakeData();
  }, [getFakeData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error ?? "Error..."}</p>;

  return (
    <section className="products">
      <ul>
        {data?.map((product: ProductData) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
