import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Router from './router/Router';


axios.defaults.baseURL = 'http://localhost:5000';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="max-w-full">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
