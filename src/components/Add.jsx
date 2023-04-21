import { Box, Fab, Modal, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react";
import {StyledModel} from './muiComponents'

const Add = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
    <Tooltip onClick={e=>setOpen(true)}
    title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:20}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>   
    </Tooltip>
    <StyledModel
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} sx={{width:{md:"35%",sm:"50%",xs:"70%"}, height:{md:"50%",xs:"30%"}, padding:3,borderRadius:"10px"}}>
          <Typography variant="h6" color={"grey"} textAlign={"center"}>Create Post</Typography>
          <TextField
          sx={{
            width:"100%",
          }}
          id="standard-multiline-flexible"
          label="what's on your mind"
          multiline
          maxRows={6}
          variant="standard"
        />
        </Box>
      </StyledModel>
    </>
    );
}
 
export default Add;