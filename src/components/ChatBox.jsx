import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Toolbar from "@mui/material/Toolbar";

const ChatModule = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  backgroundColor: "#fff",
  width: "60vh",
  padding: "10px",
});

const ChatActions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#B1A9A9",
  width: "60vh",
  height: "20px",
  padding: "10px",
});

const ModuleTitle = styled(Typography)({
  fontFamily: "monospace",
  fontWeight: 700,
  color: "#3D2B61",
  fontSize: "20px",
});
const ChatBox = () => {
  return (
    <Box display='block' flexDirection='column' padding='10px'>
      <ChatModule>
        <Box display='flex'>
          <ModuleTitle>PROFILE</ModuleTitle>
          <InfoIcon sx={{ marginLeft: "10px", color: "#3D2B61" }}></InfoIcon>
        </Box>
      </ChatModule>
      <Divider></Divider>
      <ChatModule>
        <ModuleTitle>Journey</ModuleTitle>
      </ChatModule>
      <Divider></Divider>
      <ChatModule>Chat screen</ChatModule>
      <ChatActions>
        <Typography>00:39</Typography>
        <Box></Box>
      </ChatActions>
      <ChatModule></ChatModule>
    </Box>
  );
};

export default ChatBox;
