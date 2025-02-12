import { Box, colors, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PageTitle from "../../components/PageTitle";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", flex: 1, headerAlign: "left", Align: "left", cellClassName: "name-column--cell"},
        { field: "phone", headerName: "Phone Number", flex:1 },
        { field: "email", headerName: "E-Mail", flex:1 },
        { field: "access", headerName: "Aceess Level", flex:1, renderCell: ({ row: { access}}) => {
            return (
                <Box width="60%" m="0 auto" p="5px" displat="flex" justifyContent="center" backgroundColor={
                    access === "admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
                >
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                    {access === "manager" && <SecurityOutlinedIcon/>}
                    {access === "user" && <LockOpenOutlinedIcon/>}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}> {access} </Typography>
                </Box> 
            );
        },
        },
    ]; //id = number ID, headername is the title of the column that will be presented

    return (
        <Box m="20px">
            <PageTitle title = "TEAM" subtitle="Managing Team Members" />
            <Box m="40px 0 0 0" height="75vh" sx= {{ 
                "& .MuiDataGrid-root": {border: "none"},
                "& .MuiDataGrid-cell": {borderBottom: "none"},
                "& .name-column--cell": {color: colors.greenAccent[300]},
                "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                "& .MuiDataGrid-footerContainer": {backgroundColor: colors.blueAccent[700], borderTop: "none"}
                }}>
                <DataGrid rows = {mockDataTeam}  columns={columns}/>
            </Box>
        </Box>
    )
}

export default Team;