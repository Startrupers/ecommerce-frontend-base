import "./page.css";
import { Box } from "@mui/material";
import Link from "next/link";

function CartPage() {
  return (
    <div>
        <Box>
            <h1 className="title">Your cart items</h1>

            <Link  href="/" className="subtitle">Back to shopping</Link>
        </Box>

       
    </div>
  )
}

export default CartPage