import Header from './Header' 
import{ Outlet } from 'react-router'

function RouteLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-screen mx-20 p-20 border-blue-300">
        <Outlet />
      </div>
    </div>
  )
}

export default RouteLayout
