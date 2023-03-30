import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Note(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Note {props.index}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <DeleteOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
