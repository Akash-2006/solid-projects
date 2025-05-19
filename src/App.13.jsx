import { createMemo } from "solid-js";
import { createStore } from "solid-js/store";

export function App() {
  const [userName, setUserName] = createStore({
    firstName: "",
    lastName: "",
    email: "",
  });
  const fullName = createMemo(() => {
    return `${userName.firstName}  ${userName.lastName}`;
  });
  return (
    <>
      <input
        type="text"
        onInput={(event) => setUserName("firstName", event.target.value)}
        value={userName.firstName}
      />
      <input
        type="text"
        onInput={(event) => setUserName("lastName", event.target.value)}
        value={userName.lastName}
      />
      <input
        type="email"
        onInput={(event) => setUserName("email", event.target.value)}
        value={userName.email}
      />
      <p>{fullName()}</p>
    </>
  );
}
