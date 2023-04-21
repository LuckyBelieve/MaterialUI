import {Box, Modal, Toolbar, styled} from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});
 export const Search = styled(Box)(({theme})=>({
    backgroundColor:"background.default",
    padding:"3px 10px",
    display:"flex",
    justifyContent:"space-between",
    borderRadius:theme.shape.borderRadius,
    width:"40%"

}));
 export const Icons = styled("div")(({theme})=>({
    padding:"0 10px",
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));
export const UserBox = styled(Box)(({theme})=>({
    display:"none",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.down("sm")]:{
        display:"flex"
    }
}));
export const StyledModel = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})