import { Box } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import GeographyChart from "../../components/GeographyChart";
import { useTheme } from "@mui/material"
import { tokens } from "../../theme"

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <PageTitle title="GEOGRAPHY CHART" subtitle="Statistics in a Geography Chart Form" />
            <Box height="72vh" border = {`1px solid ${colors.grey[100]}`} borderRadius ="4px" >
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;