import { Box } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <PageTitle title="PIE CHART" subtitle="Statistics in a Pie Chart Form" />
            <Box height="72vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;