import {
    Box, Button,
    FormControl,
    FormHelperText, Grid, MenuItem,
    OutlinedInput, Paper, Select, TextField,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    clientName: Yup.string().required('Name is required'),
    clientCountry: Yup.string().required('Client country is required'),
    clientEmail: Yup.string().required('Client email is required').email('Email is invalid'),
    clientCompany: Yup.string().required('Client Company is required'),
    clientAddress: Yup.string().required('Client address is required'),
});

const ClientsAddPage = () => {

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
                        <Typography variant="h5" color="#0F3F62" sx={{mb: 2}}>Add Client</Typography>
                        <Paper elevation={2} sx={{p: 2}}>
                            <Typography variant="h6" color="#0F3F62" sx={{mt: 2}}>Client Info</Typography>
                            <Typography variant="subtitle2" color="#0F3F62" sx={{mb: 2, fontSize: 12}}>Required fields are marked with (*)</Typography>
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" size="small">
                                        <Typography color={!!formState.errors?.clientName ? red[700]: ""}>Client Name*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            error={!!formState.errors?.clientName}
                                        />
                                        {!!formState.errors?.clientName ?
                                            <FormHelperText
                                                error>{errors?.clientName?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="clientName"
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth size="small" sx={{mt: 2}}>
                                        <Typography color={!!formState.errors?.clientCountry ? red[700]: ""}>Client Country*</Typography>
                                        <Select
                                            {...field}
                                            error={!!formState.errors?.clientCountry}
                                        >
                                            <MenuItem value={"bd"}>Bangladesh</MenuItem>
                                            <MenuItem value={"in"}>India</MenuItem>
                                            <MenuItem value={"pk"}>Pakistan</MenuItem>
                                        </Select>
                                        {!!formState.errors?.clientCountry ?
                                            <FormHelperText
                                                error>{errors?.clientCountry?.message}</FormHelperText> : ""}
                                    </FormControl>
                                )}
                                name="clientCountry"
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" sx={{mt: 2}} size="small">
                                        <Typography color={!!formState.errors?.clientEmail ? red[700]: ""}>Client Email*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            error={!!formState.errors?.clientEmail}
                                        />
                                        {!!formState.errors?.clientEmail ?
                                            <FormHelperText
                                                error>{errors?.clientEmail?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="clientEmail"
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" sx={{mt: 2}} size="small">
                                        <Typography color={!!formState.errors?.clientCompany ? red[700]: ""}>Client Company*</Typography>
                                        <OutlinedInput
                                            {...field}
                                            error={!!formState.errors?.clientCompany}
                                        />
                                        {!!formState.errors?.clientCompany ?
                                            <FormHelperText
                                                error>{errors?.clientCompany?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="clientCompany"
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                render={({field, formState}) => (
                                    <FormControl fullWidth variant="outlined" sx={{mt: 2}} size="small">
                                        <Typography color={!!formState.errors?.clientAddress ? red[700]: ""}>Client Address*</Typography>
                                        <TextField
                                            {...field}
                                            multiline
                                            rows={3}
                                            error={!!formState.errors?.clientAddress}
                                        />
                                        {!!formState.errors?.clientAddress ?
                                            <FormHelperText
                                                error>{errors?.clientAddress?.message}</FormHelperText> : ""}

                                    </FormControl>
                                )}
                                name="clientAddress"
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

export default ClientsAddPage;