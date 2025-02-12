import { Box, Toolbar, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import PageTitle from "../../components/PageTitle";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", flex: 1, headerAlign: "left", Align: "left", cellClassName: "name-column--cell"},
        { field: "phone", headerName: "Phone Number", flex:1 },
        { field: "email", headerName: "E-Mail", flex:1 },
        { field: "address", headerName: "Address", flex:1 },
        { field: "city", headerName: "City", flex:1 },
        { field: "zipCode", headerName: "Zip Code", flex:1 },
    ]; //id = number ID, headername is the title of the column that will be presented

    return (
        <Box m="20px">
            <PageTitle title = "CONTACTS" subtitle="List of Contact Information" />
            <Box m="40px 0 0 0" height="75vh" sx= {{ 
                "& .MuiDataGrid-root": {border: "none"},
                "& .MuiDataGrid-cell": {borderBottom: "none"},
                "& .name-column--cell": {color: colors.greenAccent[300]},
                "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                "& .MuiDataGrid-footerContainer": {borderTop: "none", backgroundColor: colors.blueAccent[700]},
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important`},
                }}>
                <DataGrid rows={mockDataContacts}  columns={columns} components={{ Toolbar: GridToolbar /*GridToolbar wont appear*/ }}/>
            </Box>
        </Box>
    );
}

export default Contacts;