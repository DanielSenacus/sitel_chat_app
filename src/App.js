import React from "react";
import { Navbar, Sidebar, ChatBox } from "./components";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import "./globalStyle.css";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction='row' spacing={2} justifyContent='flex-start'>
        <Sidebar></Sidebar>
        <ChatBox></ChatBox>
        <div>Smart</div>
        <div>Wrap</div>
      </Stack>
    </Box>
  );
};

export default App;
