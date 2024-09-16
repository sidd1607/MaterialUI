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

import { grey } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import React from "react";

export const Post6 = () => {
  return (
    <Box>
      <Card sx={{ margin: 5, borderRadius: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
              -_-
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Our Leader"
          subheader="September 2, 2024"
        />
        <CardMedia height="20%" alt="Paella dish" />

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/tn6xujf2Jec?si=zsUj9QxiW1Y7a9-b"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Adolf Hitler was careful to cultivate a cult of personality. Images
            of him were carefully selected by the Nazi propaganda machine. This
            extraordinary documentary features photos and film from two
            photographers who dedicated their lives to documenting Hitler:
            Heinrich Hoffmann and assistant Eva Braun. Unpublished photos and
            hours of amateur film footage show a rare glimpse of the unseen
            Hitler.
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
