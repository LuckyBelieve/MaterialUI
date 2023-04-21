import { Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography,CardActions } from "@mui/material";
import creed from '../assets/chat.webp'
const Post = () => {
    return (
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="300"
        image={creed}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    );
}
 
export default Post;