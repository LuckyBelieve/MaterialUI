import { AppBar, Box, Toolbar, styled,Typography,InputBase, Badge, Avatar, Menu, MenuItem, Button } from "@mui/material";
import {BubbleChart,Close, Mail, Notifications} from '@mui/icons-material';
import {StyledToolbar,Search,Icons,UserBox} from './muiComponents'
import { useState } from "react";

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
            <AppBar bgcolor={"background.default"} position="sticky" sx={{
                // backgroundColor:"lightslategray"
            }}>
                <StyledToolbar>
                   <Typography variant="h5" sx={{
                    display:{
                        xs:"none",
                        sm:"block"
                    }
                   }}> <BubbleChart/>BLgram</Typography>
                   <BubbleChart sx={{
                    display:{
                        xs:"block",
                        sm:"none"
                    }}}/>
                    <Search bgcolor={"background.default"}>
                        <InputBase  placeholder="Search" sx={{
                            width:"80%"
                        }}/>
                        <Button sx={{
                        }}><Close/></Button>
                    </Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail/>
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications/>
                        </Badge>
                        <Avatar 
                        sx={{width:"30px",height:"30px"}}
                        onClick={(e)=>setOpen(true)}
                        />
                    </Icons>
                    <UserBox>
                        <Avatar 
                        sx={{width:"30px",height:"30px"}}
                        onClick={(e)=>setOpen(true)}
                        />
                        <Typography variant="h6">Lucky</Typography>
                    </UserBox>
                </StyledToolbar>
                <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={(e)=>setOpen(false)}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
            </AppBar>
    );
}
 
export default Navbar;