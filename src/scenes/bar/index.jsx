import { Box } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <PageTitle title="BAR CHART" subtitle="Statistics in a Bar Chart Form" />
            <Box height="72vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;