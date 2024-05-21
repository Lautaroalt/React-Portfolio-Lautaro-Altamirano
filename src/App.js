import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact"




function App() {
  const classes  = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <About  title="About Me" id="about" dark= {true} />
      <Skills title="My programming skills"  id="skills" dark= {false} />

      <MyWork title="My Proyects " id="work" dark= {true} />
      <Contact title="Contact me"  id="contact" dark= {false} />
    </div>
  );
}


const useStyles = makeStyles((theme)=> ({
  root: {
    textAlign: 'center',
  },
  title: {
    marginTop: '1.5rem',
  },
  }))



export default App;
