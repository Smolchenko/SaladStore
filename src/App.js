import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import Header from './components/Header'
import Main from './components/Main'
import { Routes, Route, Link } from "react-router-dom";
import Ingredients from './components/Ingredients';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontFamily: "'Raleway', sans-serif"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Routes>
        {/* <Main /> */}
        <Route path="/" element={<Main />} />
        <Route path="ingredients" element={<Ingredients />} />
      </Routes>
      {/* <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            Wake Up Early, Eat Fresh & Healthy 
          </Typography> 
        </Toolbar>
      </AppBar>
      <main>
      </main> */}
    </div>
      // <Button variant="contained">Hello World</Button>
      // <Typography variant="h1"> Hello! </Typography>
  );
}

export default App;
