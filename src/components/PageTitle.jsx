import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const PageTitle = ({title, subtitle}) => { // Page title should take 2 of these components
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);  
        return (
        <Box mb="30px">
            <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px"}}>
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default PageTitle