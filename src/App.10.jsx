import { createSignal, onMount, createEffect, Show } from "solid-js";

export function App() {
  let user;
  const [userName, setUserName] = createSignal("");
  const [show, setShow] = createSignal(false);

  onMount(() => {
    user.focus();
  });

  // Clear the input when show becomes true
  createEffect(() => {
    if (show()) {
      setUserName("");
    }
  });

  return (
    <>
      <input
        type="text"
        value={userName()}
        onInput={(event) => setUserName(event.target.value)}
        ref={user}
      />
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Login
      </button>
      <Show when={show()}>
        <h1>Hello, {userName()}!</h1>
      </Show>
    </>
  );
}
