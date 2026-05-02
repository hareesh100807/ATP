import{createBrowserRouter, RouterProvider} from 'react-router'
import RouteLayout from './components/RouteLayout'
import Home from './components/Home'
import CreateEmp from './components/CreateEmp'
import ListOfEmps from './components/ListOfEmps'
import Header from './components/Header'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'
function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RouteLayout />,
      children:[
        {path:"", element:<Home/>},
        {path:"create-emp", element:<CreateEmp />},
        {path:"list", element:<ListOfEmps />},
        {path:"employee", element:<Employee />},
        {path:"edit-emp",element:<EditEmployee />}
      ],
    },
  ]);

  return (
    <div>
      
      <RouterProvider router={routerObj}/>
    </div>
  )
};

export default App
