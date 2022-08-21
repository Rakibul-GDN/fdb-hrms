import {
    Button,
    FormControl,
    FormHelperText,
    Grid, IconButton, InputAdornment, InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import * as Yup from "yup";
import {useEffect, useState} from "react";

const validationSchema = Yup.object().shape({
});

const LoginInfoTab = ({onSubmit, onPrev, employeeData}) => {
    const [showPassword, setShowPassword] = useState(false)
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
                                <Typography color={!!formState.errors?.userEmail ? red[700] : ""}>User Email*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.userEmail}
                                />
                                {!!formState.errors?.userEmail ?
                                    <FormHelperText
                                        error>{errors?.userEmail?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="userEmail"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.password ? red[700] : ""}>User Password*</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    error={!!formState.errors?.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {!!formState.errors?.password ?
                                    <FormHelperText
                                        error>{errors?.password?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="password"
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

export default LoginInfoTab;