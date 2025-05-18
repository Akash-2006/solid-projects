import { createSignal } from "solid-js";

export function App() {
  const [userName, setUserName] = createSignal("");
  const [password, setPassword] = createSignal("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (userName().length < 4) {
          alert("username must be longer 4 characters");
        } else if (password().length < 6) {
          alert("password must be longer 6 characters");
        } else {
          alert("login succesfully");
          setUserName("");
          setPassword("");
        }
      }}
    >
      <input
        type="text"
        value={userName()}
        onInput={(event) => setUserName(event.target.value)}
      />
      <input
        type="text"
        value={password()}
        onInput={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
