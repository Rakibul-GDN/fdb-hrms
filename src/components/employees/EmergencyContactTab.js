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
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.emergencyContactPerson ? red[700] : ""}>Emergency Contact Person*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.emergencyContactPerson}
                                />
                                {!!formState.errors?.emergencyContactPerson ?
                                    <FormHelperText
                                        error>{errors?.emergencyContactPerson?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="emergencyContactPerson"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.emergencyContactRelationship ? red[700] : ""}>Emergency Contact Relationship*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.emergencyContactRelationship}
                                />
                                {!!formState.errors?.emergencyContactRelationship ?
                                    <FormHelperText
                                        error>{errors?.emergencyContactRelationship?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="emergencyContactRelationship"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.emergencyContact ? red[700] : ""}>Emergency Contact</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.emergencyContact}
                                />
                                {!!formState.errors?.emergencyContact ?
                                    <FormHelperText
                                        error>{errors?.emergencyContact?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="emergencyContact"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.altEmergencyContact ? red[700] : ""}>Alt Emergency Contact</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.altEmergencyContact}
                                />
                                {!!formState.errors?.altEmergencyContact ?
                                    <FormHelperText
                                        error>{errors?.altEmergencyContact?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="altEmergencyContact"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.emergencyHomePhone ? red[700] : ""}>Emergency Home Phone</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.emergencyHomePhone}
                                />
                                {!!formState.errors?.emergencyHomePhone ?
                                    <FormHelperText
                                        error>{errors?.emergencyHomePhone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="emergencyHomePhone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.altEmergencyHomePhone ? red[700] : ""}>Alt Emergency Home Phone</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.altEmergencyHomePhone}
                                />
                                {!!formState.errors?.altEmergencyHomePhone ?
                                    <FormHelperText
                                        error>{errors?.altEmergencyHomePhone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="altEmergencyHomePhone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.emergencyWorkPhone ? red[700] : ""}>Emergency Work Phone</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.emergencyWorkPhone}
                                />
                                {!!formState.errors?.emergencyWorkPhone ?
                                    <FormHelperText
                                        error>{errors?.emergencyWorkPhone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="emergencyWorkPhone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.altEmergencyWorkPhone ? red[700] : ""}>Alt Emergency Work Phone</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.altEmergencyWorkPhone}
                                />
                                {!!formState.errors?.altEmergencyWorkPhone ?
                                    <FormHelperText
                                        error>{errors?.altEmergencyWorkPhone?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="altEmergencyWorkPhone"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
            </Grid>
            <Stack direction="row" justifyContent="space-between" sx={{mt: 2}}>
                <Button variant="contained" onClick={onPrev}>Previous</Button>
                <Button variant="contained" type={"submit"}>Add Employee</Button>
            </Stack>
        </form>
    )
}

export default PositionalTab;