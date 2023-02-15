import Project from "../private-page/project/Project"
import FromEmp from "../private-page/employee/FromEmp";
import ShowEmp from "../private-page/employee/ShowEmp";

export const PrivateRouter =[
    {
        id:"0",
        path:"/",
        element:<Project/>
    },
    {
        id:"1",
        path:"/from",
        element:<FromEmp/>
    },
    {
        id:"2",
        path:"/ShowEmp",
        element:<ShowEmp/>
    },
];