import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/SearchOutlined"; //manually import each icon from MUI website
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"; 
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    //Box is like div but you can directly put CSS component into it
    return (
        <Box display="flex" justifyContent="space-between" p={2}> 
        {/* Search bar on the left */}
        <Box 
        display="flex"
        backgroundColor= {colors.primary[400]}
        borderradius="3px">
            <InputBase sx={{ml:2, flex: 1}} placeholder="Search" />
            <IconButton type="button" sx={{ p:1}}>
                <SearchIcon/>
            </IconButton>
        </Box>

        {/* Buttons on the right */}
        <Box display="flex">
            <IconButton onClick ={colorMode.toggleColorMode}> {/* Display light mode and dark mode button */}
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton> 
            <IconButton> {/* Display notification button */}
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton> {/* Display settings button */}
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton> {/* Display profile button */}
                <PersonOutlinedIcon/>
            </IconButton>
        </Box>
    </Box> 
    
    ); 
};

export default Header;