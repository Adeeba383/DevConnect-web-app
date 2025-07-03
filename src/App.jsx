import { Outlet } from "react-router-dom"; 
import Navbar from "./Navbar"

function App() {
 
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
     <Navbar/>
     <Outlet />
    </div>
  )
}

export default App
