import { Link, useRoutes } from "react-router-dom"
import router from "./router"

function App() {

  const outlet = useRoutes(router)
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      {outlet}
    </div>
  )
}

export default App
