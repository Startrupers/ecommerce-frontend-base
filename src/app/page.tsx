import "./page.css";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { Popular, Products } from "@/components";

export default function Home() {
  return (
    <main className="home">
      <Box className="img-card">
        <Box className="card">
          <Typography className="title">E-commerce</Typography>
          <Typography className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            maxime totam quidem perferendis rem debitis nostrum culpa quia
            temporibus accusamus tenetur nulla, nisi, qui cupiditate vero magnam
            amet non at.
          </Typography>
        </Box>
      </Box>

      <Box className="home-products-section">
        <Typography className="title-products">Products</Typography>
        <Typography className="text-products">
          Order it for you or for your beloved ones
        </Typography>
        <Products />
      </Box>

      <Box className="products-detail-section">
        <div className="content-detail-section">
          <div>
            <Typography className="title-products-detail">
              Clean and <br />
              fragrant soy wax
            </Typography>
            <Typography className="text-products-detail">
              Order it for you or for your beloved ones
            </Typography>

            <p className="p-products-detail">
              ◎ Eco-sustainable:All recyclable materials, 0% CO2 emissions
            </p>
            <p className="p-products-detail">
              ◎ Hyphoallergenic: 100% natural, human friendly ingredients
            </p>
            <p className="p-products-detail">
              ◎ Handmade: All candles are craftly made with love.
            </p>
            <p className="p-products-detail">
              ◎ Long burning: No more waste. Created for last long.
            </p>
            <Button className="btn-products-detail">Learn more</Button>
          </div>

          <Image
            className="img-products-detail"
            src="/images/ecommerce-transd.jpg"
            alt="Descripción de la imagen"
            width={500}
            height={450}
          />
        </div>
      </Box>

      <Box className="testimonials-section">
        <div>
          <Typography className="title-testimonials">Testimonials</Typography>
          <Typography className="text-testimonials">
            Some quotes from our happy customers
          </Typography>
        </div>

        <div className="row">
          <div className="col">
            <div className="testimonials-card">
              <Image
                className="testimonial-img"
                src="/images/img1.jpeg"
                alt="Descripción de la imagen"
                width={90}
                height={90}
              />

              <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
              <Typography className="testimonial">
                “I love it! No more air fresheners”
              </Typography>
              <Typography className="autor">Luisa</Typography>
            </div>
          </div>

          <div className="col">
            <div className="testimonials-card">
              <Image
                className="testimonial-img"
                src="/images/img2.png"
                alt="Descripción de la imagen"
                width={90}
                height={90}
              />

              <div className="stars">⭐️⭐️⭐️⭐️</div>
              <Typography className="testimonial">
                “Looks very natural, the smell is awesome”
              </Typography>
              <Typography className="autor">Norberto</Typography>
            </div>
          </div>

          <div className="col">
            <div className="testimonials-card">
              <Image
                className="testimonial-img"
                src="/images/img3.png"
                alt="Descripción de la imagen"
                width={90}
                height={90}
              />

              <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
              <Typography className="testimonial">
                “Raccomended for everyone”
              </Typography>
              <Typography className="autor">Mart</Typography>
            </div>
          </div>
        </div>
      </Box>

      <Box className="popular-section">
        <div>
          <Typography className="title-testimonials">Popular</Typography>
          <Typography className="text-testimonials">
            Our top selling product that you may like
          </Typography>
        </div>
        <Popular />
      </Box>
    </main>
  );
}
