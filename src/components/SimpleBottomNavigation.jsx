import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Toc from "@material-ui/icons/Toc";
import Help from "@material-ui/icons/Help";
import PersonPin from "@material-ui/icons/PersonPin";
import HomeOutlined from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const myStyle = {
    width: "500px",
    border: "1px solid #E0E0E0",
    position: "fixed",
    bottom: "0"
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={myStyle}
    >
      <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
      <BottomNavigationAction label="Transaction" icon={<Toc />} />
      <BottomNavigationAction label="Help" icon={<Help />} />
      <BottomNavigationAction label="Account" icon={<PersonPin />} />
    </BottomNavigation>
  );
}
