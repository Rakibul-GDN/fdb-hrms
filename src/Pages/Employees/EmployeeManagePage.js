import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Avatar,
    Box,
    Button,
    Grid,
    IconButton, Menu, MenuItem,
    Paper,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    Tooltip,
    Typography
} from "@mui/material";
import {BsFillGrid3X3GapFill, BsListUl, BsPlusLg, BsThreeDotsVertical} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import {AiOutlineUserDelete} from "react-icons/ai";
import EmployeeCard from "../../components/clients/EmployeeCard";
import employees from "../../_mockData/employees";

const EmployeeManagePage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [displayType, setDisplayType] = useState("grid")
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate()
    return(
        <Box>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" color="#0F3F62" sx={{mt: 2}}>Employees</Typography>
                <Box>
                    <Tooltip title="Grid View">
                        <IconButton aria-label="gird view" onClick={() => setDisplayType("grid")}>
                            <BsFillGrid3X3GapFill/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="List View">
                        <IconButton aria-label="List View" sx={{mx: 2}} onClick={() => setDisplayType("list")}>
                            <BsListUl/>
                        </IconButton>
                    </Tooltip>
                    <Button variant="contained">
                        <Stack direction="row" alignItems={"center"}>
                            <BsPlusLg/> <Typography sx={{ml: 1}} variant="subtitle1" onClick={() => navigate("/employees/add")}>Add Employee</Typography>
                        </Stack>
                    </Button>
                </Box>
            </Stack>
            {displayType === "grid" ?
                <Grid container spacing={2} sx={{my: 2}}>
                    {employees.map((employee, index) => (
                        <Grid item xs={3} key={index}>
                            <EmployeeCard id={employee?.id} email={employee?.email} avatar={employee?.avatar}
                                        name={employee?.name} open={open} handleClick={handleClick}/>
                        </Grid>
                    ))}
                </Grid>
                :
                <TableContainer component={Paper} sx={{my: 2}}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Employee ID</TableCell>
                                <TableCell align="left">Photograph</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Mobile</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((employee, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{employee?.id}</TableCell>
                                    <TableCell align="center">
                                        <Avatar alt={employee?.name} src={employee?.avatar} sx={{ width: 56, height: 56 }}/>
                                    </TableCell>
                                    <TableCell align="center">{employee?.name}</TableCell>
                                    <TableCell align="center">{employee?.email}</TableCell>
                                    <TableCell align="center">{employee?.mobile}</TableCell>
                                    <TableCell align="center">{employee?.status}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            <BsThreeDotsVertical/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <BiEditAlt style={{marginRight: "5px"}}/> Edit Client
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <AiOutlineUserDelete style={{marginRight: "5px"}}/> Delete Client
                </MenuItem>

            </Menu>
        </Box>
    )
}

export default EmployeeManagePage;