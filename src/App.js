import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="grid grid-flow-col grid-cols-12">
          <Panel />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
