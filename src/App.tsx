import "./App.css";
import FetchTodo from "./components/FetchTodo";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Sidebar />
      </div>
      <div className="text-2xl ml-25">
        App with style from tailwinds css
        <FetchTodo />
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
