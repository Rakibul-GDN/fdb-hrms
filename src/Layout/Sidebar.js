import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {FaUserTie, FaBuilding, FaChartPie} from "react-icons/fa";
import {AiFillProject} from "react-icons/ai";
import {ImTree} from "react-icons/im";
import {MdExpandLess, MdExpandMore, MdDashboard} from "react-icons/md";
import {Collapse} from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import {useEffect, useState} from "react";
import SidebarMenu from "./SidebarMenu";
import useWindowDimensions from "../hooks/useWindowDimensions";
import {useLocation} from "react-router-dom";
import clients from "../_mockData/clients";


const Sidebar = ({open, onClose}) => {
    const location = useLocation()
    const [submenuControl, setSubmenuControl] = useState({
        clients: false,
        employees: false,
        projects: false,
        department: false,
        report: false,
    })

    const [drawerWidth, setDrawerWidth] = useState(240)

    const handleClick = (key) => {
        let newValue = {...submenuControl}
        Object.keys(newValue).forEach(keyItem => {
            newValue[keyItem] = false;
        });
        newValue[key] = !newValue[key]
        setSubmenuControl(newValue)
    }

    const {  width } = useWindowDimensions();

    useEffect(() => {
        if(width > 960) {
            setDrawerWidth(240)
        } else {
            setDrawerWidth(340)
        }
    }, [width])

    useEffect(() => {
        if(location.pathname.includes("clients")){
            let newValue = {...submenuControl}
            newValue.clients = !newValue.clients
            setSubmenuControl(newValue)
        } else if(location.pathname.includes("employees")){
            let newValue = {...submenuControl}
            newValue.employees = !newValue.employees
            setSubmenuControl(newValue)
        } else if(location.pathname.includes("projects")){
            let newValue = {...submenuControl}
            newValue.projects = !newValue.projects
            setSubmenuControl(newValue)
        } else if(location.pathname.includes("department")){
            let newValue = {...submenuControl}
            newValue.department = !newValue.department
            setSubmenuControl(newValue)
        } else if(location.pathname.includes("report")){
            let newValue = {...submenuControl}
            newValue.report = !newValue.report
            setSubmenuControl(newValue)
        }
    }, [])
    const handleClose = () => {
        if(width <= 960) {
            onClose()
        }
    }
    return(
        <Drawer
            open={open}
            onClose={onClose}
            variant={width > 960 ? "persistent" : "temporary"}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box className="sidebarContainer" sx={{ overflow: 'auto', mt: 5 }}>
                <List>
                    <SidebarMenu onClose={handleClose} directory="/dashboard/home" icon={<MdDashboard size={20}/>} menuTitle={"Dashboard"} />
                    <ListItemButton onClick={() => handleClick("clients")}>
                        <ListItemIcon>
                            <FaBuilding size={20}/>
                        </ListItemIcon>
                        <ListItemText primary="Clients" />
                        {submenuControl.clients ? <MdExpandMore /> : <MdExpandLess />}
                    </ListItemButton>
                    <Collapse in={submenuControl.clients} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Clients"} directory="/clients/manage"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Add Client"} directory="/clients/add"/>
                            <Divider/>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => handleClick("employees")}>
                        <ListItemIcon>
                            <FaUserTie size={20}/>
                        </ListItemIcon>
                        <ListItemText primary="Employees" />
                        {submenuControl.employees ? <MdExpandMore /> : <MdExpandLess />}
                    </ListItemButton>
                    <Collapse in={submenuControl.employees} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Employees"} directory="/employees/manage"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Add Employees"} directory="/employees/add"/>
                            <Divider/>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => handleClick("projects")}>
                        <ListItemIcon>
                            <AiFillProject size={20}/>
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                        {submenuControl.projects ? <MdExpandMore /> : <MdExpandLess />}
                    </ListItemButton>
                    <Collapse in={submenuControl.projects} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Projects"} directory="/projects/manage"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Add Project"} directory="/projects/add"/>
                            <Divider/>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => handleClick("department")}>
                        <ListItemIcon>
                            <ImTree size={20}/>
                        </ListItemIcon>
                        <ListItemText primary="Departments" />
                        {submenuControl.department ? <MdExpandMore /> : <MdExpandLess />}
                    </ListItemButton>
                    <Collapse in={submenuControl.department} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Manage Departments"} directory="/department/manage"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Add Department"} directory="/department/add"/>
                            <Divider/>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={() => handleClick("report")}>
                        <ListItemIcon>
                            <FaChartPie size={20}/>
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                        {submenuControl.report ? <MdExpandMore /> : <MdExpandLess />}
                    </ListItemButton>
                    <Collapse in={submenuControl.report} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Attendance Report"} directory="/reports/attendance"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Leave Report"} directory="/reports/leave"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Project Wise Attendance"} directory="/reports/project-wise-attendance"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Daily Attendance"} directory="/reports/daily-attendance"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Employee Report"} directory="/reports/employee"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Payroll Report"} directory="/reports/payroll"/>
                            <SidebarMenu onClose={handleClose} icon={""} menuTitle={"Adhoc Report"} directory="/reports/adhoc"/>
                            <Divider/>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar;