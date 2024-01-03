import { useRoutes, useLocation, useNavigate } from "react-router-dom"
import router from "./router"
import { useEffect } from "react"
import { message } from "antd"

function ToPage1() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo("/page1")
  }, [])

  return <div></div>
}

function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo("/login")
    message.warning("Please Login first")
  }, [])

  return <div></div>
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation()

  // to Login page and with token

  // to other pages and no token

  let token = localStorage.getItem("adminlte-token")

  if (location.pathname === "/login" && token) {

    return <ToPage1 />
  } else if (location.pathname !== "/login" && !token) {

    return <ToLogin />
  }

  return outlet
}

function App() {
  return (
    <div>
      <BeforeRouterEnter />
    </div>
  )
}

export default App
