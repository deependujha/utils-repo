"use client";
import { createContext, useState } from "react";

interface CounterInterface {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterInterface>({
  counter: 0,
  setCounter: () => {},
});

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
