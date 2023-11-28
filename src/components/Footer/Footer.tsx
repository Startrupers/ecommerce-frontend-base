import { ReactElement } from "react";
import "./Footer.css";
import { Box } from "@mui/material";
import Link from "next/link";

export const Footer = (): ReactElement => {
  return (
    <div className="footer-container">
      
      <Box className="footer-logo">
      <Link href="/" >
        Candleaf®
      </Link>
      </Box>

      <section className="features">
      <Box >
          <Link href="/about" className="header">
            Discovery
          </Link>
          <ul>
            <li>New season</li>
            <li>Most searched</li>
            <li>Most selled</li>
          </ul>
        </Box>

        <Box >
          <Link href="/about" className="header">
            Info
          </Link>
          <ul>
            <li>Contact us</li>
            <li>Privacy policies</li>
            <li>Terms & conditions</li>
          </ul>
        </Box>

        <Box >
          <Link href="/about" className="header">
            About
          </Link>
          <ul>
            <li>Help</li>
            <li>Shipping</li>
            <li>Affiliate</li>
          </ul>
        </Box>
     
      </section>
      
    </div>
  );
};
