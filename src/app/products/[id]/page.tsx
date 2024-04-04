import "./page.css";
import Image from "next/image";
import client from "@/services/client";
import { Box, Typography } from "@mui/material";
import { Counter, AddToCartButton } from "@/components";
import { PRODUCTS } from "@/services/routes";

interface ProductPageProps {
  params: {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = await client.get(`${PRODUCTS}/${id}`);

  return (
    <div className="container-detail">
      <section>
        <Image
          className="product-img-detail"
          key={id}
          src={product.image}
          alt={product.title}
          width={90}
          height={90}
        />

        <Box className="quote">
          <Typography>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </Typography>
          <Typography className="shipping">🍕 FREE SHIPPING</Typography>
        </Box>
      </section>

      <section>
        <Box>
          <Typography className="title-detail">{product.title}</Typography>
          <Typography className="price-detail">${product.price}</Typography>

          <Counter />

          <section className="container-button-add-cart">
            <AddToCartButton product={product} />
          </section>

          <Box>
            <Typography className="detail">{product.description}</Typography>
          </Box>
        </Box>
      </section>
    </div>
  );
}

export default ProductPage;
