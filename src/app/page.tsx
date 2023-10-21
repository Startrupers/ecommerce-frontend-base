import "./page.css";
import { Box, Typography } from "@mui/material";
import Products from "./products-server/page";

export default function Home() {
  return (
    <>
      <main className="home">
        <Box className="img-card">
          <Box className="card">
            <Typography className="title">E-commerce</Typography>
            <Typography className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur maxime totam quidem perferendis rem debitis nostrum
              culpa quia temporibus accusamus tenetur nulla, nisi, qui
              cupiditate vero magnam amet non at.
            </Typography>
          </Box>
        </Box>
      </main>
      <Products />
    </>
  );
}
