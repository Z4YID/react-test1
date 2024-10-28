import { Box, useTheme, Typography } from "@mui/material";
import {Accordion} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import PageTitle from "../../components/PageTitle";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Box m="20px">
        <PageTitle title="FAQ" subtitle="Frequently Asked Questions" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5"> What is MMCSB? </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                   Multimedia Consulting Sdn Bhd (MMCSB), formerly known as MRCB Multimedia Consortium Sdn Bhd, is a leading group of specialised consulting firms based in Malaysia
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5"> What services do we offer? </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Our expertise spans across multimedia production, including video, audio, and graphic design, ensuring that your content is engaging and visually stunning. We also 
                provide cutting-edge technology solutions, such as web and mobile app development, to help you stay ahead in the digital landscape.
                <br/><br/>⚘ New System Application Development
                <br/>⚘ Video Production and Editing Services
                <br/>⚘ Cyber Security Audit
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
};

export default FAQ;