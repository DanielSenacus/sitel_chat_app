import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const bull = (
  <Box
    component='span'
    sx={{ display: "block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CustomerCard = () => {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#3D2B61" }} aria-label='recipe'>
            {/* will have proops */}
            12
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <ArrowForwardIosIcon />
          </IconButton>
        }
        title='min'
        // will have proops
        subheader='Guest ID: 9466271...'
      />

      <CardActions>
        {/* select chat buttton here */}
        {/* <Button size='small'>Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default CustomerCard;
