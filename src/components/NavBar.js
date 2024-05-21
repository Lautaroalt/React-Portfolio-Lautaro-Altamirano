import { AppBar, Divider, Drawer, IconButton, List, makeStyles, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import logo from '../images/Logo.png'
import { Link, animateScroll as scroll } from "react-scroll"

import { ContactMail, EmojiObjectsTwoTone, InfoTwoTone, Build } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import CancelIcon from '@material-ui/icons/Cancel'

const links = [
  {
    id: "about",
    text: "About me",
    icon: <InfoTwoTone fontSize='large' />
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsTwoTone fontSize='large' />
  },
  {
    id: "work",
    text: "Projects",
    icon: <Build fontSize='large' />
  },
  {
    id: "contact",
    text: "Contact",
    icon: <ContactMail fontSize='large' />
  },
]

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt='Logo' />
          <List className={classes.menu}>
            {
              links.map(({ id, text, index }) => (
                <Link key={index}
                  to={id}
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  offset={-70}>
                  {text}
                </Link>
              ))
            }
          </List>
          <IconButton edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <MenuIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)} classes={{ paper: classes.drawerPaper }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <CancelIcon className={classes.cancelIcon} fontSize='medium' />
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            links.map(({ id, text, icon }, index) => (
              <Link key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
                className={classes.drawerLink}>
                {icon}
                <span className={classes.linkText}>
                  {text}
                </span>
              </Link>
            ))
          }
        </List>
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: '5rem',
    width: '5rem',
    objectFit: 'contain',
    "&:hover": {
      cursor: "pointer"
    }
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    },
    "& a:hover": {
      cursor: "pointer",
      color: "grey",
      borderBottom: "3px solid red",
    }
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "grey",
    }
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  cancelIcon: {
    color: "red",
  },
  drawerLink: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: 'grey',
    },
  },
  linkText: {
    marginLeft: theme.spacing(2),
  },
  drawerPaper: {
    width: '200px',
    [theme.breakpoints.down("sm")]: {
      width: '40%',
    },
  },
}));

export default NavBar;
