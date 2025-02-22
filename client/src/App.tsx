import { Router } from "@/router";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <Toaster />
    </Provider>
  );
}

export default App;
