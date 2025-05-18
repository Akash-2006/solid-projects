import { createSignal, Show } from "solid-js";

export function App() {
  const [isLogged, changeLogged] = createSignal(false);
  return (
    <>
      <button
        onClick={() => {
          changeLogged(!isLogged());
        }}
      >
        toggle login
      </button>
      <Show when={isLogged()} fallback={<p>Please Login</p>}>
        <p>welcome</p>
      </Show>
    </>
  );
}
