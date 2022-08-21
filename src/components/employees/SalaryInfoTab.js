import {
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel, MenuItem,
    OutlinedInput, Select,
    Stack,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import {useEffect, useState} from "react";


const SalaryInfoTab = ({onSubmit, onPrev, employeeData}) => {

    const [isTaxRequired, setIsTaxRequired] = useState("no")
    const [allSalary, setAllSalary] = useState({basic: 0, transport: 0, medical: 0, house: 0, provident: 0, tax: 0})
    const [gross, setGross] = useState(0)

    const changeHandler = (value, key) => {
        const salaries = {...allSalary}
        if(value.length > 0){
            salaries[key] = parseInt(value)
            setAllSalary(salaries)
        } else{
            salaries[key] = 0
        }
        setAllSalary(salaries)
    }

    useEffect(() => {
        reset({...employeeData})
    }, [])

    useEffect(() => {
        if(allSalary.basic > 0 || allSalary.transport > 0 || allSalary.medical > 0 || allSalary.house > 0 || allSalary.provident > 0 || allSalary.tax > 0){
            const gross = allSalary.basic + allSalary.transport + allSalary.medical + allSalary.house - allSalary.provident - allSalary.tax;
            setValue("gross", gross.toString())
        }
    }, [allSalary])

    const validationSchema = Yup.object().shape({
        basic: Yup.string().required("Basic salary is required"),
        tax: isTaxRequired === "yes" ? Yup.string().required("Basic salary is required") : null,
        // transportAllowance: Yup.number("Must be a number"),
        // medicalAllowance: Yup.number("Must be a number"),
        // houseRent: Yup.number("Must be a number"),

    });
    //react-hook-form
    const {
        control,
        handleSubmit,
        formState: {errors},
        getValues,
        setValue,
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });


    // useEffect(() => {
    //     let basic = 0;
    //     let transport = 0;
    //     if (getValues().basic !== "") {
    //         basic = parseInt(getValues().basic)
    //     }
    //     if (getValues().transportAllowance !== "") {
    //         transport = parseInt(getValues().transportAllowance)
    //     }
    //     setValue("gross", basic + transport)
    // }, [getValues().basic, getValues().transportAllowance])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h6" sx={{mb: 2}}>Payments</Typography>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.basic ? red[700] : ""}>Basic Salary*</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.basic}
                                    type="number"
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "basic")}}
                                />
                                {!!formState.errors?.basic ?
                                    <FormHelperText
                                        error>{errors?.basic?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="basic"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.transportAllowance ? red[700] : ""}>Transport
                                    Allowance</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.transportAllowance}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "transport")}}
                                />
                                {!!formState.errors?.transportAllowance ?
                                    <FormHelperText
                                        error>{errors?.transportAllowance?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="transportAllowance"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.medicalAllowance ? red[700] : ""}>Medical
                                    Allowance</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.medicalAllowance}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "medical")}}
                                />
                                {!!formState.errors?.medicalAllowance ?
                                    <FormHelperText
                                        error>{errors?.medicalAllowance?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="medicalAllowance"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.houseRent ? red[700] : ""}>House
                                    Rent</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.houseRent}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "house")}}
                                />
                                {!!formState.errors?.houseRent ?
                                    <FormHelperText
                                        error>{errors?.houseRent?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="houseRent"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.mobileBill ? red[700] : ""}>Mobile Bill</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.mobileBill}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "house")}}
                                />
                                {!!formState.errors?.mobileBill ?
                                    <FormHelperText
                                        error>{errors?.mobileBill?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="mobileBill"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.conveyance ? red[700] : ""}>Conveyance Bill</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.conveyance}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "house")}}
                                />
                                {!!formState.errors?.conveyance ?
                                    <FormHelperText
                                        error>{errors?.conveyance?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="conveyance"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                 <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.lunch ? red[700] : ""}>Lunch Allowance</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.lunch}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "house")}}
                                />
                                {!!formState.errors?.lunch ?
                                    <FormHelperText
                                        error>{errors?.lunch?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="lunch"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.others ? red[700] : ""}>Others</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.others}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "house")}}
                                />
                                {!!formState.errors?.others ?
                                    <FormHelperText
                                        error>{errors?.others?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="others"
                        control={control}
                        defaultValue=""
                    />
                </Grid>

            </Grid>

            <Typography variant="h6" sx={{my: 2}}>Bonuses</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.eidBonus ? red[700] : ""}>Festival Bonus(%)</Typography>
                                <OutlinedInput
                                    type={"number"}
                                    {...field}
                                    error={!!formState.errors?.eidBonus}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "eidBonus")}}
                                />
                                {!!formState.errors?.eidBonus ?
                                    <FormHelperText
                                        error>{errors?.eidBonus?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="eidBonus"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
            </Grid>

            <Typography variant="h6" sx={{my: 2}}>Deductions</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.provident ? red[700] : ""}>Provident
                                    Fund</Typography>
                                <OutlinedInput
                                    type={"number"}
                                    {...field}
                                    error={!!formState.errors?.provident}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "provident")}}
                                />
                                {!!formState.errors?.provident ?
                                    <FormHelperText
                                        error>{errors?.provident?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="provident"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <Typography>Tax Applicable?</Typography>
                        <Select
                            labelId="taxRequired"
                            id="taxRequiredDropdown"
                            value={isTaxRequired}
                            onChange={(e) => setIsTaxRequired(e.target.value)}
                        >
                            <MenuItem value={'yes'}>Yes</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.tax ? red[700] : ""}>Income Tax</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.tax}
                                    disabled={isTaxRequired === 'no'}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "tax")}}
                                />
                                {!!formState.errors?.tax ?
                                    <FormHelperText
                                        error>{errors?.tax?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="tax"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.nonpaidLeave ? red[700] : ""}>Non-Paid Leaves</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.nonpaidLeave}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "tax")}}
                                />
                                {!!formState.errors?.nonpaidLeave ?
                                    <FormHelperText
                                        error>{errors?.nonpaidLeave?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="nonpaidLeave"
                        control={control}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.otherDeductions ? red[700] : ""}>Others</Typography>
                                <OutlinedInput
                                    {...field}
                                    type={"number"}
                                    error={!!formState.errors?.otherDeductions}
                                    onChange={e => {field.onChange(e); changeHandler(e.target.value, "tax")}}
                                />
                                {!!formState.errors?.otherDeductions ?
                                    <FormHelperText
                                        error>{errors?.otherDeductions?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="otherDeductions"
                        control={control}
                        defaultValue=""
                    />
                </Grid>

            </Grid>

            <Typography variant="h6" sx={{my: 2}}>Net Payable</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Controller
                        render={({field, formState}) => (
                            <FormControl fullWidth variant="outlined">
                                <Typography color={!!formState.errors?.gross ? red[700] : ""}>Gross Salary</Typography>
                                <OutlinedInput
                                    {...field}
                                    error={!!formState.errors?.gross}
                                    disabled
                                />
                                {!!formState.errors?.gross ?
                                    <FormHelperText
                                        error>{errors?.gross?.message}</FormHelperText> : ""}

                            </FormControl>
                        )}
                        name="gross"
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

export default SalaryInfoTab;