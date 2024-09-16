import {
  Fab,
  IconButton,
  Tooltip,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React, { useState } from "react";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Styledmodal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Image"
        sx={{
          position: "fixed",
          bottom: 20,
          //   left: { xs: "calc(50% - 25px)", md: "30" },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <Styledmodal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Typography variant="span" fontWeight={500}>
              Cillian Murphy
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <CameraAltIcon color="secondary" />
            <PersonAddIcon color="success" />
            <AddPhotoAlternateIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group "
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Styledmodal>
    </div>
  );
};
