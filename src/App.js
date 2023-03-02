import './App.css';
import Contact from './contact';
import About from './about';
import List1 from './directory/list1';
import List2 from './directory/list2';
import List3 from './directory/list3';
import Login from './backup2';
import List4 from './directory/list4';
import BackUp from './backup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { 
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <Contact />,
      children: [
        {
          path: "/list1",
          element: <List1 />
        },
        {
          path: "/list2",
          element: <List2 />
        },
        {
          path: "/list3",
          element: <List3 />
        },
        {
          path: "/list4",
          element: <List4 />
        },
        {
          path: "/backup",
          element: <BackUp />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about",
          element: <About />
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}
export default App;
