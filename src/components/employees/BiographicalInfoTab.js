import {
    Avatar, Badge,
    Box,
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
import {green, red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {useDropzone} from 'react-dropzone';

const validationSchema = Yup.object().shape({});

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

    const [files, setFiles] = useState([]);

    useEffect(() => {
        reset({...employeeData})
    }, [])
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Controller
                        render={({field, formState}) => (
                            <Box>
                                <Typography color={!!formState.errors?.photograph ? red[700] : ""}>Photograph</Typography>
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} {...field}/>
                                    {files.length > 0 ?
                                        <Stack direction="row" justifyContent={"center"}>
                                            <Avatar src={files[0].preview} sx={{height: 192, width: 192}} variant="rounded"
                                                    onLoad={() => {
                                                        URL.revokeObjectURL(files[0].preview)
                                                    }}/>
                                        </Stack>
                                        :
                                        <Box sx={{maxHeight: "100px", border: "1px #c4c4c4 dashed"}}>
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </Box>
                                    }

                                </div>
                            </Box>
                        )}
                        name="photograph"
                        control={control}
                        defaultValue=""
                    />

                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.dateOfBirth ? red[700] : ""}>Date of
                                    Birth*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.dateOfBirth}
                                    type="date"
                                />
                                {!!formState.errors?.dateOfBirth ?
                                    <FormHelperText
                                        error>{errors?.dateOfBirth?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="dateOfBirth"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.gender ? red[700] : ""}>Gender</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.gender}
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"other"}>Other</MenuItem>
                                </Select>
                                {!!formState.errors?.gender ?
                                    <FormHelperText
                                        error>{errors?.gender?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="gender"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.maritalStatus ? red[700] : ""}>Marital
                                    Status</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.maritalStatus}
                                >
                                    <MenuItem value={"Single"}>Single</MenuItem>
                                    <MenuItem value={"Married"}>Married</MenuItem>
                                    <MenuItem value={"Divorced"}>Divorced</MenuItem>
                                    <MenuItem value={"Widowed"}>Widowed</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                                {!!formState.errors?.maritalStatus ?
                                    <FormHelperText
                                        error>{errors?.maritalStatus?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="maritalStatus"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.ethnicGroup ? red[700] : ""}>Ethnic
                                    Group*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.ethnicGroup}
                                />
                                {!!formState.errors?.ethnicGroup ?
                                    <FormHelperText
                                        error>{errors?.ethnicGroup?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="ethnicGroup"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.workInCity ? red[700] : ""}>Work in
                                    City</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.workInCity}
                                />
                                {!!formState.errors?.workInCity ?
                                    <FormHelperText
                                        error>{errors?.workInCity?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="workInCity"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.cityOfResidence ? red[700] : ""}>City of
                                    Residence</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.cityOfResidence}
                                />
                                {!!formState.errors?.cityOfResidence ?
                                    <FormHelperText
                                        error>{errors?.cityOfResidence?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="cityOfResidence"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth>
                                <Typography color={!!formState.errors?.workPermit ? red[700] : ""}>Work
                                    Permit</Typography>
                                <Select
                                    {...field}
                                    error={!!formState.errors?.workPermit}
                                >
                                    <MenuItem value={"yes"}>Yes</MenuItem>
                                    <MenuItem value={"no"}>No</MenuItem>
                                </Select>
                                {!!formState.errors?.workPermit ?
                                    <FormHelperText
                                        error>{errors?.workPermit?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="workPermit"
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