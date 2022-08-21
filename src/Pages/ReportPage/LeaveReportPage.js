import {
    Alert,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem, OutlinedInput,
    Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";


const validationSchema = Yup.object().shape({
    employeeName: Yup.string().required('Cannot generate report without employee name'),
    month: Yup.string().required('Cannot generate report without month'),
    year: Yup.string().required('Cannot generate report without year'),
});

const dummyEvents = [
    {
        id: 0,
        title: 'Present',
        allDay: true,
        start: new Date(2022, 7, 10),
        end: new Date(2022, 7, 10),
    },
    {
        id: 1,
        title: 'Late',
        allDay: true,
        start: new Date(2022, 7, 11),
        end: new Date(2022, 7, 11),
    },
    {
        id: 2,
        title: 'Weekend',
        allDay: true,
        start: new Date(2022, 7, 12),
        end: new Date(2022, 7, 12),
    },
    {
        id: 3,
        title: 'Weekend',
        allDay: true,
        start: new Date(2022, 7, 13),
        end: new Date(2022, 7, 13),
    },
    {
        id: 4,
        title: 'Absent',
        allDay: true,
        start: new Date(2022, 7, 14),
        end: new Date(2022, 7, 14),
    },
];

const colorPicker = (status) => {
    let color = "info"
    if(status === "Present"){
        color = "success"
    } else if (status === "Absent"){
        color = "error"
    } else if (status === "Late") {
        color = "warning"
    }

    return color;
}

const MonthEvent = ({event}) => {

    return (
        <Alert severity={colorPicker(event.title)}>{event.title}</Alert>
    )
}

const LeaveReportPage = () => {
    //react-hook-form
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    });
    const onSubmit = (data) => console.log(data);
    const localizer = momentLocalizer(moment)

    return (
        <Paper elevation={2} sx={{p: 2}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} sx={{my: 2}} alignItems="center" justifyContent="end">
                    <Grid item xs={12} md={3}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth variant="outlined" size="small">
                                    <Typography color={!!formState.errors?.startDate ? red[700] : ""}>Start Date*</Typography>
                                    <OutlinedInput
                                        {...field}
                                        type="date"
                                        error={!!formState.errors?.startDate}
                                    />
                                    {!!formState.errors?.startDate ?
                                        <FormHelperText
                                            error>{errors?.startDate?.message}</FormHelperText> : ""}

                                </FormControl>
                            )}
                            name="startDate"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth variant="outlined" size="small">
                                    <Typography color={!!formState.errors?.endDate ? red[700] : ""}>End Date*</Typography>
                                    <OutlinedInput
                                        {...field}
                                        type="date"
                                        error={!!formState.errors?.endDate}
                                    />
                                    {!!formState.errors?.endDate ?
                                        <FormHelperText
                                            error>{errors?.endDate?.message}</FormHelperText> : ""}

                                </FormControl>
                            )}
                            name="endDate"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth size="small">
                                    <Typography color={!!formState.errors?.department ? red[700] : ""}>Select
                                        Department*</Typography>
                                    <Select
                                        {...field}
                                        error={!!formState.errors?.department}
                                    >
                                        <MenuItem value={"bd"}>Bangladesh</MenuItem>
                                        <MenuItem value={"in"}>India</MenuItem>
                                        <MenuItem value={"pk"}>Pakistan</MenuItem>
                                    </Select>
                                    {!!formState.errors?.department ?
                                        <FormHelperText
                                            error>{errors?.department?.message}</FormHelperText> : ""}
                                </FormControl>
                            )}
                            name="department"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth size="small">
                                    <Typography color={!!formState.errors?.leaveType ? red[700] : ""}>Leave Type*</Typography>
                                    <Select
                                        {...field}
                                        error={!!formState.errors?.leaveType}
                                    >
                                        <MenuItem value={"casual"}>Casual</MenuItem>
                                        <MenuItem value={"sick"}>Sick</MenuItem>
                                    </Select>
                                    {!!formState.errors?.leaveType ?
                                        <FormHelperText
                                            error>{errors?.leaveType?.message}</FormHelperText> : ""}
                                </FormControl>
                            )}
                            name="leaveType"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button sx={{mt: 3}} variant="contained" type="submit" color="success" fullWidth>View
                            Report</Button>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 5}}>
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Employee ID</TableCell>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="center">Department</TableCell>
                                        <TableCell align="center">Leave Type</TableCell>
                                        <TableCell align="center">Comment</TableCell>
                                        <TableCell align="center">From</TableCell>
                                        <TableCell align="right">To</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[1,2,3,4,5].map((item) => (
                                        <TableRow key={item}>
                                            <TableCell align="left">EMP-1234</TableCell>
                                            <TableCell align="center">Rakibul Hasan</TableCell>
                                            <TableCell align="center">Technical</TableCell>
                                            <TableCell align="center">Sick</TableCell>
                                            <TableCell align="center">Migraine Pain</TableCell>
                                            <TableCell align="center">25/07/2022</TableCell>
                                            <TableCell align="right">25/07/2022</TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

            </form>
        </Paper>
    )
}

export default LeaveReportPage;