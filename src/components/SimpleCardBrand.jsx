import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles({
  card: {
    width: "100px",
    height: "100px",
    margin: "15px 15px 15px 10px"
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
  const styleCard = {
    borderRadius: "4px",
    backgroundImage: "url(https://picsum.photos/100/100)"
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Card className={classes.card} style={styleCard}>
        <CardContent>
          <h3 />
        </CardContent>
      </Card>
      <Card className={classes.card} style={styleCard}>
        <CardContent>
          <h3 />
        </CardContent>
      </Card>
      <Card className={classes.card} style={styleCard}>
        <CardContent>
          <h3 />
        </CardContent>
      </Card>
      <Card className={classes.card} style={styleCard}>
        <CardContent>
          <h3 />
        </CardContent>
      </Card>
    </div>
  );
}
