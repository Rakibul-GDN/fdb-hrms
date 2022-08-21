import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import ReactSelect from "react-select";

const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Name is required'),
    client: Yup.string().required('Client is required'),
    teamMember: Yup.array().nullable().required('Team Member is required'),
    projectLead: Yup.string().required('Project lead is required'),
    tasksNumber: Yup.string().required('Approximate tasks is required'),
    projectDescription: Yup.string().required('Project Description is required'),
    startDate: Yup.string().required('Project start date is required'),
    duration: Yup.string().required('Duration is required'),
});


const ProjectsAddPage = () => {

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
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper elevation={2} sx={{p: 2}}>
                    <Typography variant="h6" color="#0F3F62" sx={{mt: 2}}>Project Info</Typography>
                    <Typography variant="subtitle2" color="#0F3F62" sx={{mb: 2, fontSize: 12}}>Required fields are
                        marked with (*)</Typography>
                    <Grid container spacing={2} sx={{my: 2}} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.projectName ? red[700] : ""}>Project
                                            Name*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            error={!!formState.errors?.projectName}
                                        />
                                        {!!formState.errors?.projectName ?
                                            <FormHelperText
                                                error>{errors?.projectName?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="projectName"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth size="small">
                                        <Typography
                                            color={!!formState.errors?.client ? red[700] : ""}>Client*</Typography>
                                        <Select
                                            {...field}
                                            error={!!formState.errors?.client}
                                        >
                                            <MenuItem value={"mrs"}>Mr. Robertson</MenuItem>
                                            <MenuItem value={"mps"}>Ms. Perkinson</MenuItem>
                                            <MenuItem value={"jd"}>John Doe</MenuItem>
                                        </Select>
                                        {!!formState.errors?.client ?
                                            <FormHelperText
                                                error>{errors?.client?.message}</FormHelperText> : ""}
                                    </FormControl>
                                )}
                                name="client"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth size="small">
                                        <Typography color={!!formState.errors?.teamMember ? red[700] : ""}>Team
                                            Members*</Typography>
                                        <ReactSelect
                                            styles={{
                                                control: (base, state) => ({
                                                    ...base,
                                                    '&:hover': {borderColor: 'gray'}, // border style on hover
                                                    border: !!formState.errors?.teamMember ? '1px solid red' : '1px solid lightgray', // default border color
                                                    boxShadow: 'none', // no box-shadow
                                                }),
                                            }}
                                            isMulti
                                            {...field}
                                            options={[{value: "1", label: "One"}, {value: "2", label: "Two"}, {
                                                value: "3",
                                                label: "Three"
                                            }, {value: "4", label: "Four"},]}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                        {!!formState.errors?.teamMember ?
                                            <FormHelperText
                                                error>{errors?.teamMember?.message}</FormHelperText> : ""}
                                    </FormControl>
                                )}
                                name="teamMember"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth size="small">
                                        <Typography color={!!formState.errors?.projectLead ? red[700] : ""}>Project
                                            Lead*</Typography>
                                        <Select
                                            {...field}
                                            error={!!formState.errors?.projectLead}
                                        >
                                            <MenuItem value={"mrs"}>Mr. Robertson</MenuItem>
                                            <MenuItem value={"mps"}>Ms. Perkinson</MenuItem>
                                            <MenuItem value={"jd"}>John Doe</MenuItem>
                                        </Select>
                                        {!!formState.errors?.projectLead ?
                                            <FormHelperText
                                                error>{errors?.projectLead?.message}</FormHelperText> : ""}
                                    </FormControl>
                                )}
                                name="projectLead"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.tasksNumber ? red[700] : ""}>Approximate
                                            Tasks*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            type="number"
                                            error={!!formState.errors?.tasksNumber}
                                        />
                                        {!!formState.errors?.tasksNumber ?
                                            <FormHelperText
                                                error>{errors?.tasksNumber?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="tasksNumber"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.startDate ? red[700] : ""}>Start
                                            Date*</Typography>
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
                        <Grid item xs={12} md={6}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.duration ? red[700] : ""}>Duration (in
                                            months)*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            type="number"
                                            error={!!formState.errors?.duration}
                                        />
                                        {!!formState.errors?.duration ?
                                            <FormHelperText
                                                error>{errors?.duration?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="duration"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.projectDescription ? red[700] : ""}>Project
                                            Description*</Typography>
                                        <TextField
                                            {...field}
                                            multiline
                                            rows={3}
                                            error={!!formState.errors?.projectDescription}
                                        />
                                        {!!formState.errors?.projectDescription ?
                                            <FormHelperText
                                                error>{errors?.projectDescription?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="projectDescription"
                                control={control}
                                defaultValue=""
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Button variant="contained" onClick={() => reset()} color="inherit"
                                    fullWidth>Reset</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" type="submit" color="success" fullWidth>Add</Button>
                        </Grid>
                    </Grid>
                </Paper>

            </form>
        </Box>
    )
}

export default ProjectsAddPage;