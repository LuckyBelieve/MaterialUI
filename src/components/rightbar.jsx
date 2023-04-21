import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import recipe from '../assets/recipe3.webp'
import * as React from 'react';
import styled from "@emotion/styled";
const RightBar = () => {
    return (
        <Box
        border={"1px solid lightgray"}
        borderRadius="10px"
        flex={2} p={2} sx={{display:{xs:"none",sm:"block"},
        // backgroundColor:"white"
        }}
        >
        <Box position="fixed" width={300}
        //  sx={{
        //   width:{
        //     xs:""
        //   }
        //  }}
         >
            <Typography variant="h6"  mb={2}>Online friends</Typography>
            <AvatarGroup max={8} >
                <Avatar alt="Remy Sharp" sx={{ bgcolor:"lightblue" }}>R</Avatar>
                <Avatar alt="Travis Howard" sx={{ bgcolor:"lightblue" }}>T</Avatar>
                <Avatar alt="Cindy Baker" sx={{ bgcolor:"lightblue" }}>C</Avatar>
                <Avatar alt="Agnes Walker" sx={{ bgcolor:"lightblue" }}>A</Avatar>
                <Avatar alt="Trevor Henderson" sx={{ bgcolor:"lightblue" }}>T</Avatar>
                <Avatar alt="Agnes Walker" sx={{ bgcolor:"lightblue" }}>A</Avatar>
                <Avatar alt="Trevor Henderson" sx={{ bgcolor:"lightblue" }} >T</Avatar>
                <Avatar alt="Agnes Walker" sx={{ bgcolor:"lightblue" }}>A</Avatar>
                <Avatar alt="Trevor Henderson" sx={{ bgcolor:"lightblue" }}>T</Avatar>
                <Avatar alt="Agnes Walker" sx={{ bgcolor:"lightblue" }}>A</Avatar>
                <Avatar alt="Trevor Henderson" sx={{ bgcolor:"lightblue" }} >T</Avatar>
            </AvatarGroup>
            <Typography variant="h6"  mt={2} mb={2}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                    <img src={recipe} alt="recipe"/>
                </ImageListItem>
                <ImageListItem>
                    <img src={recipe} alt="recipe"/>
                </ImageListItem>
                <ImageListItem>
                    <img src={recipe} alt="recipe"/>
                </ImageListItem>
            </ImageList>
            <Typography variant="h6" mt={2} mb={2}>Latest conversations</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar> 
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
        </Box>
    );
}
 
export default RightBar;