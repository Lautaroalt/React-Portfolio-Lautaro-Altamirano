import React from 'react';
import { makeStyles, Typography, Link, Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`} id={id}>
      <div className={classes.sectioncontent}>
        <Typography variant='h3'>{title}</Typography>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="mailto:lautaroaltamiranoramirez@gmail.com" className={classes.link}>
              <EmailIcon className={classes.icon} />
              lautaroaltamiranoramirez@gmail.com
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="https://www.linkedin.com/in/lautaro-altamirano-827801237/" className={classes.link}>
              <LinkedInIcon className={classes.icon} />
              LinkedIn
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="https://github.com/Lautaroalt" className={classes.link}>
              <GitHubIcon className={classes.icon} />
              GitHub
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link href="https://www.instagram.com/lautaro.altt" className={classes.link}>
              <InstagramIcon className={classes.icon} />
              Instagram
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// Movemos los estilos al final del archivo
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "25vh", // Reducir la separación superior
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: '2rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export default Contact;
