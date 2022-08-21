import {Box} from "@mui/material";
import {Helmet} from "react-helmet-async";

const metaData = [
    {
        name: "twitter:card",
        content: "summary_large_image",
        property: false
    },
    {
        name: "twitter:image",
        content: "logo512.png",
        property: false
    },
    {
        name: "twitter:title",
        content: "HRMS System Designed With React",
        property: false
    },
    {
        name: "twitter:creator",
        content: "Rakibul Hasan",
        property: false
    },
    {
        name: "twitter:site",
        content: "Rakibul Hasan",
        property: false
    },
    {
        name: "twitter:description",
        content: "A simple Human Resource Management System designed with react to learn and test my skills",
        property: false
    },
    {
        name: "og:type",
        content: "website",
        property: true
    },
    {
        name: "og:url",
        content: "www.google.com",
        property: true
    },
    {
        name: "og:title",
        content: "HRMS System Designed With React",
        property: true
    },
    {
        name: "twitter:description",
        content: "A simple Human Resource Management System designed with react to learn and test my skills",
        property: true
    },
    {
        name: "og:image",
        content: "logo512.png",
        property: true
    },
]


const Page = ({children=(<h4>Please add some children</h4>), title = "", metadata=metaData}) => {
    return(
        <Box>
            <Helmet>
                <title>{`${title} | HRMS`}</title>
                {metadata.map((meta, index) => (
                    meta?.property ? <meta key={index} property={meta?.name} content={meta?.content} /> : <meta key={index} name={meta?.name} content={meta?.content} />
                ))}
            </Helmet>
            {children}
        </Box>
    )
}

export default Page;