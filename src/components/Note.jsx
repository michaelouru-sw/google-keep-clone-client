import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Note(props) {
  function deleteNote(event) {
    props.deleteNote(props.id);
  }
  return (
    <Card sx={{ minWidth: 275 }} className="note">
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
        <Button size="small" onClick={deleteNote}>
          <DeleteOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
