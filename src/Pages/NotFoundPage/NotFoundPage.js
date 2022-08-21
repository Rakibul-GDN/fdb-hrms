import {Box, Stack} from "@mui/material";

const NotFoundPage = () => {
    return(
        <Box sx={{height: "98vh", width: "99vw"}}>
            <Stack sx={{height: "100%", width: "100%"}} justifyContent={"center"} alignItems={"center"}>
                <img style={{maxHeight: "100%", maxWidth: "100%", objectFit: "cover"}} src="/assets/images/404.svg" alt=""/>
            </Stack>
        </Box>
    )
}

export default NotFoundPage;