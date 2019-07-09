import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    width: "200px",
    height: "325px"
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{}}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://picsum.photos/200/150"
            title="Contemplative Reptile"
          >
            <div>
              <p
                style={{
                  backgroundColor: "#ff8f00",
                  color: "#ffffff",
                  width: 80
                }}
              >
                /250 Gram
              </p>
            </div>
          </CardMedia>
          <CardMedia
            className={classes.media}
            image="https://picsum.photos/200/150"
            title="Contemplative Reptile"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end"
              }}
            >
              <p
                style={{
                  backgroundColor: "#ff8f00",
                  color: "#ffffff",
                  width: 80
                }}
              >
                /250 Gram
              </p>
            </div>
          </CardMedia>
          <CardContent style={{ padding: 5 }}>
            <Typography
              component="p"
              style={{ fontWeight: "bold", fontWeight: "20px" }}
            >
              <p style={{ margin: 0 }}>Pulpen</p>
            </Typography>
            <Typography
              component="p"
              style={{ fontWeight: "bold", fontWeight: "20px" }}
            >
              <p>
                <strong>Rp 1.500</strong>
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary" style={{}}>
            Tambahkan
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
