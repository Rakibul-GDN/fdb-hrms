import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {useState} from "react";
import {Box, CssBaseline, styled} from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom"

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



const Layout = () => {
    const handle = useFullScreenHandle();
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const onClose = () => {
        setOpen(false)
    }


    return (
        <FullScreen handle={handle} className="my-fullscreen">
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Navbar open={open} toggleDrawer={toggleDrawer} handle={handle}/>
                <Sidebar open={open} onClose={onClose}/>
                <Main open={open} sx={{background: "#F2F7FF", minHeight: "100vh"}}>
                    <DrawerHeader/>
                    <Outlet/>
                </Main>
            </Box>
        </FullScreen>
    );
}

export default Layout;