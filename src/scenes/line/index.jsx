import { Box } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <PageTitle title="LINE CHART" subtitle="Statistics in a Line Chart Form" />
            <Box height="72vh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;