import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/appRoutes';
import {Toaster} from "react-hot-toast";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
      <Toaster position="bottom-left" />
    </BrowserRouter>
    </>
  );
}

export default App
