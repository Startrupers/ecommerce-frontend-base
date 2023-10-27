import client from "@/services/client";

import Image from "next/image";

const Products = async () => {
  const data = await client.get("/products");
  console.log("🚀 ~ products-server ~ Products ~ data:", data);

  return (
    <section className="products">
      <h1>Products</h1>
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>
            <h2>{product.id + '.- ' + product.title}</h2>
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
};

export default Products;
