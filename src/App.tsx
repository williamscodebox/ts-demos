import "./App.css";
import FetchTodo from "./components/FetchTodo";
import Form from "./components/Form";

function App() {
  return (
    <div className="text-2xl">
      App with style from tailwinds css
      <FetchTodo />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
