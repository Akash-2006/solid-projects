import { createSignal, createMemo } from "solid-js";

export function App() {
  const [quantity, incQuantity] = createSignal(0);
  const rate = createMemo(() => {
    return quantity() * 100;
  });
  function inc() {
    incQuantity(quantity() + 1);
  }
  function dec() {
    if (quantity() < 1) {
      return "";
    }
    incQuantity(quantity() - 1);
  }
  return (
    <div className="menu">
      <button onClick={inc}>+</button>
      <span>{quantity()}</span>
      <button onClick={dec}>-</button>
      <p>{rate()}</p>
    </div>
  );
}
