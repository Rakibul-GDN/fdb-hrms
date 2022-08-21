import {Avatar, AvatarGroup, Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import employees from "../../_mockData/employees";

const colorPicker = (value) => {
    let color = "info"
    if(value === "Completed"){
        color = "success";
    } else if (value === "Upcoming") {
        color = "warning"
    } else if (value === "On-hold") {
        color = "error"
    }
    return color
}


const ProjectCard = ({status, projectName, client, description, startDate, duration, endDate, teamMembers}) => {
    return(
        <Paper elevation={2}>
            <Button fullWidth color={colorPicker(status)} variant={"contained"} disableElevation>{status}</Button>
            <Box sx={{p: 2}}>
                <Typography variant="subtitle1" color="gray">
                    {client}'s
                </Typography>
                <Typography variant="h6">
                    {projectName}
                </Typography>
                <Typography variant="caption" color="gray">
                    {description}
                </Typography>
                <AvatarGroup max={4} sx={{my: 2}}>
                    {teamMembers?.map((member, index) => (
                        <Avatar key={index} alt={employees[member]?.name}
                                src={employees[member]?.avatar}/>
                    ))}
                </AvatarGroup>
                <Divider sx={{my: 1}}/>
                <Stack direction="row" justifyContent="space-between">
                    <Typography color={"gray"}>{startDate}</Typography>
                    <Typography color={"gray"}>{duration} weeks</Typography>
                    <Typography color={"gray"}>{endDate}</Typography>
                </Stack>
                <Divider sx={{my: 1}}/>
            </Box>
        </Paper>
    )
}
export default ProjectCard