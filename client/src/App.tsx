import { Router } from "@/router";
import { GraphqlProvider } from "@/GraphQL";
import { Provider } from "react-redux";
import { store } from "@/redux";

function App() {
  return (
    <GraphqlProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </GraphqlProvider>
  );
}

export default App;
