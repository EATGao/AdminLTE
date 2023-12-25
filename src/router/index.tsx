import Home from "@/views/Home"
import { Navigate } from "react-router-dom"
import React, { lazy } from "react"

const About = lazy(()=>import("@/views/About"))

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
    element: <React.Suspense fallback={<div>Loading</div>}>
			<About />
		</React.Suspense>
	},
]

export default routes