import {
    Avatar, AvatarGroup,
    Box,
    Button, Chip,
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
import employees from "../../_mockData/employees";
import EmployeeCard from "../../components/clients/EmployeeCard";
import {BiEditAlt} from "react-icons/bi";
import {AiOutlineUserDelete} from "react-icons/ai";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import projects from "../../_mockData/projects";
import ProjectCard from "../../components/projects/ProjectCard";

const ProjectsAddPage = () => {
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
                <Typography variant="h5" color="#0F3F62" sx={{mt: 2}}>Projects</Typography>
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
                            <BsPlusLg/> <Typography sx={{ml: 1}} variant="subtitle1"
                                                    onClick={() => navigate("/projects/add")}>Add Project</Typography>
                        </Stack>
                    </Button>
                </Box>
            </Stack>
            {displayType === "grid" ?
                <Grid container spacing={2} sx={{my: 2}}>
                    {projects.map((project, index) => (
                        <Grid item xs={3} key={index}>
                            <ProjectCard status={project?.status} projectName={project?.projectName}
                                         client={project?.clientName} description={project?.projectDescription}
                                         startDate={project?.startDate} endDate={project?.endDate}
                                         duration={project?.projectDuration} teamMembers={project?.teamMembers}/>
                        </Grid>
                    ))}
                </Grid>
                :
                <TableContainer component={Paper} sx={{my: 2}}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Project ID</TableCell>
                                <TableCell align="center">Project Name</TableCell>
                                <TableCell align="center">Client Name</TableCell>
                                <TableCell align="center">Project Lead</TableCell>
                                <TableCell align="center">Project Status</TableCell>
                                <TableCell align="center">Start Date</TableCell>
                                <TableCell align="center">End Date</TableCell>
                                <TableCell align="center">Project Duration</TableCell>
                                <TableCell align="center">Approximate Tasks</TableCell>
                                <TableCell align="center">Project Members</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects.map((project, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{project?.projectId}</TableCell>
                                    <TableCell align="center">{project?.projectName}</TableCell>
                                    <TableCell align="center">{project?.clientName}</TableCell>
                                    <TableCell align="center">{project?.projectLead}</TableCell>
                                    <TableCell align="center"><Chip label={project?.status}/></TableCell>
                                    <TableCell align="center">{project?.startDate}</TableCell>
                                    <TableCell align="center">{project?.endDate}</TableCell>
                                    <TableCell align="center">{project?.projectDuration} weeks</TableCell>
                                    <TableCell align="center">{project?.approximateTasks}</TableCell>
                                    <TableCell align="center">
                                        <AvatarGroup max={4}>
                                            {project?.teamMembers?.map((member, index) => (
                                                <Avatar key={index} alt={employees[member]?.name}
                                                        src={employees[member]?.avatar}/>
                                            ))}
                                        </AvatarGroup>
                                    </TableCell>
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
                    <BiEditAlt style={{marginRight: "5px"}}/> Edit Project
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <AiOutlineUserDelete style={{marginRight: "5px"}}/> Delete Project
                </MenuItem>

            </Menu>
        </Box>
    )
}

export default ProjectsAddPage;