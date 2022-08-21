import {useRoutes, Navigate} from "react-router-dom"
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ClientsManagePage from "./Pages/Clients/ClientsManagePage";
import ClientsAddPage from "./Pages/Clients/ClientsAddPage";
import EmployeeManagePage from "./Pages/Employees/EmployeeManagePage";
import EmployeeAddPage from "./Pages/Employees/EmployeeAddPage";
import ProjectsManagePage from "./Pages/Projects/ProjectsManagePage";
import ProjectsAddPage from "./Pages/Projects/ProjectsAddPage";
import DepartmentManagePage from "./Pages/Department/DepartmentManagePage";
import DepartmentAddPage from "./Pages/Department/DepartmentAddPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import AttendanceReportPage from "./Pages/ReportPage/AttendanceReportPage";
import LeaveReportPage from "./Pages/ReportPage/LeaveReportPage";
import EmployeeReportPage from "./Pages/ReportPage/EmployeeReportPage";
import ProjectWiseAttendance from "./Pages/ReportPage/ProjectWiseAttendance";
import DailyAttendanceReport from "./Pages/ReportPage/DailyAttendanceReport";

const Router = () => {
    return(
        useRoutes([
            {
                path: "/", element: <Navigate to="dashboard"/>
            },
            {
                path: "/dashboard",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/dashboard/home"}/> },
                    {path: "home", element: <HomePage/>},
                ]
            },
            {
                path: "/clients",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/clients/manage"}/> },
                    {path: "manage", element: <ClientsManagePage/>},
                    {path: "add", element: <ClientsAddPage/>},
                ]
            },
            {
                path: "/employees",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/employees/manage"}/> },
                    {path: "manage", element: <EmployeeManagePage/>},
                    {path: "add", element: <EmployeeAddPage/>},
                ]
            },
            {
                path: "/projects",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/employees/manage"}/> },
                    {path: "manage", element: <ProjectsManagePage/>},
                    {path: "add", element: <ProjectsAddPage/>},
                ]
            },
            {
                path: "/department",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/employees/manage"}/> },
                    {path: "manage", element: <DepartmentManagePage/>},
                    {path: "add", element: <DepartmentAddPage/>},
                ]
            },
            {
                path: "/reports",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/employees/manage"}/> },
                    {path: "attendance", element: <AttendanceReportPage/>},
                    {path: "leave", element: <LeaveReportPage/>},
                    {path: "employee", element: <EmployeeReportPage/>},
                    {path: "project-wise-attendance", element: <ProjectWiseAttendance/>},
                    {path: "daily-attendance", element: <DailyAttendanceReport/>},
                ]
            },
            {
               path: "/login",
               element: <LoginPage/>
            },
            {
               path: "*",
               element: <NotFoundPage/>
            }

        ])
    )
}

export default Router;