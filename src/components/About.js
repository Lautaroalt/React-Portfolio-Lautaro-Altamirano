import React from 'react'
import { Card, CardMedia,CardContent,makeStyles, Typography, CardActions, Button } from '@material-ui/core';
import pdf from "../images/CV Lautaro Altamirano.pdf"
import Lautaro from "../images/Lautaro.jpg"
import TypeWriterEffect from "react-typewriter-effect"


const About = ({title, dark, id}) => {
    const classes  = useStyles();
  return (
    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
      <Typography variant='h3'> {title}</Typography>
      </div>
      <Card className={classes.card}>
        <CardMedia image={Lautaro} className={classes.media} title="pictureLautaro"/>
        <CardContent className={classes.cardcontent}>
          <TypeWriterEffect
            text="Hi, i am Lautaro Altamirano"
            textStyle={{fontSize:"2rem", fontWeight:"700px", color:"grey"}}
            startDelay={100}
            cursorColor="black"
            typeSpeed={100}
          />
          <TypeWriterEffect
            text="And i am Front End Developer  "
            textStyle={{ fontSize:"1.1rem", fontWeight  :"200px", color:"black"}}
            startDelay={2500}
            cursorColor="black"
            typeSpeed={100}
          />
          <Typography variant= "h6" color="textSecondary">
            Texto descriptivo que tengo que hacer una carta de presentacion como en mi cv
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" 
          className={classes.pdfbutton}>
            <a href={pdf} download>
              Download CV
            </a>
            
          </Button>
        

        </CardActions>
      </Card>
    </div>
  )
}




const useStyles = makeStyles((theme)=> ({
    section: {    
        minHeight:"100vh"
        
    },

    sectiondark:{
        background: "#333",
        color:"#fff",

    },

    sectioncontent:{
       maxWidth: "80vh",
       margin:"0 auto",

    },
    card:{
      height:"70vh",
      display:"flex",
      marginTop: theme.spacing(6),
      position:"relative",
      
    },
    media:{
      width:"250px",
      height:"auto",
      objectFit: "cover",
      borderRadius:"5px",
      margin: theme.spacing(4),
    },
    cardcontent:{
      marginTop: theme.spacing(2),
      "& h6": {
        marginTop: theme.spacing(7),
        [theme.breakpoints.down("sm")]:{
          display:"none"

        },
      },
    },

    pdfbutton: {
      position:'absolute',
      bottom:"1.5rem",
      right:"3.5rem",
      [theme.breakpoints.down("sm")]:{
        bottom: "2.1rem",
        right:"1rem",
      },
      backgroundColor:"grey",
      padding: theme.spacing(2),
      "&:hover":{
        backgroundColor:"#fff"
      },
      "& a": {
        color:"#fff",
        textDecoration: "none",
        fontWeight:900,
      },
      "& a: hover":{
        color: "black"
      },




    },
    }))


export default About
