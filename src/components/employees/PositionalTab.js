import {
    Button,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {useEffect} from "react";

const validationSchema = Yup.object().shape({
    subDepartment: Yup.string().required("Sub Department is Required"),
    position: Yup.string().required("Position is Required"),
    hireDate: Yup.string().required("Hiring date is Required"),
    joiningDate: Yup.string().required("Joining date is Required"),
    rateType: Yup.string().required("Rate type is Required"),
    rate: Yup.string().required("Rate is Required"),
    monthlyWorkHour: Yup.string().required("Monthly work hour is Required"),
    payFrequency: Yup.string().required("Pay Frequency is Required"),
});

const PositionalTab = ({onSubmit, onPrev, employeeData}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
        getValues,
        setValue
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    useEffect(() => {
        reset({...employeeData})
    }, [])
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.subDepartment ? red[700]: ""}>Sub Department*</Typography>
                                <Select
                                    native
                                    {...field}
                                    error={!!formState.errors?.subDepartment}
                                >
                                    <option aria-label="None" value="" />
                                    <optgroup label="Technical">
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                    </optgroup>
                                    <optgroup label="Sales">
                                        <option value={3}>Option 3</option>
                                        <option value={4}>Option 4</option>
                                    </optgroup>
                                    <optgroup label="Management">
                                        <option value={3}>Option 5</option>
                                        <option value={4}>Option 6</option>
                                    </optgroup>
                                    <option aria-label="None" value="" />
                                </Select>
                                {!!formState.errors?.subDepartment ?
                                    <FormHelperText
                                        error>{errors?.subDepartment?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="subDepartment"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.position ? red[700]: ""}>Position*</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.position}
                                >
                                    <MenuItem value={"intern software engineer"}>Intern Software Engineer</MenuItem>
                                    <MenuItem value={"trainee software engineer"}>Trainee Software Engineer</MenuItem>
                                    <MenuItem value={"associate software engineer"}>Associate Software Engineer</MenuItem>
                                    <MenuItem value={"software engineer"}>Software Engineer</MenuItem>
                                    <MenuItem value={"senior software engineer"}>Senior Software Engineer</MenuItem>
                                </Select>
                                {!!formState.errors?.position ?
                                    <FormHelperText
                                        error>{errors?.position?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="position"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.dutyType ? red[700]: ""}>Duty Type</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.dutyType}
                                >
                                    <MenuItem value={"full time"}>Full Time</MenuItem>
                                    <MenuItem value={"part time"}>Part Time</MenuItem>
                                    <MenuItem value={"contractual"}>Contractual</MenuItem>
                                </Select>
                                {!!formState.errors?.dutyType ?
                                    <FormHelperText
                                        error>{errors?.dutyType?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="dutyType"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.hireDate ? red[700] : ""}>Hiring Date*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.hireDate}
                                    type="date"
                                />
                                {!!formState.errors?.hireDate ?
                                    <FormHelperText
                                        error>{errors?.hireDate?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="hireDate"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.joiningDate ? red[700] : ""}>Joining Date*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.joiningDate}
                                    type="date"
                                />
                                {!!formState.errors?.joiningDate ?
                                    <FormHelperText
                                        error>{errors?.joiningDate?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="joiningDate"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.terminationDate ? red[700] : ""}>Termination Date</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.terminationDate}
                                    type="date"
                                />
                                {!!formState.errors?.terminationDate ?
                                    <FormHelperText
                                        error>{errors?.terminationDate?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="terminationDate"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.voluntaryTermination ? red[700]: ""}>Voluntary Termination</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.voluntaryTermination}
                                >
                                    <MenuItem value={"yes"}>Yes</MenuItem>
                                    <MenuItem value={"no"}>No</MenuItem>
                                </Select>
                                {!!formState.errors?.voluntaryTermination ?
                                    <FormHelperText
                                        error>{errors?.voluntaryTermination?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="voluntaryTermination"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.rehireDate ? red[700] : ""}>Re-Hire Date</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.rehireDate}
                                    type="date"
                                />
                                {!!formState.errors?.rehireDate ?
                                    <FormHelperText
                                        error>{errors?.rehireDate?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="rehireDate"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.rateType ? red[700]: ""}>Rate Type*</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.rateType}
                                >
                                    <MenuItem value={"hourly"}>Hourly</MenuItem>
                                    <MenuItem value={"salary"}>Salary</MenuItem>
                                </Select>
                                {!!formState.errors?.rateType ?
                                    <FormHelperText
                                        error>{errors?.rateType?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="rateType"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.rate ? red[700] : ""}>Rate*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.rate}
                                    type="number"
                                />
                                {!!formState.errors?.rate ?
                                    <FormHelperText
                                        error>{errors?.rate?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="rate"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.monthlyWorkHour ? red[700] : ""}>Monthly Work Hour*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.monthlyWorkHour}
                                    type="number"
                                />
                                {!!formState.errors?.monthlyWorkHour ?
                                    <FormHelperText
                                        error>{errors?.monthlyWorkHour?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="monthlyWorkHour"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.payFrequency ? red[700]: ""}>Pay Frequency*</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.payFrequency}
                                >
                                    <MenuItem value={"weekly"}>Weekly</MenuItem>
                                    <MenuItem value={"biweekly"}>Biweekly</MenuItem>
                                    <MenuItem value={"monthly"}>Monthly</MenuItem>
                                    <MenuItem value={"annual"}>Annual</MenuItem>
                                </Select>
                                {!!formState.errors?.payFrequency ?
                                    <FormHelperText
                                        error>{errors?.payFrequency?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="payFrequency"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.supervisor ? red[700]: ""}>Supervisor</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.supervisor}
                                >
                                    <MenuItem value={"weekly"}>Self</MenuItem>
                                    <MenuItem value={"biweekly"}>Roberts Brown</MenuItem>
                                </Select>
                                {!!formState.errors?.supervisor ?
                                    <FormHelperText
                                        error>{errors?.supervisor?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="supervisor"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.isSupervisor ? red[700]: ""}>Is Supervisor</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.isSupervisor}
                                >
                                    <MenuItem value={"yes"}>Yes</MenuItem>
                                    <MenuItem value={"no"}>No</MenuItem>
                                </Select>
                                {!!formState.errors?.isSupervisor ?
                                    <FormHelperText
                                        error>{errors?.isSupervisor?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="isSupervisor"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.reportingTo ? red[700] : ""}>Reporting To</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.reportingTo}
                                />
                                {!!formState.errors?.reportingTo ?
                                    <FormHelperText
                                        error>{errors?.reportingTo?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="reportingTo"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
            </Grid>

            <Stack direction="row" justifyContent="space-between" sx={{mt: 2}}>
                <Button variant="contained" onClick={onPrev}>Previous</Button>
                <Button variant="contained" type={"submit"}>Next</Button>
            </Stack>
        </form>
    )
}

export default PositionalTab;