import { Box } from "@mui/material";
import PageTitle from "../../components/PageTitle";

const Dashboard = () => {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <PageTitle title="DASHBOARD" subtitle="All the Information in One Page" />
        </Box>
    </Box>
    );
};

export default Dashboard;