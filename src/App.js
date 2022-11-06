import { RouterProvider } from "react-router-dom";
import "./App.css";
import UserContext from "./Context/UserContext";
import { route } from "./Routes/Route";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <UserContext>
        <RouterProvider router={route} />
      </UserContext>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>
    </div>
  );
}

export default App;
