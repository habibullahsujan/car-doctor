import { RouterProvider } from "react-router-dom";
import "./App.css";
import UserContext from "./Context/UserContext";
import { route } from "./Routes/Route";

function App() {
  return (
    <div>
      <UserContext>
        <RouterProvider router={route} />
      </UserContext>
    </div>
  );
}

export default App;
