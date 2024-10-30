import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-main">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
