import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import { purple } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import React from "react";

export const Post7 = () => {
  return (
    <Box>
      <Card sx={{ margin: 5, borderRadius: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Camerawalebhaiya"
          subheader="Dec 2, 2022"
        />
        <CardMedia height="20%" alt="Paella dish" />

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/XA5BprSU2ZQ?si=Zu1gVAnZvI5TyOW8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Typography sx={{}}>
              <b>My spiritual experience | uttarakhand vlog</b>
            </Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
            suscipit recusandae. Consequuntur reprehenderit, repudiandae
            incidunt, totam, sunt et similique exercitationem quidem asperiores
            laudantium quibusdam dolorem in laborum voluptatem. Culpa,
            architecto?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              color="error"
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
