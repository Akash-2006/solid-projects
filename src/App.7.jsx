import { createSignal, Switch, Match } from "solid-js";

export function App() {
  const [role, setRole] = createSignal("select a role");
  return (
    <>
      <select
        value={role()}
        onInput={(event) => {
          setRole(event.target.value);
        }}
      >
        <option value="admin">admin</option>
        <option value="guest">guest</option>
        <option value="stranger">stranger</option>
      </select>
      <Switch>
        <Match when={role() === "admin"}>
          <p>Welcome Admin!</p>
        </Match>
        <Match when={role() === "guest"}>
          <p>Welcome guest!</p>
        </Match>
        <Match when={role() === "stranger"}>
          <p>Welcome Stranger!</p>
        </Match>
        <Match when={true}>
          <p>Please select a role.</p>
        </Match>
      </Switch>
    </>
  );
}
