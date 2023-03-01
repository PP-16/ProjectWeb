import ShowEmp from "../private-page/employee/ShowEmp";
import FormProject from "../private-page/project/FromProject";
import ShowProject from "../private-page/project/ShowProject";
import ShowCertificate from "../private-page/certificate/ShowCertificate";


export const PrivateRouter =[
    {
        id:"0",
        path:"/",
        element:<ShowProject/>
    },
    {
        id:"1",
        path:"/ShowEmp",    
        element:<ShowEmp/>
    },
    {
        id:"2",
        path:"/Project/ShowProject",
        element:<ShowProject/>
    },
    {
        id:"3",
        path:"/Project/create",
        element:<FormProject/>
    },
    {
        id:"4",
        path:"/certificate/showCertificate",
        element:<ShowCertificate/>
    },
];