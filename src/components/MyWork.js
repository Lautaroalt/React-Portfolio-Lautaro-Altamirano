import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardMedia, Button, Grid } from '@material-ui/core';
import bodega from "../images/bodega.jpg"
import burger from "../images/burger.jpg"
import Westcoast from "../images/westcoast.png"
import coffee from "../images/mendozacoffee.jpg"

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  const cards = [
    {
      title: "Boss Burger",
      image: burger,
      description: "Page about a ecommerce Burger in Mendoza",
      link: "https://lautaroalt.github.io/e-commerce.burger/#"
    },
    {
      title: "Westcoast Clothes",
      image: Westcoast,
      description: "Ecommerce of clothes.",
      link: "https://lautaroalt.github.io/eCommerce-Clothes/"
    },
    {
      title: "Santander Winery",
      image: bodega,
      description: "Landing Page about a Winery in Mendoza.",
      link: "https://lautaroalt.github.io/LandingPage-Winery/"
    },
    {
      title: "MendozaCoffee",
      image: coffee,
      description: "Page made with react, based on a cafe located in Mendoza",
      link: "https://mendozacoffee.netlify.app/"
    }
  ];

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`} id={id}>
      <div className={classes.sectioncontent}>
        <Typography variant='h3'>{title}</Typography>
        <Grid container justify="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={card.image}
                  title={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="green" 
                    className={classes.button}
                    href={card.link}
                    target="_blank"
                  >
                    Go to the website
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
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
    padding: theme.spacing(3),
  },
  root: {
    maxWidth: 345,
    marginLeft:"60px",
    margin: theme.spacing(5  ),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '9px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
    borderRadius: "20px",
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default MyWork;
