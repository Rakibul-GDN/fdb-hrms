import {
    Box,
    Chip,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

const EmployeeReportPage = () => {
    return(
        <Paper elevation={2} sx={{p: 2, width: "100%"}}>
            <Box sx={{overflowX: "scroll"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Department</TableCell>
                            <TableCell align="right">Sub Department</TableCell>
                            <TableCell align="right">Designation</TableCell>
                            <TableCell align="right">Duty Type</TableCell>
                            <TableCell align="right">Hire Date</TableCell>
                            <TableCell align="right">Joining Date</TableCell>
                            <TableCell align="right">Termination Date</TableCell>
                            <TableCell align="right">Termination Reason</TableCell>
                            <TableCell align="right">Voluntary Termination</TableCell>
                            <TableCell align="right">Re Hire Date</TableCell>
                            <TableCell align="right">Rate Type</TableCell>
                            <TableCell align="right">Tax Rate</TableCell>
                            <TableCell align="right">Pay Frequency</TableCell>
                            <TableCell align="right">Pay Frequency Text</TableCell>
                            <TableCell align="right">Hourly rate2</TableCell>
                            <TableCell align="right">Hourly rate3</TableCell>
                            <TableCell align="right">Home Department</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    name
                                </TableCell>
                                <TableCell align="right">calories</TableCell>
                                <TableCell align="right">fat</TableCell>
                                <TableCell align="right">carbs</TableCell>
                                <TableCell align="right">protein</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </Paper>
    )
}

export default EmployeeReportPage;