import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material";
import Container from "@mui/material/Container";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Dehaze from "@mui/icons-material/Dehaze";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";

const charts = ["N.Chats", "T.chats", "AHT"];
const status = ["Available", "Busy", "Break"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenStatusMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseStatusMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          sx={{
            mr: 2,
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          AGENT CONSOLE
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            sx={{ color: "#fff", fontFamily: "monospace", fontWeight: 700 }}
          >
            <Typography
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#FCB500",
              }}
            >
              1
            </Typography>
            N.Chats
          </Button>
          <Button
            sx={{ color: "#fff", fontFamily: "monospace", fontWeight: 700 }}
          >
            {" "}
            <Typography
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#FCB500",
              }}
            >
              5
            </Typography>
            T.Chats
          </Button>
          <Button
            sx={{ color: "#fff", fontFamily: "monospace", fontWeight: 700 }}
          >
            {" "}
            <Typography
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#FCB500",
              }}
            >
              16:37
            </Typography>
            AHT
          </Button>
          <Button
            sx={{ color: "#fff", fontFamily: "monospace", fontWeight: 700 }}
          >
            <Dehaze
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            ></Dehaze>
          </Button>
          <Button
            sx={{ color: "#fff", fontFamily: "monospace", fontWeight: 700 }}
          >
            <CheckCircle
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#00FF66",
              }}
            />
            <Typography
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#FFF",
              }}
            >
              User is Available
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
