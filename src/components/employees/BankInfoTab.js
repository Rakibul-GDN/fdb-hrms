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

const validationSchema = Yup.object().shape({
});

const BankInfoTab = ({onSubmit, onPrev, employeeData}) => {
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

    useEffect(() => {
        reset({...employeeData})
    }, [])

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.accountNumber ? red[700]: ""}>Account Number</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.accountNumber}
                                />
                                {!!formState.errors?.accountNumber ?
                                    <FormHelperText
                                        error>{errors?.accountNumber?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="accountNumber"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.bankName ? red[700]: ""}>Bank Name</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.bankName}
                                />
                                {!!formState.errors?.bankName ?
                                    <FormHelperText
                                        error>{errors?.bankName?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="bankName"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.bbanNumber ? red[700]: ""}>BBAN Number</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.bbanNumber}
                                />
                                {!!formState.errors?.bbanNumber ?
                                    <FormHelperText
                                        error>{errors?.bbanNumber?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="bbanNumber"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.branchAddress ? red[700]: ""}>Branch Address</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.branchAddress}
                                />
                                {!!formState.errors?.branchAddress ?
                                    <FormHelperText
                                        error>{errors?.branchAddress?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="branchAddress"
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

export default BankInfoTab;