import React from "react";
import { useCounter } from "./CounterContextProvider";
const ContextExp: React.FC<null> = () => {
  const context = useCounter();
  console.log(context);
  return (
    <h1 onClick={(e) => context?.setCount(context?.value + 1)}>
      {context?.value}
    </h1>
  );
};

export default ContextExp;
