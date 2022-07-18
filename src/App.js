import "./assets/styles/global.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
