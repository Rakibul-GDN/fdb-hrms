import {
    Box,
    Button,
    FormControl, FormHelperText, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {MdAlternateEmail} from "react-icons/md";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";
import {blue} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import BasicInfoTab from "../../components/employees/BasicInfoTab";
import BankInfoTab from "../../components/employees/BankInfoTab";
import SalaryInfoTab from "../../components/employees/SalaryInfoTab";
import PositionalTab from "../../components/employees/PositionalTab";
import BiographicalInfoTab from "../../components/employees/BiographicalInfoTab";
import EmergencyContactTab from "../../components/employees/EmergencyContactTab";
import LoginInfoTab from "../../components/employees/LoginInfoTab";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}



const EmployeeAddPage = () => {

    const [value, setValue] = useState(0);
    const [employeeData, setEmployeeData] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        homeEmail: "",
        businessEmail: "",
        phone: "",
        homePhone: "",
        businessPhone: "",
        country: "",
        city: "",
        zip: "",
        attendanceTime: "",
        employeeType: "",
        accountNumber: "",
        bankName: "",
        bbanNumber: "",
        branchAddress: "",
        basic: "",
        transportAllowance: "",
        medicalAllowance: "",
        houseRent: "",
        provident: "",
        tax: "",
        gross: "",
        subDepartment: "",
        position: "",
        hireDate: "",
        joiningDate: "",
        terminationDate: "",
        voluntaryTermination: "",
        rehireDate: "",
        rateType: "",
        rate: "",
        monthlyWorkHour: "",
        payFrequency: "",
        supervisor: "",
        isSupervisor: "",
        reportingTo: "",
        dateOfBirth: "",
        gender: "",
        maritalStatus: "",
        ethnicGroup: "",
        workInCity: "",
        cityOfResidence: "",
        workPermit: "",
        emergencyContactPerson: "",
        emergencyContactRelationship: "",
        emergencyContact: "",
        altEmergencyContact: "",
        emergencyHomePhone: "",
        altEmergencyHomePhone: "",
        emergencyWorkPhone: "",
        altEmergencyWorkPhone: "",
        userEmail: "",
        password: "",
    });

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };


    const onPrev = () => {
        if(value > 0){
            setValue(value - 1)
        }
    }



    const onSubmit = (data) => {
        if(value < 6){
            setValue(value + 1)
        }
        console.log(data)
        setEmployeeData({...employeeData, ...data})
    }

    // const onNext = () => {
    //     let isFieldEmpty = true;
    //     let hasError = true;
    //
    //     //checking for unfilled fields
    //     if(getValues().email === ""){
    //         isFieldEmpty = true;
    //     } else {
    //         isFieldEmpty = false;
    //     }
    //
    //     //checking for errors
    //     if(errors?.email !== undefined){
    //         hasError = true;
    //     } else {
    //         hasError = false;
    //     }
    //
    //     if(value < 5 && !isFieldEmpty && !hasError){
    //         setValue(value + 1)
    //     }
    // }

    return(
        <Paper elevation={2} sx={{p: 2}} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}>
                    <Tab label="Basic Info" />
                    <Tab label="Bank Info" />
                    <Tab label="Salary Info" />
                    <Tab label="Positional Info" />
                    <Tab label="Biographical Info" />
                    <Tab label="Emergency Contact" />
                    <Tab label="Login Info" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <BasicInfoTab onSubmit={onSubmit} employeeData={employeeData}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BankInfoTab onSubmit={onSubmit} onPrev={onPrev} employeeData={employeeData}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SalaryInfoTab onSubmit={onSubmit} onPrev={onPrev} employeeData={employeeData}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <PositionalTab onSubmit={onSubmit} onPrev={onPrev} employeeData={employeeData}/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <BiographicalInfoTab onSubmit={onSubmit} onPrev={onPrev} employeeData={employeeData}/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <EmergencyContactTab onSubmit={onSubmit} onPrev={onPrev} employeeData={employeeData}/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <LoginInfoTab onSubmit={onSubmit} onPrev={onPrev} employeeData={employeeData}/>
            </TabPanel>
        </Paper>
    )
}

export default EmployeeAddPage;