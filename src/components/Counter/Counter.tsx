"use client";

import "./Counter.css";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

interface CounterProps {
  initialValue?: number;
}

export const Counter = ({ initialValue = 1 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1)
    setCount(count - 1);
  };

  return (
    <div >
      <Typography variant="h5" component="span" className="quantity">
        Quantity: {count}
      </Typography>
      <Button variant="contained" onClick={handleDecrement} className="increment">
        -
      </Button>
      <Button variant="contained" onClick={handleIncrement} className="decrement">
        +
      </Button>
    </div>
  );
};
