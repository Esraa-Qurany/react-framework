import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './component/Home/Home'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio.jsx'
import Contact from './component/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js'



const routing = [
    { path:"/",
      element:<Layout /> ,
      children:[
        { path:"/",element: <Home /> },
        { path:"home",element: <Home /> },
        { path:"about",element: <About /> },
        { path:"portfolio",element: <Portfolio/> },
        { path:"contact",element: <Contact /> }
    ]}
]

const route = createBrowserRouter(routing)
createRoot(document.getElementById('root')).render(
    <RouterProvider   router={route}>
        <App />
    </RouterProvider>
    

)
