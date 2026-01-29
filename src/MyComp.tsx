import React, { useState } from "react";
interface MyCompProps {
  text: string;
  onClick?: () => void;
}
interface Book {
  name: string;
  price: number;
}
interface InputValue {
  value: string;
}
const MyComp: React.FC<MyCompProps> = (props) => {
  const { text, onClick } = props;
  const [value, setValue] = useState<InputValue>("");
  const [book, setBook] = useState<Book>({ name: "Book1", price: 10 });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>
        {book.name} price is Rs. {book.price}
      </p>
      <p>{value}</p>
      <button onClick={() => setBook({ name: "Book2", price: 20 })}>
        {text}
      </button>
      <input
        value={value}
        placeholder="input some value"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MyComp;
