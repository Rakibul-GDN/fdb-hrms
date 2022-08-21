import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {
    Box, Button,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    OutlinedInput,
    Paper,
    Select, TextField,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    departmentName: Yup.string().required('Department name is required'),
    departmentCode: Yup.string().required('Department Code is required'),
});

const DepartmentAddPage = () => {
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

    return(
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} sx={{my: 2}} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" color="#0F3F62" sx={{mb: 2}}>Add Department</Typography>
                        <Paper elevation={2} sx={{p: 2}}>
                            <Typography variant="h6" color="#0F3F62" sx={{mt: 2}}>Department Info</Typography>
                            <Typography variant="subtitle2" color="#0F3F62" sx={{mb: 2, fontSize: 12}}>Required fields are marked with (*)</Typography>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.departmentName ? red[700]: ""}>Department Name*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            error={!!formState.errors?.departmentName}
                                        />
                                        {!!formState.errors?.departmentName ?
                                            <FormHelperText
                                                error>{errors?.departmentName?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="departmentName"
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth size="small" sx={{mt: 2}}>
                                        <Typography color={!!formState.errors?.departmentCode ? red[700]: ""}>Department Code*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            error={!!formState.errors?.departmentCode}
                                        />
                                        {!!formState.errors?.departmentCode ?
                                            <FormHelperText
                                                error>{errors?.departmentCode?.message}</FormHelperText> : ""}
                                    </FormControl>
                                )}
                                name="departmentCode"
                                control={control}
                                defaultValue=""
                            />
                            <Grid container spacing={2} sx={{my: 2}}>
                                <Grid item xs={6}>
                                    <Button variant="contained" onClick={() => reset()} color="inherit" fullWidth>Reset</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" type="submit" color="success" fullWidth>Add</Button>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                </Grid>

            </form>
        </Box>
    )
}

export default DepartmentAddPage;