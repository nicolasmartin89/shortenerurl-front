import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { getApps } from "../src/utils/helper";

// Crear una instancia de QueryClient
const queryClient = new QueryClient();

function App() {
  const CurrentApp = getApps();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <CurrentApp />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
