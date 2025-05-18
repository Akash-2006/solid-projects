import { createSignal, For } from "solid-js";

export function App() {
  const [list, setList] = createSignal(["Buy milk", "Write code", "Read book"]);
  return (
    <For each={list()}>
      {(listIteam, index) => (
        <p>
          {index() + 1} {listIteam}
        </p>
      )}
    </For>
  );
}
