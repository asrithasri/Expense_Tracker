import Home from "./pages/Home/Home.jsx";
import {SnackbarProvider} from 'notistack';

function App() {

  return (
    <SnackbarProvider>
    <div>
      <Home />
    </div>
    </SnackbarProvider>
  );
}

export default App;
