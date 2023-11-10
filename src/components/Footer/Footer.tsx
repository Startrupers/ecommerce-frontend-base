import { ReactElement } from "react";
import "./Footer.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";


export const Footer = (): ReactElement => {
  return (
    <Box className="footer-container">
      <Link href="/"className="footer-logo">Candleaf®</Link>

      <Box className="features">
      <Link href="/about" className="header">Discovery</Link>
        <ul>
          <li>New season</li>
          <li>Most searched</li>
          <li>Most selled</li>
        </ul>

        <Link href="/about" className="header">Info</Link>
        <ul>
          <li>Contact us</li>
          <li>Privacy policies</li>
          <li>Terms & conditions</li>
        </ul>

        <Link href="/about" className="header">About</Link>
        <ul>
          <li>Help</li>
          <li>Shipping</li>
          <li>Affiliate</li>
        </ul>
      </Box>
    </Box>
  );
};
