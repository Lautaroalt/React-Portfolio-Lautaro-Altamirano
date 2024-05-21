import React from 'react';
import { Card, CardMedia, CardContent, makeStyles, Typography, CardActions, Button, useMediaQuery, useTheme } from '@material-ui/core';
import pdf from "../images/CV Lautaro Altamirano.pdf";
import Lautaro from "../images/Lautaro.jpg";
import TypeWriterEffect from "react-typewriter-effect";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
      </div>
      <Card className={classes.card}>
        {!isSmallScreen && (
          <CardMedia image={Lautaro} className={classes.media} title="pictureLautaro" />
        )}
        <CardContent className={classes.cardcontent}>
          <TypeWriterEffect
            text="Hi, I am Lautaro Altamirano"
            textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "grey" }}
            startDelay={100}
            cursorColor="black"
            typeSpeed={100}
          />
          <TypeWriterEffect
            text="And i am Front End Developer  "
            textStyle={{ fontSize: "1.1rem", fontWeight: "200px", color: "black", marginTop: "40px" }}
            startDelay={2500}
            cursorColor="black"
            typeSpeed={100}
          />
          <Typography variant="h6" color="textSecondary" className={classes.secondaryText}>
            I am a 24 year old programming student, in the second year of my degree. I have a background in front-end development. I consider myself responsible, easy to learn and adapt quickly to new technologies. I am looking for opportunities to apply and expand my knowledge, and gain practical experience.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" className={classes.pdfbutton}>
            <a href={pdf} download>Download CV</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh"
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vh",
    margin: "0 auto",
  },
  card: {
    minHeight: "70vh",
    display: "flex",
    marginTop: theme.spacing(4),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  media: {
    flex: "0 0 auto", 
    width: "20%", 
    height: "auto",
    objectFit: "cover",
    borderRadius: "5px",
    margin: theme.spacing(1),
  },
  cardcontent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      alignItems: "center",
    },
  },
  pdfbutton: {
    position: 'absolute',
    bottom: "1.5rem",
    right: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      bottom: "3rem",
      right: "1rem",
    },
    backgroundColor: "grey",
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#green"
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "black"
    },
  },
  secondaryText: {
    marginTop: theme.spacing(9), // Aca es donde modifico el texto para darle espacio contra el de arriba
    marginLeft: "0px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(10),
    },
  },
}));

export default About;
