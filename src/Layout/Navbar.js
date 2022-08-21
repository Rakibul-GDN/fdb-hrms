import {
    AppBar,
    Avatar,
    Box, Divider,
    IconButton,
    InputAdornment,
    Menu, MenuItem,
    Stack,
    TextField,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {AiFillSetting, AiOutlineLogin, AiOutlineMenuUnfold} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import {IoMdNotifications} from "react-icons/io";
import {BiFullscreen} from "react-icons/bi";
import {purple} from "@mui/material/colors";
import {useState} from "react";

const Navbar = ({open, toggleDrawer, handle}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false)
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onToggleFullscreen = () => {
        if(isFullscreen){
            handle.exit()
            setIsFullscreen(false)
        } else {
            handle.enter()
            setIsFullscreen(true)
        }
    }

    return(
        <AppBar position="fixed" open={open} sx={{background: "white", zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    edge="start"
                    sx={{mr: 2}}
                >
                    <AiOutlineMenuUnfold color={"#0F3F62"}/>
                </IconButton>
                <Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component="div" color="#0F3F62">
                        HRMS
                    </Typography>
                    <TextField
                        id="outlined-start-adornment"
                        placeholder="Search"
                        sx={{m: 1, width: '55ch', bgcolor: "white", borderRadius: "5px"}}
                        size="small"
                        InputProps={{
                            endAdornment: <InputAdornment position="end" sx={{width: "30px"}}>
                                <IconButton variant="contained"><FiSearch color="#0F3F62"/></IconButton>
                            </InputAdornment>,
                        }}
                    />
                    <Stack direction="row" alignItems="center">
                        <IconButton variant="contained" onClick={onToggleFullscreen}><BiFullscreen size={24} color="#0F3F62"/></IconButton>
                        <IconButton variant="contained"><IoMdNotifications size={24} color="#0F3F62"/></IconButton>
                        <Box>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ml: 2}}
                                    aria-controls={menuOpen ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={menuOpen ? 'true' : undefined}
                                >
                                    <Avatar sx={{width: 32, height: 32, bgcolor: purple[300]}}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Stack>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={menuOpen}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem>
                            <Avatar/> My Profile
                        </MenuItem>
                        <MenuItem>
                            <Avatar><AiFillSetting/></Avatar> Account Settings
                        </MenuItem>
                        <Divider/>
                        <MenuItem>
                            <Avatar><AiOutlineLogin/></Avatar> Logout
                        </MenuItem>
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar