import {
    Avatar,
    Box, Button,
    Container,
    FormControl, FormHelperText,
    Grid, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {blue} from "@mui/material/colors";
import {useState} from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import {MdAlternateEmail} from "react-icons/md"
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Link} from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters')
});

const LoginPage = () => {
    //states
    const [showPassword, setShowPassword] = useState(false)

    //react-hook-form
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => console.log(data);


    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={6} sx={{display: {xs: 'none', md: 'block'}}}>
                    <Paper elevation={4} sx={{bgcolor: blue[200], height: "98vh"}}>
                        <Stack justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                            <img height="400px" src="/assets/images/login/login.svg" alt=""/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Stack justifyContent="center" alignItems="center" sx={{height: "98vh"}}>
                            <Box sx={{maxWidth: 450}}>
                                <Avatar sx={{ bgcolor: blue[500], p: 1, mx: "auto" }}>HRM</Avatar>
                                <Typography sx={{my: 2}} variant="h3" textAlign="center">Hello Again</Typography>
                                <Typography sx={{mb: 3}} variant="body2" textAlign="center">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        render={({field, formState}) => (
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel htmlFor="login-email">Email</InputLabel>
                                                <OutlinedInput
                                                    id="login-email"
                                                    {...field}
                                                    error={!!formState.errors?.email}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                edge="end"
                                                            >
                                                                <MdAlternateEmail/>
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Email"
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
                                    <Controller
                                        render={({field, formState}) => (
                                            <FormControl sx={{mt: 3}} variant="outlined" fullWidth>
                                                <InputLabel htmlFor="login-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="login-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    {...field}
                                                    error={!!formState.errors?.password}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
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
                                    <Link to="/dashboard">
                                        <Button variant="text" sx={{mb: 3, color: blue[600]}}>Recover Password</Button>
                                    </Link>
                                    <Button size="large" fullWidth variant="contained" type="submit">Login</Button>
                                </form>
                            </Box>
                        </Stack>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginPage;