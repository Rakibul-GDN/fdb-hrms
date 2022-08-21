import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
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
import clients from "../../_mockData/clients";
import ClientCard from "../../components/clients/ClientCard";
import {BiEditAlt} from "react-icons/bi";
import {AiOutlineUserDelete} from "react-icons/ai";
import departments from "../../_mockData/departments";

const DepartmentManagePage = () => {
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
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" color="#0F3F62" sx={{mt: 2}}>Departments</Typography>
                <Box>
                    <Button variant="contained">
                        <Stack direction="row" alignItems={"center"}>
                            <BsPlusLg/> <Typography sx={{ml: 1}} variant="subtitle1"
                                                    onClick={() => navigate("/department/add")}>Add
                            Department</Typography>
                        </Stack>
                    </Button>
                </Box>
            </Stack>

            <TableContainer component={Paper} sx={{my: 2}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Department ID</TableCell>
                            <TableCell align="center">Department Name</TableCell>
                            <TableCell align="center">Department Code</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {departments.map((department, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">{department?.id}</TableCell>
                                <TableCell align="center">{department?.departmentName}</TableCell>
                                <TableCell align="center">{department?.departmentCode}</TableCell>
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

export default DepartmentManagePage;