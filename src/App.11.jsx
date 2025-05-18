import { createSignal, Show } from "solid-js";
import { createStore } from "solid-js/store";

function Input({ value, setValue }) {
  return (
    <input
      type="text"
      onInput={(event) => setValue(event.target.value)}
      value={value}
    />
  );
}
export function App() {
  const [userName, setUserName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [age, setAge] = createSignal(0);
  const [login, setLogin] = createSignal(false);
  const [details, setDetails] = createStore({});
  return (
    <>
      <Input value={userName()} setValue={setUserName} />
      <Input value={email()} setValue={setEmail} />
      <Input value={age()} setValue={setAge} />
      <button
        onClick={() => {
          setDetails({ userName: userName(), email: email(), age: age() });
          setAge(0);
          setUserName("");
          setEmail("");
          setLogin(true);
        }}
      >
        submit
      </button>
      <Show when={login()}>
        <button
          onClick={() => {
            setDetails("userName", "");
            setDetails("email", "");
            setDetails("age", 0);
          }}
        >
          Reset
        </button>
        <p>{details.userName}</p>
        <p>{details.email}</p>
        <p>{details.age}</p>
      </Show>
    </>
  );
}
