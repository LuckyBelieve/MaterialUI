import { Box,  } from "@mui/material";
import Post from "./post";
const Feed = () => {
    return (
        <Box flex={4} 
        border={"1px solid lightgray"}
        sx={{
            // backgroundColor:"white",
        }}
        >
          <Post />
          <Post />
          <Post />
          <Post />
        </Box>
    );
}
 
export default Feed;