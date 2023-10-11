"use client";

import { useCallback, useEffect, useState } from "react";
import { useApiCall } from "@/hooks";
import client from "@/services/client";
import { baseURL } from "@/services/urls";
import Image from "next/image";

interface ProductData {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

export default function Products() {
  const { data, loading, error } = useApiCall(`${baseURL}/products`);

  console.log("🚀 ~ file: page.tsx:20 ~ Products ~ data:", data)
  console.log("🚀 ~ file: page.tsx:20 ~ Products ~ loading:", loading)
  console.log("🚀 ~ file: page.tsx:20 ~ Products ~ error:", error)

  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [error, setError] = useState<string>("");

  //   const getFakeData = useCallback(async () => {
  //     setLoading(true);
  //     try {
  //       const response = await client.get(`${baseURL}/products`);
  //       setData(response);
  //       console.log("🚀 ~ products-client ~ getFakeData ~ response:", response);
  //       setLoading(false);
  //     } catch (error: any) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     getFakeData();
  //   }, [getFakeData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message ?? "Error..."}</p>;
//   if (error) return <p>{error ?? "Error..."}</p>;

  return (
    <section className="products">
      <h1>Products</h1>
      <ul>
        {(data as ProductData[])?.map((product: ProductData) => (
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
