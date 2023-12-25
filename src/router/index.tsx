import Home from "@/views/Home"
import { Navigate } from "react-router-dom"
import React, { lazy } from "react"

const About = lazy(()=>import("@/views/About"))

const withLoadingComponent = (comp: JSX.Element) => (
	<React.Suspense fallback={<div>Loading</div>}>
		{comp}
	</React.Suspense>
)

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
	},
	{
    path: "/home",
    element: <Home />
	},
	{
    path: "/about",
    element: withLoadingComponent(<About/>)
	},
]

export default routes