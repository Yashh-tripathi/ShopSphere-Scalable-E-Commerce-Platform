import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/appRoutes';
import {Toaster} from "react-hot-toast";

function App() {

  return (
    <>
    <BrowserRouter>
      <AppRoutes/>
      <Toaster position="bottom-left" />
    </BrowserRouter>
    </>
  );
}

export default App
