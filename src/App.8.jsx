import { createSignal, For } from "solid-js";

function Task({ task, index, removeTask }) {
  console.log(task);
  return (
    <div key={index}>
      <span>{task}</span>
      <button onClick={() => removeTask(index)}>delete</button>
    </div>
  );
}
function Input({ onSubmit }) {
  const [data, setData] = createSignal("");

  return (
    <>
      <input
        type="text"
        onInput={(event) => setData(event.target.value)}
        value={data()}
      />
      <button
        onClick={() => {
          onSubmit(data());
          setData("");
        }}
      >
        Add Task
      </button>
    </>
  );
}
export function App() {
  const [list, setList] = createSignal([
    { id: 1, name: "bro" },
    { id: 2, name: "go" },
    { id: 3, name: "and" },
    { id: 4, name: "eat" },
  ]);
  const [id, setId] = createSignal(5);
  function removeTask(id) {
    setList((prev) => prev.filter((task, i) => task.id !== id));
  }

  function addTask(name) {
    const newTask = { id: id(), name };
    setId(id() + 1);
    setList((prev) => [...prev, newTask]);
  }
  return (
    <>
      <Input onSubmit={addTask} />
      <For each={list()}>
        {(task) => (
          <Task task={task.name} index={task.id} removeTask={removeTask} />
        )}
      </For>
    </>
  );
}
