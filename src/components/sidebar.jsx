import { Article, Group, Home, Nightlight, PeopleAltOutlined, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../App";
const Sidebar = () => {
  const { mode,setMode } = useContext(themeContext)
    return (
        <Box 
        flex={1}
        p={2}
        border={"1px solid lightgray"}
        borderRadius="10px"
        sx={{
            // backgroundColor:"white",
            display:{xs:"none",md:"block" }
    }}
        >
            <Box position="fixed">
        <List>
          <ListItem disablePadding sx={({theme})=>({
            // backgroundColor:"lightgoldenrodyellow",
            borderRadius:"10px"
          })}>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltOutlined/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Nightlight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark":"light")}/>
              {/* <Switch/> */}
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        </Box>
    );
}
 
export default Sidebar;