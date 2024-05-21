import React from 'react';
import html5 from "../images/html5.png";
import csslogo from "../images/csslogo.png";
import jslogo from "../images/jslogo.png";
import pythonlogo from "../images/pythonlogo.png";
import reactlogo from "../images/reactlogo.png";

import { Card, CardContent, CardMedia, Typography, Grid, makeStyles, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(2),
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
    },
    media: {
        height: 140,
        backgroundSize: 'contain',
    },
    stars: {
        color: '#FFD700',
    },
}));

const Technologies = () => {
    const classes = useStyles();
    const skills = [
        {
            year: "2022",
            src: html5,
            title: "HTML5",
            stars: 4,
            topics: ["Forms", "Media Elements", "Canvas", "SVG",],
        },
        {
            year: "2022",
            src: csslogo,
            title: "CSS",
            stars: 4,
            topics: ["Flexbox", "Grid", "Animations", "Transitions", "Transforms", "Media Queries"],
        },
        {
            year: "2023",
            src: jslogo,
            title: "Javascript",
            stars: 3,
            topics: ["Variables", "DOM", "Objets", "Nodejs", "Storage & Json", "Event Loop"],
        },
        {
            year: "2024",
            src: pythonlogo,
            title: "Python",
            stars: 4,
            topics: ["Data", "List", "Bucles", "POO", "COnditionals",],
        },
        {
            year: "2024",
            src: reactlogo,
            title: "React",
            stars: 3,
            topics: ["JSX", "API", "React Router", "Redux", "Prop Types", "Components"],
        },
    ];

    return (
        <Grid container spacing={2}>
            {skills.map(({ year, src, title, stars, topics }, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={src}
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Year: {year}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.stars}>
                                {'⭐'.repeat(stars)}
                            </Typography>
                            <Grid container>
                                <Grid item xs={6}>
                                    <List>
                                        {topics.slice(0, 3).map((topic, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemText primary={topic} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item xs={6}>
                                    <List>
                                        {topics.slice(3).map((topic, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemText primary={topic} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Technologies;
