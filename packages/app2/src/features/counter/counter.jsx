import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
