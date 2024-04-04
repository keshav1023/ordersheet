import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Order from './components/getorder/Order.jsx';
import Add from './components/addorder/Add.jsx';
import Edit from './components/updateorder/Edit.jsx';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Order/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
