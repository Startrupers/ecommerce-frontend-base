import Image from "next/image";
import "./page.css";
import client from "@/services/client";
import { Box, Typography, Button } from "@mui/material";
import { Counter } from "@/components";

async function getProducts(id: string) {
  const product = await client.get(`/products/${id}`);
  return product;
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProducts(params.id);

  return (
    <Box className="container">
      <div className="product-card-detail">
        <Image
          className="img-card-detail"
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>

      <Box>
        <Typography className="title-card-detail">{product.title}</Typography>
        <Typography className="price-card-detail">
          {"$" + product.price}
        </Typography>
        <Counter />
      </Box>

      <Box className="description">
        <Typography>
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </Typography>
        <Typography className="shipping">🍕 FREE SHIPPING</Typography>
      </Box>

      <Button className="button-add-cart">🛒 +Add to cart</Button>

      <Box className="container-specification">
        <Typography className="specification">{product.description}</Typography>
      </Box>
    </Box>
  );
}

export default ProductPage;
