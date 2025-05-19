import { createSignal, Show } from "solid-js";
import { createStore } from "solid-js/store";

function Input() {
  return (
    <input
      type="text"
      onInput={(event) => setData("name", event.target.value)}
    />
  );
}
export function App() {
  const [data, setData] = createStore({
    name: "",
    age: 0,
    address: { city: "", zip: "" },
  });
  const [show, setShow] = createSignal(false);
  return (
    <>
      <input
        type="text"
        onInput={(event) => setData("name", event.target.value)}
        value={data.name}
      />
      <input
        type="text"
        onInput={(event) => setData("age", event.target.value)}
        value={data.age}
      />
      <input
        type="text"
        onInput={(event) => setData("address", "city", event.target.value)}
        value={data.address.city}
      />
      <input
        type="text"
        onInput={(event) => setData("address", "zip", event.target.value)}
        value={data.address.zip}
      />
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Submit
      </button>
      <Show when={show()}>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.address.city}</p>
        <p>{data.address.zip}</p>
      </Show>
    </>
  );
}
