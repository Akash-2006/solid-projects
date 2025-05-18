import { createSignal } from "solid-js";

export function App() {
  const [bio, setBio] = createSignal("");
  return (
    <>
      <textarea
        value={bio()}
        onInput={(event) => setBio(event.target.value)}
      ></textarea>
      <p>{bio()}</p>
    </>
  );
}
