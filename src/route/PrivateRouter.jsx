import FromEmp from "../private-page/employee/FromEmp";
import ShowEmp from "../private-page/employee/ShowEmp";
import FromProject from "../private-page/project/FromProject";
import ShowProject from "../private-page/project/ShowProject";

export const PrivateRouter =[
    {
        id:"0",
        path:"/from",
        element:<FromEmp/>
    },
    {
        id:"1",
        path:"/ShowEmp",
        element:<ShowEmp/>
    },
    {
        id:"2",
        path:"/ShowProject",
        element:<ShowProject/>
    },
    {
        id:"3",
        path:"/FromProject",
        element:<FromProject/>
    },
];