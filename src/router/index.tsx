import Home from "@/views/Home"
import { Navigate } from "react-router-dom"
import React, { lazy } from "react"

import Login from "@/views/Login/Login"
const About = lazy(()=>import("@/views/About"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))
const Files = lazy(()=>import("@/views/Files"))
const Page301 = lazy(()=>import("@/views/Page3/Page301"))
const Page302 = lazy(()=>import("@/views/Page3/Page302"))
const Page303 = lazy(()=>import("@/views/Page3/Page303"))
const Page401 = lazy(()=>import("@/views/Page4/Page401"))
const Page402 = lazy(()=>import("@/views/Page4/Page402"))

const withLoadingComponent = (comp: JSX.Element) => (
	<React.Suspense fallback={<div>Loading</div>}>
		{comp}
	</React.Suspense>
)

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />
  },
  {
	path: "/",
	element: <Home />,
	children: [
		{
			path: "/page1",
			element: withLoadingComponent(<Page1/>)
		},
		{
			path: "/page2",
			element: withLoadingComponent(<Page2/>)
		},
		{
			path: "/page3/page301",
			element: withLoadingComponent(<Page301/>)
		},
		{
			path: "/page3/page302",
			element: withLoadingComponent(<Page302/>)
		},
		{
			path: "/page3/page303",
			element: withLoadingComponent(<Page303/>)
		},
		{
			path: "/page4/page401",
			element: withLoadingComponent(<Page401/>)
		},
		{
			path: "/page4/page402",
			element: withLoadingComponent(<Page402/>)
		},
		{
			path: "/files",
			element: withLoadingComponent(<Files/>)
		},
		{
			path: "/about",
			element: withLoadingComponent(<About/>)
		},
	]
  },
  {
	path: "/login",
	element: <Login />
  },
  {
	path: "*",
	element: <Navigate to="/page1" />
  }
]

export default routes