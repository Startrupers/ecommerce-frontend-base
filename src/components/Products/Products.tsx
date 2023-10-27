"use client";

import { baseURL } from "@/services/urls";
import { useApiCall } from "@/hooks";
import Image from "next/image";
import "./Products.css";
import Link from "next/link";

interface ProductData {
  title: string;
  image: string;
  price: number;
}

export default function Products() {
  const { data } = useApiCall(`${baseURL}/products?limit=8`);

  return (
    <ul className="grid">
      {(data as ProductData[])?.map((product: ProductData) => (
        <Link href={`/products/${product.id}`} key={product.id}>
        <li className="card-item">
          <div>
            <Image 
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            /> 
            <h5>{product.title}</h5>
            <p style={{ color: "green" }}>{"$" + product.price}</p>
          </div>
        </li>
        </Link>
      ))}
    </ul>
  );
}
