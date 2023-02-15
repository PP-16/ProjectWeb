import Home from "../pages/Home"
import About from "../pages/About"
import Clients from "../pages/Clients"
import Contact from "../pages/Contact"
import ContactTest from "../pages/ContactTest"
import Faq from "../pages/Faq"
import Portfolio from "../pages/Portfolio"
import Services from "../pages/Services"
import Team from "../pages/Team"



export const PublicRoute = [
    {
        id:"0",
        path:"/",
        element:<Home/>
    },
    {
        id:"1",
        path:"/home",
        element:<Home/>
    },
    {
        id:"2",
        path:"/about",
        element:<About/>
    },
    {
        id:"3",
        path:"/clients",
        element:<Clients/>
    },
    {
        id:"4",
        path:"/contact",
        element:<Contact/>
    },
    {
        id:"5",
        path:"/contactTest",
        element:<ContactTest/>
    },
    {
        id:"6",
        path:"/faq",
        element:<Faq/>
    },
    {
        id:"7",
        path:"/portfolio",
        element:<Portfolio/>
    },
    {
        id:"8",
        path:"/services",
        element:<Services/>
    },
    {
        id:"9",
        path:"/team",
        element:<Team/>
    },
];

