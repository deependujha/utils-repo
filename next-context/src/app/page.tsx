"use client";
import React, { useContext } from "react";
import { CounterContext } from "@/context/Counter";
const MyPage = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const increase = () => {
    setCounter((cnt) => cnt + 1);
  };
  const decrease = () => {
    setCounter((cnt) => cnt - 1);
  };

  return (
    <div>
      <h1>My Page</h1>
      <div>Counter: {counter}</div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={increase}
      >
        increase
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={decrease}
      >
        decrease
      </button>
    </div>
  );
};

export default MyPage;
