import { createSignal, createEffect } from "solid-js";

function Input({ onChangeEvent }) {
  return (
    <input
      type="text"
      onInput={(event) => {
        onChangeEvent(event.target.value.length);
      }}
    />
  );
}
export function App() {
  const [letters, incLetters] = createSignal(0);

  function incrementLetters(count) {
    incLetters(count);
  }

  createEffect(() => {
    console.log("no of letters entered is", letters());
  });
  return (
    <>
      <Input onChangeEvent={incrementLetters} />
      <p>{letters()}</p>
    </>
  );
}
