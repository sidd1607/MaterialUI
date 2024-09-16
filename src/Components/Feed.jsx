import { Box } from "@mui/material";

// import { red } from "@mui/material/colors";
// import ShareIcon from "@mui/icons-material/Share";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";
import { Post } from "./Post";
import { Post2 } from "./Post2";
import { Post3 } from "./Post3";
import { Post4 } from "./Post4";
import { Post5 } from "./Post5";
import { Post6 } from "./Post6";
import { Post7 } from "./Post7";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post2 />
      <Post3 />
      <Post4 />
      <Post5 />
      <Post6 />
      <Post7 />
    </Box>
  );
};
