import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import { appRouter } from "./Routes/routes";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="grid grid-flow-col grid-cols-12">
          <Panel />
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
