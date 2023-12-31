// import Router from "./router";
import Router from "./router/lazy";
import store from "./stores";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
