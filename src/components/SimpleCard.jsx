import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles({
  card: {
    width: "75px",
    height: "60px",
    margin: "5px",
    borderRadius: "4px",
    backgroundImage: "url(https://picsum.photos/75/75)",
    flexGrow: "1",
    flexShrink: "0"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "500px",
          overflowX: "scroll"
        }}
      >
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <h3 />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
