"use client";

// import "./Counter.css";
// import React, { useState } from "react";
// import { Button, Typography } from "@mui/material";

// interface CounterProps {
//   initialValue?: number;
// }

// export const Counter = ({ initialValue = 1 }: CounterProps) => {
//   const [count, setCount] = useState(initialValue);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 1)
//     setCount(count - 1);
//   };

import {useDispatch, useSelector} from 'react-redux'; 
import rootReducer from '@/store/rootReducer';
import { increment, decrement } from '@/store/slices/counterSlice';
import "./Counter.css";
import { Button, Typography } from "@mui/material";


export const Counter = () => {
  const count = useSelector((state: ReturnType<typeof rootReducer>) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div >
      <Typography variant="h5" component="span" className="quantity">
        Quantity: {count}
      </Typography>
      <Button variant="contained" onClick={() => dispatch(decrement())} className="decrement">
        -
      </Button>
      <Button variant="contained" onClick={() => dispatch(increment())} className="increment">
        +
      </Button>
    </div>
  );
};

