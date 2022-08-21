import Page from "../../Layout/Page";
import {Avatar, FormControl, Grid, MenuItem, Paper, Select, Stack, Typography} from "@mui/material";
import {IoIosPeople, IoIosArrowForward} from "react-icons/io"
import {AiOutlineProject} from "react-icons/ai"
import {FaUserTie, FaAddressCard} from "react-icons/fa"
import {HiViewGridAdd} from "react-icons/hi"
import {GiFamilyTree} from "react-icons/gi"
import {TbReportAnalytics, TbReportMoney} from "react-icons/tb"
import {BsCalendar3, BsFileEarmarkSpreadsheetFill} from "react-icons/bs"
import {ImTree} from "react-icons/im"
import {HiUserAdd} from "react-icons/hi"
import { cyan, green, grey, lightBlue, pink} from "@mui/material/colors";
import {useState} from "react";
import {BarChart, Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


const data = [
    {
        name: 'Jan',
        Clients: 5,
        Projects: 8,
        Employees: 9,
        Departments: 3,
    },
    {
        name: 'Feb',
        Clients: 7,
        Projects: 10,
        Employees: 9,
        Departments: 3,
    },
    {
        name: 'Mar',
        Clients: 7,
        Projects: 11,
        Employees: 10,
        Departments: 4,
    },
    {
        name: 'Apr',
        Clients: 8,
        Projects: 12,
        Employees: 13,
        Departments: 4,
    },
    {
        name: 'May',
        Clients: 8,
        Projects: 12,
        Employees: 15,
        Departments: 4,
    },
    {
        name: 'Jun',
        Clients: 10,
        Projects: 15,
        Employees: 15,
        Departments: 4,
    },
    {
        name: 'Jul',
        Clients: 10,
        Projects: 11,
        Employees: 15,
        Departments: 4,
    },
    {
        name: 'Aug',
        Clients: 15,
        Projects: 15,
        Employees: 16,
        Departments: 5,
    },
    {
        name: 'Sep',
        Clients: 15,
        Projects: 18,
        Employees: 16,
        Departments: 5,
    },
    {
        name: 'Oct',
        Clients: 15,
        Projects: 16,
        Employees: 16,
        Departments: 5,
    },
    {
        name: 'Nov',
        Clients: 15,
        Projects: 14,
        Employees: 16,
        Departments: 5,
    },
    {
        name: 'Dec',
        Clients: 15,
        Projects: 17,
        Employees: 16,
        Departments: 5,
    },


];

const HomePage = () => {
    const[cardHovers, setCardHovers] = useState({card1: 0, card2: 0, card3: 0, card4: 0})
    const [chartRange, setChartRange] = useState(1)
    return (
        <Page title={"Homepage"}>
            <Typography variant="h3" color="#0C1E5B">Welcome Super Admin!</Typography>
            <Typography variant="h5" color="#0F3F62" sx={{mb: 2}}>Dashboard</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card1} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 3, card2: 0, card3: 0, card4: 0})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: cyan[600], p: 1.4}}>
                                <FaUserTie size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>43</Typography>
                                <Typography variant="h6" color={grey[500]}>Clients</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card2} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 0, card2: 3, card3: 0, card4: 0})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: lightBlue[600], p: 1.4}}>
                                <AiOutlineProject size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>108</Typography>
                                <Typography variant="h6" color={grey[500]}>Projects</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card3} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 0, card2: 0, card3: 3, card4: 0})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: green[600], p: 1.4}}>
                                <IoIosPeople size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>554</Typography>
                                <Typography variant="h6" color={grey[500]}>Employees</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card4} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 3})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: pink[600], p: 1.4}}>
                                <ImTree size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>64</Typography>
                                <Typography variant="h6" color={grey[500]}>Departments</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h6" color="#0F3F62" sx={{mt: 2}}>Quick Actions</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <HiUserAdd size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Client</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <HiViewGridAdd size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Project</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <FaAddressCard size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Employee</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <GiFamilyTree size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Department</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <BsCalendar3 size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Upload Attendance Sheet</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <BsFileEarmarkSpreadsheetFill size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Upload Salary Sheet</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <TbReportMoney size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Download Payslip</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <TbReportAnalytics size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 16, fontWeight: 500, lineHeight: 1.6}}>Download Attendance Report</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" color="#0F3F62" sx={{mt: 2}}>Quick Stats</Typography>
                    <Paper elevation={3} sx={{p: 2}}>
                        <Stack direction="row" justifyContent="end" alignItems={"center"} sx={{my: 1}}>
                            <Typography variant="subtitle1" sx={{mr: 2}}>Showing Date for Last: </Typography>
                            <FormControl sx={{width: "120px"}}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={chartRange}
                                    onChange={(e) => setChartRange(e.target.value)}
                                >
                                    <MenuItem value={1}>1 year</MenuItem>
                                    <MenuItem value={2}>6 month</MenuItem>
                                    <MenuItem value={3}>3 month</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack justifyContent="center" alignItems="center" sx={{height: 500, width: "100%"}}>
                            <ResponsiveContainer width="99%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Clients" fill="#E57373" />
                                    <Bar dataKey="Projects" fill="#FFB74D" />
                                    <Bar dataKey="Employees" fill="#4FC3F7" />
                                    <Bar dataKey="Departments" fill="#4DB6AC" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Page>
    )
}
export default HomePage;