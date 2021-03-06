import React from 'react';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import { Box, Container } from '@material-ui/core';
//import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark,
  },
  main: {
    height: '100vh',
    padding: 24
  },
  toolbar: {
    minHeight: 64,
  },
}));

function Home() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box>
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;