import {Controller, useForm} from "react-hook-form";
import {
    Button,
    FormControl,
    FormHelperText, Grid, MenuItem,
    OutlinedInput, Select,
    Stack, Typography
} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {red} from "@mui/material/colors";
import {useEffect} from "react";
import countryList from "../../_mockData/countries"

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required").min(3, "Minimum 3 characters"),
    email: Yup.string().required("Email is required").email('Email is invalid'),
    phone: Yup.string().required("Phone is required").min(7, "Minimum 7 digits"),
    country: Yup.string().required("Country is required"),
    attendanceTime: Yup.string().required("Attendance time is required"),
    employeeType: Yup.string().required("Employee Type is required"),
});

const BasicInfoTab = ({onSubmit, employeeData}) => {
    //react-hook-form
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
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
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.firstname ? red[700]: ""}>First Name*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.firstname}
                                />
                                {!!formState.errors?.firstname ?
                                    <FormHelperText
                                        error>{errors?.firstname?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="firstname"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.middlename ? red[700]: ""}>Middle Name</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.middlename}
                                />
                                {!!formState.errors?.middlename ?
                                    <FormHelperText
                                        error>{errors?.middlename?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="middlename"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.lastname ? red[700]: ""}>Last Name*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.lastname}
                                />
                                {!!formState.errors?.lastname ?
                                    <FormHelperText
                                        error>{errors?.lastname?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="lastname"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.email ? red[700]: ""}>Email*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.email}
                                />
                                {!!formState.errors?.email ?
                                    <FormHelperText
                                        error>{errors?.email?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="email"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.homeEmail ? red[700]: ""}>Home Email</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.homeEmail}
                                />
                                {!!formState.errors?.homeEmail ?
                                    <FormHelperText
                                        error>{errors?.homeEmail?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="homeEmail"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.businessEmail ? red[700]: ""}>Business Email</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.businessEmail}
                                />
                                {!!formState.errors?.businessEmail ?
                                    <FormHelperText
                                        error>{errors?.businessEmail?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="businessEmail"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.phone ? red[700]: ""}>Phone*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.phone}
                                />
                                {!!formState.errors?.phone ?
                                    <FormHelperText
                                        error>{errors?.phone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="phone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.homePhone ? red[700]: ""}>Home Phone</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.homePhone}
                                />
                                {!!formState.errors?.homePhone ?
                                    <FormHelperText
                                        error>{errors?.homePhone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="homePhone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.businessPhone ? red[700]: ""}>Business Phone</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.businessPhone}
                                />
                                {!!formState.errors?.businessPhone ?
                                    <FormHelperText
                                        error>{errors?.businessPhone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="businessPhone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.country ? red[700]: ""}>Country*</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.country}
                                >
                                    {countryList?.map(country => <MenuItem key={country.code} value={country.code}>{country.name}</MenuItem>)}
                                </Select>
                                {!!formState.errors?.country ?
                                    <FormHelperText
                                        error>{errors?.country?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="country"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.city ? red[700]: ""}>City</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.city}
                                />
                                {!!formState.errors?.city ?
                                    <FormHelperText
                                        error>{errors?.city?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="city"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.zip ? red[700]: ""}>ZIP Code</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.zip}
                                />
                                {!!formState.errors?.zip ?
                                    <FormHelperText
                                        error>{errors?.zip?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="zip"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.attendanceTime ? red[700]: ""}>Attendance Time*</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.attendanceTime}
                                >
                                    <MenuItem value={"day"}>Day Shift (9:00 am - 6:00 pm)</MenuItem>
                                    <MenuItem value={"evening"}>Evening Shift (4:00 pm - 11:00 pm)</MenuItem>
                                </Select>
                                {!!formState.errors?.attendanceTime ?
                                    <FormHelperText
                                        error>{errors?.attendanceTime?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="attendanceTime"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.employeeType ? red[700]: ""}>Employee Type*</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.employeeType}
                                >
                                    <MenuItem value={"intern"}>Intern</MenuItem>
                                    <MenuItem value={"contractual"}>Contractual</MenuItem>
                                    <MenuItem value={"fulltime"}>Full time</MenuItem>
                                </Select>
                                {!!formState.errors?.employeeType ?
                                    <FormHelperText
                                        error>{errors?.employeeType?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="employeeType"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
            </Grid>

            <Stack direction="row" justifyContent="end" sx={{mt: 2}}>
                <Button variant="contained" type={"submit"}>Next</Button>
            </Stack>
        </form>
    )
}

export default BasicInfoTab;