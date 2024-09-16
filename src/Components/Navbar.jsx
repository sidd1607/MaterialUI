import { AppBar, InputBase, styled, Toolbar, Typography } from "@mui/material";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import Badge from "@mui/material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      sx={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
    >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {" "}
          FaceTook{" "}
        </Typography>
        <UpcomingIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "black" }} />
          </IconButton>
          <InputBase placeholder="Search here.." sx={{ color: "black" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/static/images/avatar/1.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="span">User</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem sx={{ color: "red" }}>
          <LogoutIcon />
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
