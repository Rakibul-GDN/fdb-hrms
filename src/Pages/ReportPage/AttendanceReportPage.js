import {
    Alert,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Paper,
    Select,
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

const AttendanceReportPage = () => {
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
                    <Grid item xs={12} md={4}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth variant="outlined" size="small">
                                    <Typography color={!!formState.errors?.employeeName ? red[700] : ""}>Select
                                        Employee*</Typography>
                                    <Select
                                        {...field}
                                        error={!!formState.errors?.employeeName}
                                    >
                                        <MenuItem value={"bd"}>Bangladesh</MenuItem>
                                        <MenuItem value={"in"}>India</MenuItem>
                                        <MenuItem value={"pk"}>Pakistan</MenuItem>
                                    </Select>
                                    {!!formState.errors?.employeeName ?
                                        <FormHelperText
                                            error>{errors?.employeeName?.message}</FormHelperText> : ""}

                                </FormControl>
                            )}
                            name="employeeName"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth size="small">
                                    <Typography color={!!formState.errors?.month ? red[700] : ""}>Select
                                        Month*</Typography>
                                    <Select
                                        {...field}
                                        error={!!formState.errors?.month}
                                    >
                                        <MenuItem value={"bd"}>Bangladesh</MenuItem>
                                        <MenuItem value={"in"}>India</MenuItem>
                                        <MenuItem value={"pk"}>Pakistan</MenuItem>
                                    </Select>
                                    {!!formState.errors?.month ?
                                        <FormHelperText
                                            error>{errors?.month?.message}</FormHelperText> : ""}
                                </FormControl>
                            )}
                            name="month"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Controller
                            render={({field, formState}) => (
                                <FormControl fullWidth size="small">
                                    <Typography color={!!formState.errors?.year ? red[700] : ""}>Select
                                        Year*</Typography>
                                    <Select
                                        {...field}
                                        error={!!formState.errors?.year}
                                    >
                                        <MenuItem value={"bd"}>Bangladesh</MenuItem>
                                        <MenuItem value={"in"}>India</MenuItem>
                                        <MenuItem value={"pk"}>Pakistan</MenuItem>
                                    </Select>
                                    {!!formState.errors?.year ?
                                        <FormHelperText
                                            error>{errors?.year?.message}</FormHelperText> : ""}
                                </FormControl>
                            )}
                            name="year"
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button sx={{mt: 3}} variant="contained" type="submit" color="success" fullWidth>View
                            Report</Button>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 5}}>
                        <Calendar
                            localizer={localizer}
                            events={dummyEvents}
                            components={{
                                event: MonthEvent,
                            }}
                        />
                    </Grid>
                </Grid>

            </form>
        </Paper>
    )
}

export default AttendanceReportPage;