import {Avatar, Button, IconButton, Paper, Stack, Typography} from "@mui/material";
import {BsThreeDotsVertical} from "react-icons/bs";
import {red} from "@mui/material/colors";

const EmployeeCard = ({open, handleClick, avatar, name, id, email}) => {
    return(
        <Paper elevation={1} sx={{p: 2}}>
            <Stack alignItems="end">
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <BsThreeDotsVertical/>
                </IconButton>
            </Stack>
            <Stack alignItems="center">
                <Avatar alt={name} src={avatar} sx={{ width: 56, height: 56 }}/>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="caption">{id}</Typography>
                <Typography variant="subtitle1" sx={{my: 1}}>{email}</Typography>
                <Stack direction="row" justifyContent="center">
                    <Button size="small" variant="outlined" sx={{mr: 1}}>Message</Button>
                    <Button size="small" variant="outlined">View Profile</Button>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default EmployeeCard;