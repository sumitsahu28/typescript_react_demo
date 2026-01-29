import React, { createContext, useContext, useState } from "react";

interface CounterProviderValue {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

export const useCounter = () => {
  return useContext(CounterContext);
};
export const CounterProvider: React.FC<CounterProviderValue> = (props) => {
  const [count, setCount] = useState<number>(1);
  return (
    <CounterContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
